
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var box1,box2,box3,box4,box5,box6;
function preload(){

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1  =new Ground(250,400,100,10);
box1 = new box(300,235,30,40);
box2 = new box(330,235,30,40);
box3 = new box(360,235,30,40);
box4 = new box(390,235,30,40);
box5 = new box(420,235,30,40);
box6 = new box(450,235,30,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  drawSprites();
 
}



