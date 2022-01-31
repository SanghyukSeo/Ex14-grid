
var mouseFollow2 = function(p2){


    p2.setup = function(){
      
      var canvasDiv = document.getElementById('mouseFollow2');
      var cnv = p2.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, this.WEBGL);
      cnv.mouseClicked(msclicked);
      p2.background(255);
      p2.frameRate(60);
      p2.noFill();
    }
    
    p2.windowResized=function() {
      var canvasDiv = document.getElementById('mouseFollow2');
      var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
      p2.resizeCanvas(w, h);
  }
  
    let x = 0;
    let y = 0;
    let a = 0;
    let posY =20;
    p2.draw = function(){
      
  
      canvasDiv = document.getElementById('mouseFollow2');
      w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
      x = x+(p2.mouseX-x)/8;
      y = y+(p2.mouseY-y)/8;
      p2.translate(x-w/2, y-h/2, 0);
      
      p2.rotateX(p2.millis() / 1000);
      p2.rotateY(p2.millis() / 1000);
      p2.rotateZ(p2.millis() / 1000);
      if(p2.mouseX>-50&&p2.mouseY>-50&&p2.mouseX<w+50&&p2.mouseY<h+50){
        posX= Math.floor(p2.map(p2.mouseX,0,w,15,4));
        p2.fill("white");
      }else{
        posX=15;
      }
    p2.torus(30, 15, 12, posX);
      p2.resizeCanvas(w, h);
    }
    
  p2.windowResized=function() {
      var canvasDiv = document.getElementById('mouseFollow2');
      var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
      p2.resizeCanvas(w, h);
  }

  function msclicked(){
      p2.background(255);
  }
  }
  var mouseFollow2 = new p5(mouseFollow2, 'mouseFollow2');