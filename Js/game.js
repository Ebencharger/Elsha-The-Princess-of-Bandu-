let timer;
let Live=3
    let x=50;
    let y=290;
    let w=100;
    let h=100;
    let mp3=new Audio('./AUD-20221005-WA0007.mp3')
    let mp4=new Audio('./explosion.mp3')
    
    let canv=document.getElementById('canvas')
    let context=canv.getContext('2d')
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    // let gameOver = document.getElementById("canvas");
    // let cont = gameOver.getContext('2d');
    // var c = document.getElementById("canvas");
    // var ctxx = c.getContext("2d");
    // let bulletX = x + w/1.8;
    // let bulletY = y+30;
    // let bulletW = 10;
    // let bulletH = 10;
    // context.moveTo(0,0)
    // context.lineTo(200,500)
    // context.stroke()
    let Username=JSON.parse(window.localStorage.getItem('userName'))
    console.log(Username[0].name);
    let show=document.getElementById('write2').innerHTML='PLAYER'+':'+`<span style="font-size: 20px;">${Username[0].name}</span>`
    
        let img =new Image()
        img.src='./image/anim-project.png'
    img.onload=()=>context.drawImage(img,x,y,w,h)

        window.onkeydown=function(e) {
        // alert(e.keyCode)
        mp3.play()
        if (e.keyCode==39 && x!==1270) {
            x=x+10
        }
        if (e.keyCode==40 && y!==550) {
            y=y+10
        }
        if (e.keyCode==38 && y!==0) {
            y=y-10
        }
        if (e.keyCode==37 && x!==0) {
            x=x-10
        }
        context.clearRect(0,0,1365,657)
      
        context.drawImage(img,x,y,w,h)
       
        rect.update();
          rects.update();
          rectss.update();
          rectsss.update();
          rectssss.update();
          collision()
          // stop()
    }




    class enemy {
  constructor(ex, ey, width, height, source) {
    this.width = width;
    this.height = height;
    this.ex = ex;
    this.ey = ey;
    this.sprite = new Image();
    this.sprite.src = source;
    this.sprites = new Image();
    this.sprites.src = source;
    this.spritess = new Image();
    this.spritess.src = source;
    this.spritesss = new Image();
    this.spritesss.src = source;
    this.spritessss = new Image();
    this.spritessss.src = source;
    this.sprite.onload = () => {
      this.update()
    };
    this.sprites.onload = () => {
      this.update()
    };
    this.spritess.onload = () => {
      this.update()
    };
    this.spritesss.onload = () => {
      this.update()
    };
    this.spritessss.onload = () => {
      this.update()
    };
  }
 
  update() {
    if (this.sprite) {
      ctx.drawImage(
        this.sprite, 
        this.ex, this.ey, 
        this.sprite.width = 120, 
        this.sprite.height = 100.31);
    }
    if (this.sprites) {
      ctx.drawImage(
        this.sprites,
        this.ex, this.ey, 
        this.sprite.width = 120, 
        this.sprite.height = 100.31);
    }
    if (this.spritess) {
      ctx.drawImage(
        this.spritess, 
        this.ex, this.ey, 
        this.sprite.width = 120, 
        this.sprite.height = 100.31);
    }
    if (this.spritesss) {
      ctx.drawImage(
        this.spritesss, 
        this.ex, this.ey, 
        this.sprite.width = 120, 
        this.sprite.height = 100.31);
    }
    if (this.spritessss) {
      ctx.drawImage(
        this.spritessss, 
        this.ex, this.ey, 
        this.sprite.width = 120, 
        this.sprite.height = 100.31);
    }
  }
}

const rect = new enemy(1300, 10, 120, 100.31, './image/anim-project-removebg-preview-removebg-preview.png');
const rects = new enemy(1300, 150, 120, 100.31, './image/anim-project-removebg-preview-removebg-preview.png');
const rectss = new enemy(1300, 300, 120, 100.31, './image/anim-project-removebg-preview-removebg-preview.png');
const rectsss = new enemy(1300, 420, 120, 100.31, './image/anim-project-removebg-preview-removebg-preview.png');
const rectssss = new enemy(1300, 550, 120, 100.31, './image/anim-project-removebg-preview-removebg-preview.png');

timer=setInterval(() =>{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  rect.ex -=20
  rects.ex -=10
  rectss.ex -=15
  rectsss.ex -=20
  rectssss.ex -=25
  // console.log(rectssss.ex)
  if (rect.ex==-60) {
    rect.ex=1300
  }
  if (rects.ex==-60) {
    rects.ex=1300
  }
  if (rectss.ex==-35) {
    rectss.ex=1300
  }
  if (rectsss.ex==-60) {
    rectsss.ex=1300
  }
  if (rectssss.ex==-25) {
    rectssss.ex=1300
  }
  rect.update()
  rects.update()
  rectss.update()
  rectsss.update()
  rectssss.update()
  context.drawImage(img,x,y,w,h)
  collision()
},100)
function collision() {
        
    if (
        x < rect.ex + rect.width &&
        x + w > rect.ex &&
        y < rect.ey + rect.height&&
        h + y > rect.ey)
      {

        Live--
        rect.ex=1300
      }
    if (
        x < rects.ex + rects.width &&
        x + w > rects.ex &&
        y < rects.ey + rects.height&&
        h + y > rects.ey)
      {
        Live--;
        rects.ex=1300
      }
    if (
        x < rectss.ex + rectss.width &&
        x + w > rectss.ex &&
        y < rectss.ey + rectss.height&&
        h + y > rectss.ey)
      {
        Live--
        rectss.ex=1300
      }
    if (
        x < rectsss.ex + rectsss.width &&
        x + w > rectsss.ex &&
        y < rectsss.ey + rectsss.height&&
        h + y > rectsss.ey)
      {
        Live--
        rectsss.ex=1300
      }
    if (
        x < rectssss.ex + rectssss.width &&
        x + w > rectssss.ex &&
        y < rectssss.ey + rectssss.height&&
        h + y > rectssss.ey)
      {
        Live--
        rectssss.ex=1300
      }

  ctx.font = "30px yellowtail"
  ctx.fillStyle = "red"
  ctx.fillText("Lives:" + Live, 1200, 30)
    
  if (Live==0) {
    mp3.pause()
    mp4.play()
    clearInterval(score)
    clearInterval(timer)
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.font = "30px yellowtail"
    ctx.fillStyle = "red"
    ctx.fillText("Game Over",600,300)
    ctx.fillText("Score" + ':'+ sco ,620,350)
    ctx.font = "30px yellowtail"
    ctx.fillStyle = "red"
    ctx.fillText("Press f5 to resart", 560, 400)
    return;
  }
  
    ctx.font = "30px yellowtail"
    ctx.fillStyle = "red"
    ctx.fillText("Score:" + sco, 600, 30)
  
}

let sco=0 
let score = setInterval(() =>{
  
  sco++
  if (sco==20) {
    write.innerHTML='LEVEL TWO'
    document.getElementById("canvas").style.backgroundImage = "url('./bgimg/50\ Animated\ Gifs\ of\ Fighting\ Game\ Backgrounds\ TwistedSifter.gif')";
  }
  if (sco==40) {
    write.innerHTML='LEVEL THREE'
    document.getElementById("canvas").style.backgroundImage = "url('./bgimg/50\ Animated\ Gifs\ of\ Fighting\ Game\ Backgrounds\ TwistedSifter\ \(1\).gif')";
  }
  if (sco==60) {
    write.innerHTML='LAST LEVEL'
    document.getElementById("canvas").style.backgroundImage = "url('./bgimg/are\ examples\ of\ pixel\ art\ from\ the\ Last\ Blade\ series\ of\ video\ games.gif')";
  }
  // if (sco==80) {
  //   alert('Game completed')
  //   document.location.reload()
  // }
},1000)

function quit() {
  window.location.href = "./index.html";
  clearInterval(score)
  clearInterval(timer)
}
window.onkeypress=function(stop) {
  // alert(stop.keyCode)
  if (stop.keyCode==32) {
    if (timer) {
      clearInterval(score) 
    clearInterval(timer)
    timer=null;
    score=null;
    }
    
  
  else{
    timer=setInterval(() =>{
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rect.ex -=20
      rects.ex -=10
      rectss.ex -=15
      rectsss.ex -=20
      rectssss.ex -=25
      // console.log(rectssss.ex)
      if (rect.ex==-60) {
        rect.ex=1300
      }
      if (rects.ex==-60) {
        rects.ex=1300
      }
      if (rectss.ex==-35) {
        rectss.ex=1300
      }
      if (rectsss.ex==-60) {
        rectsss.ex=1300
      }
      if (rectssss.ex==-25) {
        rectssss.ex=1300
      }
      rect.update()
      rects.update()
      rectss.update()
      rectsss.update()
      rectssss.update()
      context.drawImage(img,x,y,w,h)
      collision()
    },100)
  score = setInterval(() =>{
  
      sco++
      if (sco==20) {
        write.innerHTML='LEVEL TWO'
        document.getElementById("canvas").style.backgroundImage = "url('./bgimg/50\ Animated\ Gifs\ of\ Fighting\ Game\ Backgrounds\ TwistedSifter.gif')";
      }
      if (sco==40) {
        write.innerHTML='LEVEL THREE'
        document.getElementById("canvas").style.backgroundImage = "url('./bgimg/50\ Animated\ Gifs\ of\ Fighting\ Game\ Backgrounds\ TwistedSifter\ \(1\).gif')";
      }
      if (sco==60) {
        write.innerHTML='LAST LEVEL'
        document.getElementById("canvas").style.backgroundImage = "url('./bgimg/are\ examples\ of\ pixel\ art\ from\ the\ Last\ Blade\ series\ of\ video\ games.gif')";
      }
      // if (sco==80) {
      //   alert('Game completed')
      //   document.location.reload()
      // }
    },1000)
  }
}}