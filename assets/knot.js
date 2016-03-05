
  var knot,step;
  var angleY=0,angleX=0;
  var counter=1,dx=3;dA=0.005;
  var webGLRenderer ,scene , camera , lights=[];
    // once everything is loaded, we run our Three.js stuff.
  init();
  render();

      function init(){
        var out= document.getElementById('WebGL-output');
        var wid = out.width = 0.4 * window.width;
        var hie= out.height=wid/1.6;
        // create a scene, that will hold all our elements such as objects, cameras and lights.
        scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        // create a render and set the size
        webGLRenderer = new THREE.WebGLRenderer({alpha:true});
        webGLRenderer.setClearColor(0x000000, 0);
        webGLRenderer.setSize(document.getElementById('WebGL-output').clientWidth, document.getElementById('WebGL-output').clientHeight);
        webGLRenderer.shadowMapEnabled = true;

        knot = createMesh(new THREE.TorusKnotGeometry(9,1.73,26,6,7,2,1.1));
        // add the sphere to the scene
        scene.add(knot);

         lights[0] = new THREE.PointLight( 0xffffff, 1, 0 );
            lights[1] = new THREE.PointLight( 0xffffff, 1, 0 );
            lights[2] = new THREE.PointLight( 0xffffff, 1, 0 );
            
            lights[0].position.set( 0, 200, 0 );
            lights[1].position.set( 100, 200, 100 );
            lights[2].position.set( -100, -200, -100 );

            scene.add( lights[0] );
        // position and point the camera to the center of the scene
        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 20;
        camera.lookAt(new THREE.Vector3(10, 0, 0));

        document.getElementById('WebGL-output').appendChild(webGLRenderer.domElement);
        //add the output of the renderer to the html element
        window.addEventListener('resize',function(){
            webGLRenderer.setSize(document.getElementById('WebGL-output').clientWidth, document.getElementById('WebGL-output').clientHeight);
        },true);

        // call the render function
         step = 0;

        // setup the control 
         controls = new function (){
            // we need the first child, since it's a multimaterial
            this.radius = knot.children[0].geometry.parameters.radius;
            this.tube = 1.73;
            this.radialSegments = knot.children[0].geometry.parameters.radialSegments;
            this.tubularSegments = knot.children[0].geometry.parameters.tubularSegments;
            this.p = knot.children[0].geometry.parameters.p;
            this.q = knot.children[0].geometry.parameters.q;
            this.heightScale = knot.children[0].geometry.parameters.heightScale;

            this.redraw = function () 
            {
                // remove the old plane
                scene.remove(knot);
                // create a new one

                knot = createMesh(new THREE.TorusKnotGeometry(controls.radius, controls.tube, Math.round(controls.radialSegments), Math.round(controls.tubularSegments), Math.round(controls.p), Math.round(controls.q), controls.heightScale));
                // add it to the scene.
                scene.add(knot);

            };
        }
      }

        

        function createMesh(geom) {

            // assign two materials
            var meshMaterial = new THREE.MeshPhongMaterial({
                color:'#ff0000',
                emissive:'#000000',
                specular:'#000000',
                shininiess:30,
                shading: THREE.FlatShading
            });
            

            // create a multimaterial
            var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

            return mesh;
        }

        function render() {
            
            if(counter%229==0){
                dx*=(-1);
                counter=1;
            }

            controls.radialSegments+=dx;
            counter+=3;
            controls.redraw();
           
           knot.rotation.x  += angleX;
           
           if(angleX==110 || angleX==0)
              dA*=(-1);
           angleX+=dA;
            
            // render using requestAnimationFrame
            requestAnimationFrame(render);
            webGLRenderer.render(scene, camera);
        }
