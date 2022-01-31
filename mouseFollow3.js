
var mouseFollow3 = function(p2){


    p2.setup = function(){
      
      var canvasDiv = document.getElementById('mouseFollow3');
      var cnv = p2.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, this.WEBGL);
      p2.background(255);
      p2.frameRate(60);
      p2.noFill();
    }
    
    p2.windowResized=function() {
      var canvasDiv = document.getElementById('mouseFollow3');
      var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
      p2.resizeCanvas(w, h);
  }
  
    p2.draw = function(){
      
      
        var canvasDiv = document.getElementById('mouseFollow3');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        p2.background(255);
        p2.push();
        p2.fill('white');
        p2.star(p2.mouseX-w/2, p2.mouseY-h/2,  Math.floor(p2.map(p2.mouseX,0,w,50,90)), Math.floor(p2.map(p2.mouseY,0,h,50,90)), 30);
        p2.pop();


        p2.resizeCanvas(w, h);

    }
    p2.star = function(x, y, radius1, radius2, npoints) {
        let angle = TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        p2.beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + p2.cos(a) * radius2;
          let sy = y + p2.sin(a) * radius2;
          p2.vertex(sx, sy);
          sx = x + p2.cos(a + halfAngle) * radius1;
          sy = y + p2.sin(a + halfAngle) * radius1;
          p2.vertex(sx, sy);
        }
        p2.endShape(CLOSE);
      }
    
  p2.windowResized=function() {
      var canvasDiv = document.getElementById('mouseFollow3');
      var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
      p2.resizeCanvas(w, h);
  }
  }
  var mouseFollow3 = new p5(mouseFollow3, 'mouseFollow3');