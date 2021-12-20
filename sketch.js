
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1, wall2, wall3;
var ball, ball_options;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall1 = new ground(width/2, 670, width, 20);
	wall2 = new ground(1100, 600, 20, 120);
	wall3 = new ground(1350, 600, 20, 120);
	ball_options = {
	isStatic:false, 
	restitution:0.3, 
	friction:0, 
	density:1.2
	}
	ball = Bodies.circle(260, 100, 30, ball_options);
	World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	wall1.display();
	wall2.display();
	wall3.display();

	ellipse(ball.position.x, ball.position.y, 30);

  drawSprites();
 
}


function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); 
	} 
}

