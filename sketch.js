
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine

var bob1, bob2, bob3, bob4, bob5;

var rope1, rope2, rope3, rope4, rope5;

var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var bobDiameter = 80
	var startBobPositionX = 400

	roof = new Roof(400, 100, 500, 10);
	bob1 = new Bob(startBobPositionX - bobDiameter * 2, 400);
	bob2 = new Bob(startBobPositionX - bobDiameter, 400);
	bob3 = new Bob(startBobPositionX, 400);
	bob4 = new Bob(startBobPositionX + bobDiameter, 400);
	bob5 = new Bob(startBobPositionX + bobDiameter * 2, 400);
	rope1 = new Slingshot(bob1.bob, roof.body, { x: -bobDiameter * 2, y: 0});
	rope2 = new Slingshot(bob2.bob, roof.body, {x: -bobDiameter, y: 0});
	rope3 = new Slingshot(bob3.bob, roof.body, {x: 0, y: 0});
	rope4 = new Slingshot(bob4.bob, roof.body, {x: bobDiameter, y: 0});
	rope5 = new Slingshot(bob5.bob, roof.body, {x: bobDiameter * 2, y: 0});

	Engine.run(engine);

	Matter.Body.applyForce(bob1.bob, bob1.bob.position, {x: -250, y: 0});
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



