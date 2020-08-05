var box1, box2
function setup() {  
  createCanvas(600,600);
  box1 = createSprite(550, 550, 50, 50);
  box2 = createSprite(50, 50, 50, 50);
  box1.shapeColor = "green";
  box2.shapeColor = "red";
box1.velocityX = -5;
box1.velocityY = -5;
box2.velocityX = 5;
box2.velocityY = 5;
}


function draw() {
  background(255,255,255); 
  if (isTouching(box1,box2)){
      box1.shapeColor = "black";
  box2.shapeColor = "blue";
   
    }
    
  drawSprites();
}
