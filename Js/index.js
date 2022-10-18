let btns=document.getElementById('mybtn');
let storyIndex=-1;
let storyInterval;
let myPage=0;

btnName=[
  {name:'PLAY', component:''},
  {name:'ABOUT', component:''},
  {name:'GUIDE', component:''},
  {name:'THE STORY', component:'./pages/thestory.html'}
];
elsha='';




if (myPage==0) {
  for (let index = 0; index < btnName.length; index++) {
    btns.innerHTML+=`<div>
    <button id='menu' class="btn btn-light w-100">${btnName[index].name}</button>
    </div>`
    }
}


let menu=document.querySelectorAll('#menu');
menu.forEach((element, i) => {
  element.addEventListener('click', function (params) {
    console.log(i);
   if (i==0) {
    myVoicePlay();
    document.getElementById('home').hidden=true;
    document.getElementById('play').hidden=false;
    life();
    level();
    mySprite();
   }
   if (i==2) {
    myVoice();
    document.getElementById('home').hidden=true;
    document.getElementById('def').hidden=false;
   }
   if (i==3) {
    myVoice();
    document.getElementById('home').hidden=true;
    document.getElementById('sto').hidden=false;
   }
  })
});

let live=5;
my_level=1;
let inval;
let count=0;
let sec=0;

function life(params) {
  for (let i = 0; i < live; i++) {
    document.getElementById('life').innerHTML+=`<img src="./image/life.png">`
  }
}

function level(){
  document.getElementById('level').innerHTML='LV'+my_level;
}
// mySprite();

function mySprite(params) {
  document.getElementById('car').style.position='absolute';
  document.getElementById('car').style.left=75+'%';    
  document.getElementById('bullet').style.position='absolute';
  document.getElementById('bullet').style.left=75+'%';  
  aimFire();  
}

function aimFire(params) {
  let x=210;
  let y=Math.floor(Math.random()*200);
  var canv=document.getElementById('canvas')
  var context=canv.getContext('2d')
  var bul=document.getElementById('bullet')
  context.drawImage(bul,210,y,10,10)
  inval=setInterval(() => {
    x=x-20;
    sec+=100;
     if (sec==18000) {
      clearInterval(inval);
     sec=0;
      x=240;
      context.drawImage(bul,x,y,10,10)
      setTimeout(() => {
        context.clearRect(0,0,1365,657)
        context.drawImage(bul,x,y,10,10)
        aimFire();
      }, 2000);
     }
    if (x<=0) {
      clearInterval(inval);
      x=210;
      aimFire();
    }
    context.clearRect(0,0,1365,657)
   context.drawImage(bul,x,y,10,10)
   document.getElementById('car').style.top=(y/5)+'%'; 
  }, 100);
}


function myVoice(params) {
 var audio=new Audio('./efx/relax-in-the-forest-background-music-for-video-9145.mp3');
audio.play();
}
function myVoicePlay(params) {
 var audio=new Audio('./efx/birds39-forest-20772.mp3');
audio.play();
}



