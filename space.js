
var stars = [];

var speed;

function setup() {
  let cnv2 = createCanvas($("#space").outerWidth(), $("#space").outerHeight());
  cnv2.parent('space');
for (var i = 0; i < 500; i++) {
  stars[i] = new Star();
  }
}
function windowResized() {
    resizeCanvas($("#space").outerWidth(), $("#space").outerHeight());
  }



function draw() {
  if(mouseX>0&&mouseY>0&&mouseX<$("#space").outerWidth()&&mouseY<$("#space").outerHeight()){
  speed = map(mouseX,0,$("#space").outerWidth(),1,30); }else{
    speed =1;
    
  }   //map(mouseX, 0, width, 0, 50);

  background('rgb(255, 255, 255)');
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
function Star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  
    this.update = function() {
      this.z = this.z - speed;
      if (this.z < 1) {
        this.z = width;
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.pz = this.z;
      }
    }
  
    this.show = function() {
      fill(0);
      noStroke();
  
      var sx = map(this.x / this.z, 0, 1, 0, width);
      var sy = map(this.y / this.z, 0, 1, 0, height);
  
      var r = map(this.z, 0, width, 16, 0);
     // ellipse(sx, sy, r, r);
  
      var px = map(this.x / this.pz, 0, 1, 0, width);
      var py = map(this.y / this.pz, 0, 1, 0, height);
  
      this.pz = this.z;
     // ellipse(sx,sy,3);
      stroke(0);
      strokeWeight(1.3);
      line(px, py, sx, sy);
  
  }
}

