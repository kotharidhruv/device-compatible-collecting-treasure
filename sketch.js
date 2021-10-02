var path, pathImage
var runner, runner_running
var invisiblewall
var invisiblewall2
function preload(){
  //pre-load images
pathImage = loadImage("path.png");
runner_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage("path",pathImage);
  path.velocityY = 4;
  path.scale=1.2;

  runner=createSprite(200,200);
  runner.addAnimation("runner",runner_running);
  runner.scale=0.1;

  invisiblewall=createSprite(40,200,10,400);
  invisiblewall.visible=false;

  invisiblewall2=createSprite(360,400,10,400);
  invisiblewall2.visible=false;
}

function draw() {
  background(0);
  if(path.y>400){
    path.y = path.y/2;
  }

if(keyDown("right")){
  runner.x=runner.x+5
}
  if(keyDown("left")){
    runner.x=runner.x-5
}

if(runner.collide(invisiblewall)){
  runner.velocityX=0;
}

if(runner.collide(invisiblewall2)){
  runner.velocityX=0;
}

  drawSprites();
}
