var fixedRect, movingRect;
var rect1, rect2, rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(200, 100, 50, 50)
  rect2 = createSprite(400, 100, 50, 50)
  rect3 = createSprite(600, 100, 50, 50)

  

  rect1.debug = true
  rect2.debug = true
  rect3.debug = true

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  rect1.shapeColor = "green";
  rect2.shapeColor = "green";
  rect3.shapeColor = "green";

      
  if(isTouching(movingRect,fixedRect )){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";  
  }

  if(isTouching(movingRect, rect1)){
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";  
  }

  if(isTouching(movingRect, rect2)){
    movingRect.shapeColor = "orange";
    rect2.shapeColor = "orange";  
  }

  if(isTouching(movingRect, rect3)){
    movingRect.shapeColor = "violet";
    rect3.shapeColor = "violet";  
  }
  

  
  drawSprites();
}

