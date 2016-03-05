		var menu=document.getElementById('dropdown_menu');
		var icon=document.getElementById('menu');
	 	var maxH=(document.getElementById('dropdown_list_hidden').clientHeight)+"px";
	 	window.addEventListener('resize',maxH=(document.getElementById('dropdown_list_hidden').clientHeight)+"px");
		function dropdown(){
			if(menu.style.height == maxH){
		        menu.style.height = "0px";
		        rotor(0);
		        
		    } else {
		        menu.style.height = maxH;
		        rotor(90);
		    }
		}
		function rotor(angle){
				if(navigator.userAgent.match("Chrome")){
					icon.style.WebkitTransform = "rotate("+angle+"deg)";
				} else if(navigator.userAgent.match("Firefox")){
					icon.style.MozTransform = "rotate("+angle+"deg)";
				} else if(navigator.userAgent.match("MSIE")){
					icon.style.msTransform = "rotate("+angle+"deg)";
				} else if(navigator.userAgent.match("Opera")){
					icon.style.OTransform = "rotate("+angle+"deg)";
				} else {
					icon.style.transform = "rotate("+angle+"deg)";
				}
		}

		var click_flag=0;
		var active_nav;
		var active;

		title = document.getElementById('inner');

		document.getElementsByClassName('dropdown_list')[0].childNodes[1].style.color='#ff0000';

		for(i=0;i<4;i++){
		  active_nav = document.getElementsByClassName('dropdown_list')[0].childNodes[(4*i)+1];
		  active_nav.role=i;
		  active_nav.addEventListener("click",change,false);
		}

		function activate(page) {
			document.getElementsByClassName('dropdown_list')[0].childNodes[(4*click_flag)+1].style.color='#ffffff';
			page.style.color='#ff0000';
			var caller= page;
			title.style.width='0';
			document.getElementById('text').childNodes[(click_flag*2)+1].style.display='none';
			document.getElementById('text').childNodes[(caller.role*2)+1].style.display='block';
			setTimeout(function(){
				title.childNodes[1].innerHTML= caller.innerHTML;
		 		title.style.width='100%';	
		 	},800);	
		    click_flag=page.role;
		}

		function change() {
			dropdown();
			document.getElementsByClassName('dropdown_list')[0].childNodes[(4*click_flag)+1].style.color='#ffffff';
			this.style.color='#ff0000';
			var caller= this;
			title.style.width='0';
			document.getElementById('text').childNodes[(click_flag*2)+1].style.display='none';
			document.getElementById('text').childNodes[(caller.role*2)+1].style.display='block';
			setTimeout(function(){
				title.childNodes[1].innerHTML= caller.innerHTML;
		 		title.style.width='100%';	
		 	},800);	
		    click_flag=this.role;
		}

		//Landing text animation
		var caption = "Design is not just what it looks like and feels like .Design is how it Works."
		var captionLength = 0,captionEl;

		document.addEventListener('load',cursorStart(),true);

		function cursorStart(){
		    setInterval ('cursorAnimation()', 600);
		    captionEl = document.getElementById('quote');
		}

		type();

		function type() {
		  document.getElementById('quote').innerHTML = (caption.substr(0, captionLength++));
		    if(captionLength < caption.length+1) {
		        setTimeout('type()', 50);
		    } else {
		        captionLength = 0;
		        caption = '';
		        document.getElementById('ps').innerHTML="Steve Jobs";
		    }
		}


		function cursorAnimation() {
		    var cursor = document.getElementById('cursor');
		    if(cursor.style.opacity==1){
		    	cursor.style.opacity=0;
		    }else{
		    	cursor.style.opacity=1;
		    }
		    requestAnimationFrame(cursorAnimation);
		}