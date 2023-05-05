var aeroplane;
var border;
var lightning, birds;
var backgroundImg, lightningImg, birdImg, aeroplaneImg, nightImg;
var birdsGrp, lightningGrp;




function preload() {

  aeroplaneImg = loadImage("image/airplane.png");

  backgroundImg = loadImage("image/bg.jpg");

  lightningImg = loadImage("image/lightning.png");

  birdImg = loadImage("image/bird.png");

  nightImg = loadAnimation("image/dark.gif");

}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);

  /*background = createSprite(windowWidth/2, 0, windowWidth, displayHeight*2);
  background.addAnimation("LIGHT", backgroundImg);
  background.addAnimation("DARK", nightImg);
  background.scale = 1.35; */
  //background.x = width/2;
  //background.velocityX = -2;  

  ground = createSprite(width / 2, windowHeight - 50, width*2, 20);
  //ground.visible = false;

  border = createSprite(width / 2, 20, width*2, 40);
  //border.visible = false;

  aeroplane = createSprite(100, height - 65, 100, 30);
  aeroplane.addImage(aeroplaneImg);
  aeroplane.scale = 0.6;

}

function draw() {
  background("lightblue")

  image(backgroundImg, -550, 0, width * 2, height);

  camera.position.x = aeroplane.position.x;


  /* if (background.x < 0) {
     background.x = width; 
   }  */
  //console.log(background.x, background.y);
  // to move the aeroplane by the up arrow
  if (keyDown("UP")) {
    aeroplane.velocityY -= 2;
  }
  aeroplane.velocityY += 1; //gravity


  if (keyWentDown("RIGHT")) {
    aeroplane.velocityX = 2;
  }

  if (keyWentUp("RIGHT")) {
    aeroplane.velocityX = 0;
  }


  aeroplane.bounceOff(border);
  aeroplane.collide(ground);  //collision

  console.log(aeroplane.position);

  Lightning();
  Birds();
  drawSprites()
}

function Lightning() {

  if (World.frameCount % 150 == 0) {
    /* background.y = height/2;
     background.changeAnimation("DARK", nightImg);  
     background.scale = 2.75; 
     console.log(background.x, background.y); */

    // image(nightImg, 0, -height*5, width,height*6);

    lightning = createSprite(windowWidth, 100, 20, 20);
    lightning.addImage(lightningImg);
    lightning.velocityX = -5;
    lightning.lifetime = windowWidth;
    lightning.scale = 1;
  }
}

function Birds() {
  if (World.frameCount % 250 == 0) {
    /*background.y = 0;
    background.changeAnimation("LIGHT", backgroundImg);
    background.scale = 1.35;*/

    // image(backgroundImg, 0, -height*5, width,height*6);

    birds = createSprite(windowWidth, Math.round(random(30, height / 2)), 20, 20);
    birds.addImage(birdImg);
    birds.velocityX = -5;
    birds.lifetime = windowWidth;
    birds.addImage(birdImg);
    birds.scale = 0.25;

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}






