var bg;
var canvas;
var thor,ironman,spiderman,captainamerica;
var spidey,irony,captainy,thory;
var flash,batman;
var flash,baty;


function preload(){
  bg=loadImage("avengers.jpg");
  spiderman=loadImage("yoh.png");
  ironman=loadImage("fhg.png");
  captainamerica=loadImage("hg.dms");
  thor=loadImage("huj.png");
  
}

function setup() {
  canvas=createCanvas(displayWidth-100,displayHeight-200);
  spidey=createSprite(displayWidth/2-500,displayHeight/2-100);
  spidey.addImage("ghs",spiderman);
  spidey.scale=0.2;
  irony=createSprite(displayWidth/2-500,displayHeight/2-310);
  irony.addImage("ghq",ironman);
  irony.scale=0.09;
  captainy=createSprite(displayWidth/2-320,displayHeight/2-100);
  captainy.addImage("ghw",captainamerica);
  captainy.scale=0.05;
  thory=createSprite(displayWidth/2-320,displayHeight/2-310);
  thory.addImage("ghe",thor);
  thory.scale=0.2;

  
  spidey.debug=true
  
  thory.debug=true
  irony.debug=true
  captainy.debug=true
  spidey.setCollider("circle",0,0,10)
  
  thory.setCollider("circle",0,0,10)
  captainy.setCollider("circle",0,0,10)
  irony.setCollider("circle",0,0,10)
}

function draw() {
  background(bg); 

  if(mousePressedOver(spidey)){
    irony.visible=false;
    captainy.visible=false;
    thory.visible=false;
  }
  

 

 
  drawSprites();
}