var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("C36RV_SpeedRacer_StudentActivity-main\assets\car1.png")
  car2_img = loadImage("C36RV_SpeedRacer_StudentActivity-main\assets\car2.png")
  trackimg = loadImage("C36RV_SpeedRacer_StudentActivity-main\assets\track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();

}

function draw() {
  background(backgroundImage);

  if(playerCount===2){
game.update(1);
  }

  if(gameState===1){
    game.play();

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
