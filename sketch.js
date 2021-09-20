var sealoadimiage,ship,seaimage

function preload(){
sealoadimage=loadImage("sea.png");
seaImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png"); 
}

function setup(){
  createCanvas(400,400);
 
 //create a sea sprite 
 sea=createSprite(200,200,40,40);
 sea.addImage(sealoadimage);
 //create ship sprite
 ship=createSprite(150,100,20,40);
 ship.addAnimation("running",seaImg1);
ship.scale=0.5;
sea.scale=0.3;
}

function draw() {
  background("blue");
  drawSprites();
 //moving the ship on y key press
if (keyDown("y")) {
 ship.velocityY = -30;
}
  //code to rest the background 
  if (seaimage.x < 0){
    seaimage.x = sea.width/2;
  }
}