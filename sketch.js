var movingrect, fixedrect
function setup() {
  
  createCanvas(1200,800);
  //fill("green");
  movingrect = createSprite(400, 100, 50, 50);
  movingrect.velocityY = 5;
  movingrect.shapeColor = "green";
  fixedrect = createSprite(400,800,100,50);
  fixedrect.shapeColor = "green";
  fixedrect.velocityY = -5;

}

function draw() {
  background(0);
  bounceOff(a1,a2);

  drawSprites();
}

