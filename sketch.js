const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload() {


}


function setup() {

	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(220, 500, 40);
	bobObject2 = new Bob(300, 500, 40);
	bobObject3 = new Bob(380, 500, 40);
	bobObject4 = new Bob(460, 500, 40);
	bobObject5 = new Bob(540, 500, 40);

	roof = new Roof(390, 200, 450, 40);

  bobDiameter = 40;

  rope1 = new Rope(bobObject1.body, roof.body, -bobDiameter*2, 0);
  rope2 = new Rope(bobObject2.body, roof.body, -bobDiameter*2, 0);
  rope3 = new Rope(bobObject3.body, roof.body, -bobDiameter*2, 0);
  rope4 = new Rope(bobObject4.body, roof.body, -bobDiameter*2, 0);
  rope5 = new Rope(bobObject5.body, roof.body, -bobDiameter*2, 0);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  Engine.update(engine);

  background("grey");
  
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  rope1.display();

  drawSprites();
 
}



