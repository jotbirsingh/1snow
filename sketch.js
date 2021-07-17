var Matter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boyImg;
function preload(){
  backgroundImg =loadImage("snow2.jpg");
  boyImg=loadImage("boy.png");
}

function setup() { 
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 300, 1300, 20);
  boy=createSprite(1000,500,40,40);
  boy.addImage(boyImg);

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

ground.display();
boy.display();
  drawSprites();
 
    
}