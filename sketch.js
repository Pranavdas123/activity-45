var bg,bg_img;
var balloon,balloon_img;
var low_ground,top_ground;

function preload(){
  bg_img = loadImage("assets/bg.png");
  balloon_img = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
}

function setup(){
  bg = createSprite(165,485,1,1);
  bg.addImage(bg_img);
  bg.scale = 1;

  low_ground = createSprite(170,600,1190,20);
  low_ground.visible = false;

  top_ground = createSprite(170,100,1190,20);
  top_ground.visible = false;

  balloon = createSprite(100,250,50,50);
  balloon.addAnimation("balloon",balloon_img);
  balloon.scale = 0.4
}

function draw(){
  createCanvas(1000,600)
  
  //flying the balloon
  if(keyDown("space")){
    balloon.velocityY = -6
  }

  //adding gravity 
  balloon.velocityY+= 1

  drawSprites()
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           