var tom,tomimg,tomimg2,tomimg3;
var j,jimg,jimg2,jimg3;
var b,bimg;
function preload() {
    //load the images here
bimg=loadImage("images/garden.png");
tomimg=loadAnimation("images/cat1.png");
tomimg2=loadAnimation("images/cat2.png","images/cat3.png");
tomimg3=loadAnimation("images/cat4.png");
jimg=loadAnimation("images/mouse1.png");
jimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
jimg3=loadAnimation("images/mouse4.png");
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   b=createSprite(500,400);
   b.addImage("bg",bimg);

   tom=createSprite(700,600);
   tom.addAnimation("tt",tomimg);
   tom.scale=0.1;

   j=createSprite(100,600);
   j.addAnimation("jj",jimg);
   j.scale=0.1;
  

}
function draw() {

    background(255);
   
    //Write condition here to evalute if tom and jerry collide

  if(tom.x-j.x<tom.width/2-j.width/2){
    tom.addAnimation("tttt",tomimg3);
    tom.changeAnimation("tttt");

    j.addAnimation("jjjj",jimg3);
    j.changeAnimation("jjjj");

    tom.velocityX=0;
    tom.x=150;

  }


 
//if(mos.isTouching(cat)){
  //  cat.velocityX=0
//}
    
    drawSprites();
}


function keyPressed(){
  if(keyDown("LEFT_ARROW")){
    tom.addAnimation("ttt",tomimg2)
tom.changeAnimation("ttt")
tom.velocityX=-4

j.addAnimation("jjj",jimg2);
j.changeAnimation("jjj")
  }

 
  
  //For moving and changing animation write code here


}
