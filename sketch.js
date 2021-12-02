const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas,angle;
var palyer,playerArcher, playerBase,archer,playerArrow;
var playerimage,baseimage;


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  
  

  playerBase = Bodies.rectangle(200, 350, 180, 150, {isStatic: true});
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, {isStatic: true});
  World.add(world,player);

  playerArcher = new PlayerArcher(
    width-1480,
    playerBase.position.y - 180,
    150,
    150,angle
  );

  playerArrow = new PlayerArrow(playerArcher.x,playerArcher.y);
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  push();
  fill("brown");
  imageMode(CENTER);
  image(baseimage,playerBase.position.x,playerBase.position.y,250,200);
  pop();

 push();
  imageMode(CENTER);
  image(playerimage, player.position.x, player.position.y, 50,180);
  pop();

  
 /*image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)*/

  playerArcher.display();
  playerArrow.display();

  if(keyCode === 32){
    playerArrow.shoot(playerArcher.body.angle);
  }
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}

