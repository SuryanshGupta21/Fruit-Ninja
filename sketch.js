var back ,edges;
var startI ,gameoverI;
var fruitA ,fruitB ,fruitC ,fruitD;
var fruitgroup ;
var swordI ,alien1 ,alien2 ,aliengroup;
var score=0;
var sound1 , sound2;



 function preload(){
  back=loadImage("BG.png");
  fruitA=loadImage("fruit1.png");
  fruitB=loadImage("fruit2.png");
  fruitC=loadImage("fruit3.png");
  fruitD=loadImage("fruit4.png");
  startI=loadImage("Start.png");
  gameoverI=loadImage("gameover.png");
  alien1=loadImage("alien1.png");
  swordI=loadImage("sword.png");
   sound1=loadSound("knifeSwooshSound.mp3");
   sound2=loadSound("gameover.mp3");
}



function setup(){
  createCanvas(500,400);
  fruitgroup=new Group();
  
  
  start=createSprite(250,250);
  start.addImage(startI);
  start.scale=0.1;
  
  
  gameover=createSprite(250,200);
  gameover.addImage(gameoverI);
  gameover.visible=false;
  
  sword=createSprite(250,300);
  sword.addImage(swordI);
  sword.scale=0.5; 
  sword.visible=false;
  
  alien=createSprite(100,1000);
  alien.addImage(alien1);
  
  
}





function draw(){
  
  if(mousePressedOver(start)){
    start.visible=false;
    createfruit();
    sword.visible=true;
    alien.velocityY=-5
   }

  if(sword.isTouching(alien)){
    gameover.visible=true;
    alien.velocityY=0;
   sound2.play();
  }
  
  background(back);
  
  if(alien.y<0){
    alien.y=1200;
    alien.x=Math.round(random(1,480));
  }
  
  
 if(sword.isTouching(fruitgroup)){
   score=score+1;
   fruitgroup.destroyEach();
   sound1.play();
   
 }
   sword.x=World.mouseX;
    sword.y=World.mouseY;
  
  
  createEdgeSprites();
  drawSprites();
  createfruit();
  
  
  text("score :"+ score,250,30)
  
       }




function createfruit(){
  
 if(World.frameCount%120==0) {
  var fruit=createSprite()
   fruit.velocityY=-5;
   fruit.scale=0.2;
   fruit.y=500;
   fruit.x=Math.round(random(1,480)); 
   
   var R=Math.round(random(1,4))
    switch(R){
  
       case 1:fruit.addImage(fruitA);
       break;
       
       case 2:fruit.addImage(fruitB);
       break;
       
       case 3:fruit.addImage(fruitC);
       break;
       
       case 4:fruit.addImage(fruitD);
       break;
       default:break;
   }
   fruitgroup.add(fruit);
 }
  
  
  
}