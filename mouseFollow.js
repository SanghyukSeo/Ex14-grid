

var mouseFollow = function(p2){


  p2.setup = function(){
    
    var canvasDiv = document.getElementById('mouseFollow');
    var cnv = p2.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, this.WEBGL);
    p2.background(255);
    p2.frameRate(60);
    p2.noFill();
  }
  
  p2.windowResized=function() {
    var canvasDiv = document.getElementById('mouseFollow');
    var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
    p2.resizeCanvas(w, h);
}

  let x = 0;
  let y = 0;
  let a = 0;
  let posY =20;
  p2.draw = function(){
    

    canvasDiv = document.getElementById('mouseFollow');
    w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
    p2.background(255);
    p2.stroke(0);
    x = x+(p2.mouseX-x)/8;
    y = y+(p2.mouseY-y)/8;
    p2.translate(x-w/2, y-h/2, 0);
    
    p2.rotateZ(p2.millis() / 1000);
    if(p2.mouseX>-50&&p2.mouseY>-50&&p2.mouseX<w+50&&p2.mouseY<h+50){
      posY= Math.floor(p2.map(p2.mouseY,0,h,4,13));
      p2.fill("black");
      p2.stroke(100);
    }else{
      posY=15;
    }
  p2.torus(30, 15, posY, 12);
  
    p2.resizeCanvas(w, h);
  }
  
p2.windowResized=function() {
    var canvasDiv = document.getElementById('mouseFollow');
    var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
    p2.resizeCanvas(w, h);
}
}
var mouseFollow = new p5(mouseFollow, 'mouseFollow');