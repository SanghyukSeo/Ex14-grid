//Blue circle is bait and Yellow circle is fish

var sketch = function(p2){


    p2.preload =function(){
  
      fish1 = p2.loadImage('./images/fish1.png');
      fish2 = p2.loadImage('./images/fish2.png');
    }
    p2.setup = function(){
  
      let cnv = p2.createCanvas($("#fish").outerWidth(), $("#fish").outerHeight());
      cnv.parent('fish');
      
    fish = new Fish(x,y,fish1,fish2,fishSize,xSpeed,ySpeed);//45
    
      p2.frameRate(fr);
    }
    
    p2.windowResized= function(){
      p2.resizeCanvas($("#fish").outerWidth(), $("#fish").outerHeight());
    }
  
    p2.draw = function(){
      
    p2.background('rgba(205, 255, 255, 0.3)');
    
  if(p2.mouseX>5&&p2.mouseY>10&&p2.mouseX<$("#fish").outerWidth()-5&&p2.mouseY<$("#fish").outerHeight()-10){
    fish.show();
  }else{
  fish.bounce();
  }
  
  
}
var click;
let x= 30;
let y= 30;
let fishSize = 90;
let fr = 60;
var xSpeed = (1, 3);
var ySpeed = (-3, -1);


class Fish{
  constructor(x,y,fish1,fish2,fishSize,xSpeed,ySpeed){
    this.x = x;
    this.y = y;
    this.fish1 = fish1;
    this.fish2 = fish2;
    this.fishSize = fishSize;
    this.xSpeed= xSpeed;
    this.ySpeed = ySpeed;
  }
  show(){
    this.x = this.x+(p2.mouseX-this.x)/15;
    this.y = this.y+(p2.mouseY-this.y)/15;
  if(p2.mouseX>=this.x){
  p2.image(this.fish1,(this.x-this.fishSize/2)-30,this.y-this.fishSize/2,this.fishSize*3/2,this.fishSize);
    }else{    
  p2.image(this.fish2,this.x-this.fishSize/2,this.y-this.fishSize/2,this.fishSize*3/2,this.fishSize);
    }
  }
    bounce(){
     

 this.x += this.xSpeed;
  this.y += this.ySpeed;
     
  if (this.x < 10 ||
    this.x > p2.width - 20) {
     this.xSpeed *= -1;
  }
  if (this.y < 10 ||
    this.y > p2.height - 20) {
     this.ySpeed *= -1;
  }
     if(this.xSpeed>0){
        p2.image(this.fish1,(this.x-this.fishSize/2)-30,this.y-this.fishSize/2,this.fishSize*3/2,this.fishSize);
     }else{
       
        p2.image(this.fish2,this.x-this.fishSize/2,this.y-this.fishSize/2,this.fishSize*3/2,this.fishSize);
     }
     
}

}
}
var fish = new p5(sketch);

