
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,1600,20)
	paper = new Paper(100,500,20)
	bottomBar = new Ground(650,660,300,20)
	leftBar = new Ground(500,605,20,130)
	rightBar = new Ground(800,605,20,130)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  bottomBar.display();
  leftBar.display();
  rightBar.display();
  drawSprites();
  keyPressed();
 
}

function keyPressed(){
	if(keyCode === 38){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-5});
	}
}



