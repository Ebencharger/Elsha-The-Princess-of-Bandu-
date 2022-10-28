let btns=document.getElementById('mybtn');
let myPage=0;
let my_level=1;
let live=5;
let w=200;
let h=200;
let bossX=800;
let bossY=220;
let bossBleft=800;
let bossBTop=220;
let whichAngle='top';
let elshaBleft=0;
let elshaBTop=220;
let elshaX=0;
let loading;
let percentage;
let elshaY=220;
let bulletBossInterval;
let bulletElshaInterval;
let moveInterval;
let hit=0;
let bossLife=10;
let elshaShootInterval=50;
let bossShootInterval=80;
let interval=500;
let imj=new Image();
let elsh=new Image();
let bossBullet=new Image();
let elshaBullet=new Image();
let activeTop;
let isElshaBullet=false;
let amIHit=false;
let pauseBoss;
let pauseBoss2;
let pauseBossB;
let pauseBossB2;
let pauseElsha;
let pauseElsha2;
let pauseElshaB;
let pauseElshaB2;


//draw canvas
let canvas=document.getElementById
('canvas');
let context=canvas.getContext('2d');
 

btnName=[
    {name:'PLAY', component:''},
    {name:'ABOUT', component:''},
    {name:'GUIDE', component:''},
    {name:'THE STORY', component:'./pages/thestory.html'}
  ];
  elsha='';


//if page is home, draw all the buttons
  function myBtn(params) {
    btns.innerHTML='';
    if (myPage==0) {
        for (let index = 0; index < btnName.length; index++) {
          btns.innerHTML+=`<div>
          <button id='menu' class="btn btn-light w-100">${btnName[index].name}</button>
          </div>`
          }
      }
  }

  myBtn();

  //on click  menu button in Hompage
  function men(params) {
    let menu=document.querySelectorAll('#menu');
    menu.forEach((element, i) => {
      element.addEventListener('click', function (params) {
       if (i==0) {
        //    if (screen.width<1000) {
        //     alert('This Game is not Allow on this resolution!');
        //     window.location.href='./index.html';
        //     }
           document.getElementById('home').hidden=true;
        // draw boss
        imj.src='./image/anim-project-removebg-preview-removebg-preview.png';
         //draw Elsha
       elsh.src='./image/actor.png';
        // draw boss bullet
        bossBullet.src='./image/bossfire.png';
         //draw Elsha bullet
       elshaBullet.src='./image/elshafire.png';
       life();
        level();
        updateCharacter();
        myVoicePlay();
        loadGame();
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
  }
  men();

//display elsha lif
function life(params) {
  document.getElementById('life').innerHTML='';
  document.getElementById('enemyLife').innerHTML='';
  document.getElementById('enemyLife').innerHTML='BOSS '+(bossLife-hit);
  for (let i = 0; i < live; i++) {
    document.getElementById('life').innerHTML+=`<img src="./image/life.png">`
  }
}

//display current level
function level(){
  document.getElementById('level').innerHTML='LV'+my_level;
}

//sound
function myVoice(params) {
    var audio=new Audio('./efx/relax-in-the-forest-background-music-for-video-9145.mp3');
   allSound=audio;
   audio.play();
   }
   function myVoicePlay(params) {
    var audio=new Audio('./efx/birds39-forest-20772.mp3');
    allSound=audio;
   audio.play();
   }
   
   //game over restart
   function handleOver(params) {
     window.location.href='./index.html';
       allSound.pause();
   }

//draw game character
  function updateCharacter(){
 context.drawImage(imj,bossX,bossY,w-40,h-40)
 context.drawImage(elsh,elshaX,elshaY,w,h);
 context.drawImage(bossBullet,bossBleft,bossBTop+70,50,50);
 context.drawImage(elshaBullet,elshaBleft,elshaBTop,50,50);
  }


  //boss goes up
  function goTop(params) {
    whichAngle='top';
   moveInterval=setInterval(() => {
        bossY=bossY-20;
        if (bossY==0) {
            clearInterval(moveInterval);
            setTimeout(() => {
                clearInterval(moveInterval);
                goBottom();
            }, 2000);
        }
        context.clearRect(0,0, canvas.width, canvas.height)
       updateCharacter();
       clearInterval(bulletBossInterval)
       moveBossBullet();
    }, interval);
  }


  //boss goes up
  function goBottom(params) {
    whichAngle='bottom';
    moveInterval=setInterval(() => {
        bossY=bossY+20;
        if (bossY==400) {
            clearInterval(moveInterval);
            setTimeout(() => {
                clearInterval(moveInterval);
                goTop();
            }, 2000);
        }
       context.clearRect(0,0, canvas.width, canvas.height);
       updateCharacter();
       clearInterval(bulletBossInterval)
       moveBossBullet();
    }, interval);
  }
 
   
  //boss move
   function moveBoss(params) {
    goTop();
   }

   //moveBullet
   function moveBossBullet(params) {
    activeTop=bossBTop;
  bulletBossInterval=setInterval(() => {
    if (bossBleft==-40) {
       bossBTop=bossY;
       clearInterval(bulletBossInterval);
       context.clearRect(0,0, canvas.width, canvas.height);
       updateCharacter();
       bossBleft=800;
       moveBossBullet();
       return;
    }
    bossBleft=bossBleft-20;
    bossBTop=activeTop;
    context.clearRect(0,0, canvas.width, canvas.height);
    updateCharacter();
    elshaHit();
    bossHit();
    }, bossShootInterval);
   }

   //move Elsha Bullet
   function moveElshaBullet(params) {
  bulletElshaInterval=setInterval(() => {
    if (elshaBleft==1000) { 
       elshaBTop=elshaY;
       elshaBleft=elshaX;
       clearInterval(bulletElshaInterval);
       context.clearRect(0,0, canvas.width, canvas.height);
       updateCharacter();
       isElshaBullet=false;
       return;
    }
    isElshaBullet=true;
    elshaBleft=elshaBleft+20;
    elshaBTop=elshaBTop;
    context.clearRect(0,0, canvas.width, canvas.height);
    // elshaBTop=elshaY;
    updateCharacter();
    elshaHit();
    bossHit();
    }, elshaShootInterval);
   }

   //myleft
   function myLeft(params) {
    if (amIHit==false) {
      elshaX=elshaX-20;
  }
  if (isElshaBullet==false) {
      elshaBleft=elshaBleft-20;
  }
  console.log(diff, diff2);
  elshaHit();
  bossHit();
  context.clearRect(0,0, canvas.width, canvas.height);
  updateCharacter();
   }

   //move to right
   function myRight(params) {
    if (amIHit==false) {
      elshaX=elshaX+20;
  }
  if (isElshaBullet==false) {
      elshaBleft=elshaBleft+20;
  }
  console.log(diff, diff2);
  elshaHit();
  bossHit();
  context.clearRect(0,0, canvas.width, canvas.height);
  updateCharacter();
   }

   //move to top
   function myTop(params) {
    if (amIHit==false) {
      elshaY=elshaY-20;
  }
  if (isElshaBullet==false) {
      elshaBTop=elshaBTop-20;
  }
  console.log(diff, diff2);
  elshaHit();
  bossHit();
  context.clearRect(0,0, canvas.width, canvas.height);
  updateCharacter();
   }

   //move to bottom
   function myBottom(params) {
  if (amIHit==false) {
      elshaY=elshaY+20;
  }
  if (isElshaBullet==false) {
      elshaBTop=elshaBTop+20;
  }
  console.log(diff, diff2);
  elshaHit();
  bossHit();
  context.clearRect(0,0, canvas.width, canvas.height);
  updateCharacter();
   }

   //fire
   function myFire(params) {
    clearInterval(bulletElshaInterval)
    if (isElshaBullet==false) {
     var audio=new Audio('./efx/soundscrate-shotgun-firing-3.mp3');
     audio.pause();
     audio.play();
    }
    moveElshaBullet();
   }

   //pause
   function myPause(params) {
    clearInterval(bulletElshaInterval);
    clearInterval(bulletBossInterval);
    clearInterval(moveInterval);
    document.getElementById('play').hidden=true; 
    document.getElementById('pause').hidden=false; 
     pauseBoss=bossX;
     pauseBoss2=bossY;
     pauseBossB=bossBleft;
     pauseBossB2=bossBTop;
     pauseElsha=elshaX;
     pauseElsha2=elshaY;
     pauseElshaB=elshaBleft;
     pauseElshaB2=elshaBTop; 
   }
    

   //command and action buttons
   window.onkeydown=function(e) {
    //left
    if (amIHit || (percentage>20 && percentage<100)) {
        return false;
    }
    if (elshaX>0 && e.keyCode==37) {
        myLeft();
    }
    //right
    else if (elshaX<800 && e.keyCode==39) {
        myRight()
    }
    //top
    else if (elshaY>0 && e.keyCode==38) {
       myTop();
    }
    //bottom
    else if (elshaY>=0 && elshaY<=400 && e.keyCode==40) {
       myBottom();
    }

    else if(e.keyCode==70){
    myFire();
     
    }

    //pause
    if (e.keyCode==27) {
       myPause() 
    }
   }


   function updater(){
    elshaX=0;
    elshaY=220;
    elshaBleft=0;
    elshaBTop=220;
    bossX=800;
      bossY=220;
    bossBleft=800;
      bossBTop=220;
   }

   let diff;
   //know whether Elsha is hit
   function elshaHit(params) {
    if (bossBTop>elshaY) {
        diff=bossBTop-elshaY; 
    }
    else{
        diff=elshaY-bossBTop;
    }
    //boss against elsha
    if (diff<=100 && (bossBleft-elshaX<=100) && amIHit==false) {
        isElshaBullet=true;
        amIHit=true;
        pauseBoss=bossX;
        pauseBoss2=bossY;
        clearInterval(bulletElshaInterval);
        clearInterval(bulletBossInterval);
        clearInterval(moveInterval);
        live--;
        if (live!=0) {
          life();
          setTimeout(() => {
        bossX=pauseBoss;
        bossY=pauseBoss2;
        bossBTop=bossY-20;
        bossBleft=bossX;
        context.clearRect(0, 0, canvas.height, canvas.width)
        elshaX=0;
        elshaY=220;
        elshaBleft=0;
        elshaBTop=220;
        setTimeout(() => {
        isElshaBullet=false;
        amIHit=false;
        }, 1000);
        if (whichAngle=='top') {
            clearInterval(moveInterval);
           setTimeout(() => {
            if (bossY>0) {
                bossY=pauseBoss2-20; 
            }
            goTop(); 
           }, 100);
        }else{
        clearInterval(moveInterval);
           setTimeout(() => {
            if (bossY<400) {
                bossY=pauseBoss2+20; 
            }
            goBottom();
           }, 100);
        }
        }, 1000);
        }
        if (live==0) {
        context.clearRect(0, 0, canvas.height, canvas.width)
        clearInterval(bulletElshaInterval);
        clearInterval(bulletBossInterval);
        clearInterval(moveInterval);
          setTimeout(() => {
            live=5;
            my_level=1;
            percentage=0;
            bossX=800;
            bossY=220;
            bossBleft=800;
            bossBTop=220;
            elshaX=0;
            elshaY=220;
            elshaBleft=0;
            elshaBTop=220;
            hit=0;
            isElshaBullet=false;
            amIHit=false;
            elshaShootInterval=50;
            bossShootInterval=80;
            interval=500;
            updateCharacter();
             document.getElementById('play').hidden=true; 
             document.getElementById('over').hidden=false; 
          }, 2000);
        }
    }
   
   }

   let diff2;
   //know whether Boss is hit
   function bossHit(params) {
    if (elshaBTop>bossY) {
        diff2=elshaBTop-bossY; 
    }
    else{
        diff2=bossY-elshaBTop;
    }
     //elsha against boss
     if (diff2<=75 && (bossX-elshaBleft<=20)) {
        isElshaBullet=true;
        elshaBTop=elshaY;
        elshaBleft=elshaX;
       clearInterval(bulletElshaInterval);
        context.clearRect(0, 0, canvas.height, canvas.width);
        updateCharacter();
        hit++;
        console.log(hit);
    if (hit!=bossLife+1) {
        isElshaBullet=false;
        life();
    }

    function bossDie(){
        clearInterval(bulletBossInterval);
    clearInterval(moveInterval);
    clearInterval(bulletElshaInterval);
    isElshaBullet=true;
    updater();
       setTimeout(() => {
         my_level++;
          bossX=800;
            bossY=220;
            bossBleft=800;
            bossBTop=220;
            elshaBleft=0;
            elshaBTop=220;
            interval-=50;
            bossLife+=10;
            elshaShootInterval-=5;
            bossShootInterval-=10;
            console.log(interval, elshaShootInterval);
            hit=0;
            isElshaBullet=false;
            amIHit=false;
         loadGame();
      }, 1);
    }

    //if elsha bullet hit boss and boss bullet hit elsha but boss's life is 0
    if (hit==bossLife && live>0 && diff<=100 && (bossBleft-elshaX<=100)) {
        bossDie();
    }


    //if boss is hit by elsha and his life remains 0
    if (hit==bossLife && live>0) {
        bossDie();
    }
    }
   }


   //Game loader
   function loadGame(params) {
    document.getElementById('play').hidden=true;
    document.getElementById('anotherlevel').hidden=false;
    percentage=0;
   document.getElementById('load').innerHTML=`${percentage}% Completed`;
   document.getElementById('newlevel').innerHTML=`LEVEL ${my_level} IS LOADING...`;
   live=live;
   context.clearRect(0, 0, canvas.height, canvas.width)
   clearInterval(moveInterval);
    clearInterval(bulletElshaInterval);
    clearInterval(bulletBossInterval);
    life();
    level();
  loading=setInterval(() => {
    percentage+=20;
    if (percentage==100) {
    clearInterval(loading);
    document.getElementById('anotherlevel').hidden=true;
    document.getElementById('play').hidden=false;
    percentage=0;
    scene();
    if (whichAngle=='top') {
        setTimeout(() => {
            goTop();   
        }, 1000);
    }else{
        setTimeout(() => {
            goBottom();
        }, 1000);
    }
    }
    document.getElementById('load').innerHTML=``;
    document.getElementById('progress').style.width=`${percentage}%`;
    document.getElementById('load').innerHTML=`${percentage}% Completed`;
  },1000);
   }


   //scene
   function scene(params) {
    if (my_level==2) {
        document.getElementById('canvas').style.backgroundImage=`url('./bgimg/level2.gif')`;
    }
    if (my_level==3) {
        document.getElementById('canvas').style.backgroundImage=`url('./bgimg/level3.gif')`;
    }
   }

   //continue
   function handleContinue(params) {
    document.getElementById('pause').hidden=true;
    document.getElementById('play').hidden=false; 
    bossX=pauseBoss;
    bossY=pauseBoss2;
    bossBleft=pauseBossB;
    bossBTop=pauseBossB2;
    elshaX=pauseElsha;
    elshaY=pauseElsha2;
    elshaBleft=pauseElshaB;
    elshaBTop=pauseElshaB2;  
    context.clearRect(0, 0, canvas.height, canvas.width)
    if (whichAngle=='top') {
        clearInterval(moveInterval);
       setTimeout(() => {
        if (bossY>0) {
            bossY=pauseBoss2; 
        }
        goTop(); 
       }, 100);
    }else{
    clearInterval(moveInterval);
       setTimeout(() => {
        if (bossY<400) {
            bossY=pauseBoss2; 
        }
        goBottom();
       }, 100);
    }
   }

   //button control

  function handleControl(params) {
    if (params=='up') {
      myTop()
    }
    else if (params=='left') {
      myLeft()
    }
    else if (params=='f') {
      myFire();
    }
    else if (params=='right') {
      myRight();
    }
    else if (params=='down') {
      myBottom();
    }
    else if (params=='p') {
     myPause();
    }
  }

   