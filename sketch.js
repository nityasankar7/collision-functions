var movingRect;
var fixedRect;
var rect1;
var movingRect1;
var fixedRect1;


function setup() {
  createCanvas(1200,800);
  //createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,200,50,50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  fixedRect=createSprite(100,100,80,80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  rect1=createSprite(300,200,60,60);
  rect1.shapeColor="green";
  fixedRect1 = createSprite(400, 100, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  movingRect1 = createSprite(400, 800,80,30);
  movingRect1.shapeColor = "green";
  movingRect1.debug = true;

  movingRect1.velocityY = -5;
  fixedRect1.velocityY = +5; 
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  //function call
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  if(isTouching(movingRect,rect1)){//parameters or arguments
    rect1.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    rect1.shapeColor="green";
  }
  bouncing(movingRect1,fixedRect1);
  drawSprites();
}
