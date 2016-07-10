			var group,controls_back;
			var container;
			var particlesData = [];
			var camera_back, scene_back, renderer;
			var positions,colors;
			var pointCloud;
			var particlePositions;
			var linesMesh;

			var maxParticleCount = 1000;
			var particleCount = 0;
			var r = 1200;
			var rHalf = r / 2;

			var effectController = {
				showDots: true,
				showLines: true,
				minDistance: 150,
				limitConnections: false,
				maxConnections: 20,
				particleCount: 0
			}

			init();
			animate();


			function init() {

				container = document.getElementById( 'container' );

				//

				camera_back = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 4000 );
				camera_back.position.z = 1000;


				scene_back = new THREE.Scene();


				group = new THREE.Group();
				scene_back.add( group );

				var segments = maxParticleCount * maxParticleCount;

				positions = new Float32Array( segments * 3 );
				colors = new Float32Array( segments * 3 );

				var pMaterial = new THREE.PointCloudMaterial( {
					color: 0xFF0000,
					size: 3,
					blending: THREE.AdditiveBlending,
					transparent: true,
					sizeAttenuation: false
				} );

				particles = new THREE.BufferGeometry();
				particlePositions = new Float32Array( maxParticleCount * 3 );

				for ( var i = 0; i < maxParticleCount; i++ ) {

					var x = Math.random() * r - r / 2;
					var y = Math.random() * r - r / 2;
					var z = Math.random() * r - r / 2;

					particlePositions[ i * 3] = x;
					particlePositions[ i * 3 + 1 ] = y;
					particlePositions[ i * 3 + 2 ] = z;

					// add it to the geometry
					particlesData.push( {
						velocity: new THREE.Vector3( -1 + Math.random() * 2, -1 + Math.random() * 2,  -1 + Math.random() * 2 ),
						numConnections: 0
					} );

				}

				particles.drawcalls.push( {
					start: 0,
					count: particleCount,
					index: 0
				} );

				particles.addAttribute( 'position', new THREE.DynamicBufferAttribute( particlePositions, 3 ) );

				// create the particle system
				pointCloud = new THREE.PointCloud( particles, pMaterial );
				group.add( pointCloud );

				var geometry = new THREE.BufferGeometry();

				geometry.addAttribute( 'position', new THREE.DynamicBufferAttribute( positions, 3 ) );
				geometry.addAttribute( 'color', new THREE.DynamicBufferAttribute( colors, 3 ) );

				geometry.computeBoundingSphere();

				geometry.drawcalls.push( {
					start: 0,
					count: 0,
					index: 0
				} );

				var material = new THREE.LineBasicMaterial( {
					vertexColors: THREE.VertexColors,
					blending: THREE.AdditiveBlending,
					transparent: true,
					color:'#ff0000'
				} );

				linesMesh = new THREE.Line( geometry, material, THREE.LinePieces );
				group.add( linesMesh );

				//

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );

				renderer.gammaInput = true;
				renderer.gammaOutput = true;

				container.appendChild( renderer.domElement );
			}

			window.addEventListener('resize',function(){
            	camera_back.aspect = window.innerWidth / window.innerHeight;
            	renderer.setSize( window.innerWidth, window.innerHeight );
				camera_back.updateProjectionMatrix();
				
        	},true);


			function animate() {

				var vertexpos = 0;
				var colorpos = 0;
				var numConnected = 0;

				for ( var i = 0; i < particleCount; i++ )
					particlesData[ i ].numConnections = 0;

				for ( var i = 0; i < particleCount; i++ ) {

					// get the particle
					var particleData = particlesData[i];

					particlePositions[ i * 3     ] += particleData.velocity.x;
					particlePositions[ i * 3 + 1 ] += particleData.velocity.y;
					particlePositions[ i * 3 + 2 ] += particleData.velocity.z;

					if ( particlePositions[ i * 3 + 1 ] < -rHalf || particlePositions[ i * 3 + 1 ] > rHalf )
						particleData.velocity.y = -particleData.velocity.y;

					if ( particlePositions[ i * 3 ] < -rHalf || particlePositions[ i * 3 ] > rHalf )
						particleData.velocity.x = -particleData.velocity.x;

					if ( particlePositions[ i * 3 + 2 ] < -rHalf || particlePositions[ i * 3 + 2 ] > rHalf )
						particleData.velocity.z = -particleData.velocity.z;

					if ( effectController.limitConnections && particleData.numConnections >= effectController.maxConnections )
						continue;

					// Check collision
					for ( var j = i + 1; j < particleCount; j++ ) {

						var particleDataB = particlesData[ j ];
						if ( effectController.limitConnections && particleDataB.numConnections >= effectController.maxConnections )
							continue;

						var dx = particlePositions[ i * 3     ] - particlePositions[ j * 3     ];
						var dy = particlePositions[ i * 3 + 1 ] - particlePositions[ j * 3 + 1 ];
						var dz = particlePositions[ i * 3 + 2 ] - particlePositions[ j * 3 + 2 ];
						var dist = Math.sqrt( dx * dx + dy * dy + dz * dz );

						if ( dist < effectController.minDistance ) {

							particleData.numConnections++;
							particleDataB.numConnections++;

							var alpha = 1.0 - dist / effectController.minDistance;

							positions[ vertexpos++ ] = particlePositions[ i * 3     ];
							positions[ vertexpos++ ] = particlePositions[ i * 3 + 1 ];
							positions[ vertexpos++ ] = particlePositions[ i * 3 + 2 ];

							positions[ vertexpos++ ] = particlePositions[ j * 3     ];
							positions[ vertexpos++ ] = particlePositions[ j * 3 + 1 ];
							positions[ vertexpos++ ] = particlePositions[ j * 3 + 2 ];

							colors[ colorpos++ ] = alpha;
							colors[ colorpos++ ] = alpha;
							colors[ colorpos++ ] = alpha;

							colors[ colorpos++ ] = alpha;
							colors[ colorpos++ ] = alpha;
							colors[ colorpos++ ] = alpha;

							numConnected++;
						}
					}
				}


				linesMesh.geometry.drawcalls[ 0 ].count = numConnected * 2;
				linesMesh.geometry.attributes.position.needsUpdate = true;
				linesMesh.geometry.attributes.color.needsUpdate = true;

				pointCloud.geometry.attributes.position.needsUpdate = true;

				requestAnimationFrame( animate );

				render_back();

			}

			function render_back() {

				var time = Date.now() * 0.001;
				if(particleCount<500){
					particleCount +=5;
					particles.drawcalls[ 0 ].count = particleCount;
				}
				group.rotation.y = time * 0.1;
				renderer.render( scene_back, camera_back );

			}