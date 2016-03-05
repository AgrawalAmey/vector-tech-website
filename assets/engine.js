var click_flag=1;
var active_nav;
var active;
var torus_configs=[[6,7,2],[5,9,6],[5,7,6],[10,2,3],[6,6,15]];

title = document.getElementById('inner');

document.getElementsByClassName('navigator')[0].childNodes[1].style.color='#ff0000';

for(i=0;i<4;i++){
  active_nav = document.getElementsByClassName('navigator')[0].childNodes[(2*i)+1];
  active_nav.role=i;
  active_nav.addEventListener("click",change,false);
}

function activate(page) {
    document.getElementsByClassName('navigator')[0].childNodes[click_flag].style.color='#ffffff';
    page.style.color='#ff0000';
    controls.tabularSegments = torus_configs[page.role][0];
    controls.p=torus_configs[page.role][1];
    controls.q=torus_configs[page.role][2];
    controls.redraw();

    var caller= page;
    title.style.width='0';
    console.log(click_flag);
    document.getElementById('text').childNodes[click_flag].style.opacity='0';
    document.getElementById('text').childNodes[click_flag].style.display='none';
    document.getElementById('text').childNodes[(caller.role*2)+1].style.display='block';
    document.getElementById('text').childNodes[(caller.role*2)+1].style.opacity='1';
    
    setTimeout(function(){
        title.childNodes[1].innerHTML= caller.innerHTML;
        title.style.width='100%';   
    },800); 
    click_flag=(2*page.role)+1;
}

function change() {
    document.getElementsByClassName('navigator')[0].childNodes[click_flag].style.color='#ffffff';
    this.style.color='#ff0000';
    controls.tabularSegments = torus_configs[this.role][0];
    controls.p=torus_configs[this.role][1];
    controls.q=torus_configs[this.role][2];
    controls.redraw();

    var caller= this;
    title.style.width='0';
    console.log(click_flag);
    document.getElementById('text').childNodes[click_flag].style.opacity='0';
    document.getElementById('text').childNodes[click_flag].style.display='none';
    document.getElementById('text').childNodes[(caller.role*2)+1].style.display='block';
    document.getElementById('text').childNodes[(caller.role*2)+1].style.opacity='1';
    
    setTimeout(function(){
        title.childNodes[1].innerHTML= caller.innerHTML;
        title.style.width='100%';   
    },800); 
    click_flag=(2*this.role)+1;
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

window.addEventListener('resize',function(){
            if (screen.width < screen.height) {
            window.location = "http://m.vectortech.in/";
            }
        },true);