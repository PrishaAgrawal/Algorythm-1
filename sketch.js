var movingRect, fixedRect; 
var gameObject1, gameObject2;
var gameOb3,gameOb4;

function setup() {
  createCanvas(800,800);

  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = -1

  movingRect =createSprite(400, 100, 50, 50);
  movingRect.shapeColor = "red";
  movingRect.velocityY = 1

  gameObject1 = createSprite (100,50,20,30);
  gameObject1.shapeColor = "blue";

  gameObject2 = createSprite (300,150,20,30);
  gameObject2.shapeColor = "pink";

  gameOb3 = createSprite (50,300,50,50);
  gameOb3.shapeColor = "orange";
  gameOb3.velocityX = 3;

  gameOb4 = createSprite (700,300,50,50);
  gameOb4.shapeColor = "lightgreen";
  gameOb4.velocityX = -3;
  


  
}

function draw() {
  background (0)

 // movingRect.x = mouseX;
  //movingRect.y = mouseY;

  gameObject1.x = mouseX;
  gameObject1.y = mouseY;

 

  console.log(movingRect.width/2 + fixedRect.width/2);
  console.log(movingRect.x-fixedRect.x);

  if (isTouching(movingRect,fixedRect)){

    movingRect.shapeColor= "yellow"
    fixedRect.shapeColor= "yellow"
  }
  else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "red";
  }

  if (isTouching(gameObject1,gameObject2)){

    gameObject1.shapeColor= "yellow"
    gameObject2.shapeColor= "yellow"
  }
  else {
    gameObject2.shapeColor = "pink";
    gameObject1.shapeColor = "blue";
  }

  bounceOff(movingRect,fixedRect);
  
  
  drawSprites();
}

function isTouching (object1,object2) {
  if (object1.x-object2.x< object1.width/2 + object2.width/2 &&
    
   object2.x-object1.x < object1.width/2 + object2.width/2 &&
    object1.y-object2.y < object1.height/2 + object2.height/2 &&
    object2.y-object1.y < object1.height/2 + object2.height/2 ){
 return true;
 
    
   }
  else {
    return false;
  } 
 
}


function bounceOff (object1,object2){

  if (object1.x-object2.x< object1.width/2 + object2.width/2 &&
    object2.x-object1.x < object1.width/2 + object2.width/2 ){

      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }

    if (object1.y-object2.y< object1.height/2 + object2.height/2 &&
      object2.y-object1.y < object1.height/2 + object2.height/2 ){
  
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
      } 
}