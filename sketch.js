var box 
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,5,5)
}

function draw() 
{
  background(30);
  drawSprites()
  movement()

}

function movement (){
  if(keyDown ("right")) {
    box.velocityX = 3
  }
  if(keyDown ("left")) {
    box.velocityX = -3
  }
  if(keyDown ("up")) {
    box.velocityY = -3
  }
  if(keyDown ("down")) {
    box.velocityY = 3
  }
}




