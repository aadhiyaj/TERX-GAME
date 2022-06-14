
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")  
groundimage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(30,150,20,50) 
  trex.addAnimation("running",trex_running) 
  trex.scale=0.5
  //create a trex sprite
 ground=createSprite(200,180,400.20)
 ground.addImage(groundimage)
}

function draw(){
  background("white")
  if(keyDown("space")){ trex.velocityY=-5 } trex.velocityY=trex.velocityY+1
   drawSprites() 
trex.collide(ground)
}
