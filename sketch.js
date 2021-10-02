var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score=0

var angell;
var airBallon;
var sky;

var gameOver,restart;

var gameOverImg,restartImg;

function preload(){

angell = loadImage("angell.gif");

sky = loadImage("sky.jpg");

airBallon = loadImage("airBallon.png")

gameOverImg = loadImage("gameOver.jpg");
restartImg = loadImage("restart.jpg");

}

function setup() {
 createCanvas(200,600)

angell = createSprite(50,180,20,50);

//angell.addImage(angell);
angell.scale=0.8;

sky = createSprite(200,180,20,400);
//sky.addImage(sky);
sky.y = sky.height /2;
sky.velocityY = -(6 + 3*score/100);

gameOver = createSprite(300,100);
gameOver.addImage(gameOverImg);

restart = createSprite(300,140);
//restart.addImage(restartImg);


gameOver.scale = 0.5;
restart.scale = 0.5;

gameOver.visible = false;
restart.visible = false;

score = 0;
}

function draw() {
background(255);
text("score: "+score,500,50);






































 
    drawSprites();
}