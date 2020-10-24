
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(400,200,400,50);

bob1 = new Bob(400,500,25);
bob2 = new Bob(450,500,25);
bob3 = new Bob(350,500,25);

rpe1 = new Chain(roof.body,bob1.body);
rpe2 = new Chain(roof.body,bob2.body);
rpe3 = new Chain(roof.body,bob3.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(170);
roof.display()  

bob1.display()
bob2.display()
bob3.display()

rpe1.display()
rpe2.display()
rpe3.display()



drawSprites();
 
}


