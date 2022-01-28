//Blue circle is bait and Yellow circle is fish


var click;
let x= 0;
let y= 0;
let a= 0;
let w=100;
let angle =0;
let baitSize = 20;
let fishSize = 90;
let fr = 140;

function preload() {
  fish1 = loadImage('./images/fish1.png');
  fish2 = loadImage('./images/fish2.png');
}
  
function setup() {
    let cnv = createCanvas($("#fish").outerWidth(), $("#fish").outerHeight());
    cnv.parent('fish');
    
   
  frameRate(fr); 
}
function windowResized() {
    resizeCanvas($("#fish").outerWidth(), $("#fish").outerHeight());
  }


function draw() {
    
  background('rgba(212, 255, 252, 0.8)');
  fill('yellow');
 // circle(mouseX, mouseY, baitSize);
  
  fish();//bubbleTrigger();
 /* if(click){
    fishEye();
    bubbleTrigger();
  }else{ 
    x=windowWidth/2;
    y=windowHeight/2;
    fish();
    fishEye();
  } */
}


function fish(){
    x = x+(mouseX-x)/20;
    y = y+(mouseY-y)/20;
  if(mouseX>=x){
  image(fish1,(x-fishSize/2)-30,y-fishSize/2,fishSize*3/2,fishSize);
    }else{    
  image(fish2,x-fishSize/2,y-fishSize/2,fishSize*3/2,fishSize);

  /*  
fill('white');
  rect(x-fishSize/2,y-fishSize/2, fishSize, fishSize, fishSize);
  
fill('black');

    line(x,y,mouseX,mouseY);    
  if(abs(mouseX-x)<(baitSize+fishSize)/2&&abs(mouseY-y)<(baitSize+fishSize)/2){
  click=false;
  }*/        //Fish eat bait, return to the center.
}
}

function fishEye(){
  
  x2 = x+(mouseX-x)/15*(2/3);
  y2 = y+(mouseY-y)/15*(2/3);
  
 // circle(x2,y2,10);//fish eye
} 
function bubbleTrigger(){
  circle(windowWidth/10,windowHeight/2,30);    //collision detection comming soon..
  translate(width / 10+50, height / 2);
  angle++;
  rotate(angle);
  if(angle %7 ==0){
    bubble();
    angle=1;
     }
  console.log(angle);
  rect(0, 0, w, 10);
}  
function bubble(){
   
  if(mouseX>=x){    
    a = a-10;
  circle(x+50,y+a,15);  
  }else{
    a = a-10;
  circle(x-40,y+a,15);
    }  
}

function mousePressed(){
  click=true; 
}

function doubleClicked(){
  click=false;
}