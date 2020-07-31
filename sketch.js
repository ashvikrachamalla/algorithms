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
  if (box2.x - box1.x < box1.width/2 + box2.width/2
    && box1.x - box2.x < box1.width/2 + box2.width/2
    && box2.y - box1.y < box1.height/2 + box2.height/2
    && box1.y - box2.y < box1.height/2 + box2.height/2){
      box1.shapeColor = "black";
  box2.shapeColor = "blue";
   
    }
    if (box2.x - box1.x < box1.width/2 + box2.width/2
    && box1.x - box2.x < box1.width/2 + box2.width/2){
      box1.velocityX = box1.velocityX * (-1);
      box2.velocityX = box2.velocityX * (-1);
      
    }
    if ( box2.y - box1.y < box1.height/2 + box2.height/2
      && box1.y - box2.y < box1.height/2 + box2.height/2){
        box1.velocityY = box1.velocityY * (-1);
        box2.velocityY = box2.velocityY * (-1);  
      }
  drawSprites();
}