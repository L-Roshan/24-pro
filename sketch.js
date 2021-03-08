
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var hammer;
var ground;
var rubber;
var sand1,sand2,sand3,sand4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	box1 = new Stone(700,320,200,200);
	ground = new Ground(400,height,800,20);
	hammer = new Hammer(100,100);
	rubber = new Rubber(700,370,20,10);
	sand1=new Sand(250,470);
   sand2=new Sand(270,470);
   sand3=new Sand(390,470);
   sand4=new Sand(400,470);

    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  box1.display();
  ground.display();
  hammer.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  drawSprites();
  
 
}



