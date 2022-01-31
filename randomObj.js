

var randomObj = function(p2){

  p2.setup = function(){
    
    var canvasDiv = document.getElementById('randomObj');
    var cnv = p2.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);
    p2.background(255);
    p2.frameRate(1);
    p2.noFill();
  }

  p2.windowResized=function() {
    var canvasDiv = document.getElementById('randomObj');
    var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
    p2.resizeCanvas(w, h);
    }
    
    p2.draw = function(){
      canvasDiv = document.getElementById('randomObj');
      w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
      p2.background(255);
      p2.mouseClicked();
      p2.stroke(0);
      p2.resizeCanvas(w, h);
      for(let i=0;i<20;i++){
        let randomColor = p2.color(p2.random(255), p2.random(255),p2.random(255),p2.random(10,255));
    
        let w1 = p2.random(5,80); 
        let h1 = p2.random(5,80);
        let smallOne =0;
        if(w1<h1){
          smallOne = (w1)/2;
        }else{
           smallOne =  (h1)/2;
        }    
        let x = p2.random(p2.width-w1);
        let y = p2.random(p2.height-h1);
        let r= p2.random(0,smallOne); 
        rectObj[i] = new RectObj(x,y,w1,h1,r,randomColor);
        } 
      for(let i=0;i <rectObj.length; i++){
        rectObj[i].show();
      }
  }


var rectObj = [];
class RectObj{
    constructor(x,y,w1,h1,r,randomColor){
    this.x = x;
    this.y = y;
    this.w1 =w1;
    this.h1 =h1;
    this.r = r;
    this.randomColor = randomColor;
    }
    
    show(){
    p2.noStroke();
      p2.fill(this.randomColor);
      p2.rect(this.x, this.y,this.w1,this.h1,this.r); 
    }
}
  
p2.mouseClicked = function(){
  
  }
}

  var randomObj = new p5(randomObj, 'randomObj');