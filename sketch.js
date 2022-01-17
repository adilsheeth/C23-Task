const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world, engine;
let ball, ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  //Add world to the engine
  world = engine.world;

   let ball_options = {
    restitution: 0.95,
    frictionAir:0.01,
  }
   
   let ground_options ={
     isStatic: true,
   };
  
  
//create a ground
//add to world
  fill("black");
  ground = Bodies.rectangle(200,385,400,30,ground_options);
  World.add(world,ground);
  

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background('white');
  Engine.update(engine);
  
  push();   
  fill('green');
  ellipse(ball.position.x,ball.position.y,20);
  pop();
  //write a rectangle function to display ground.
  rect(ground.position.x, ground.position.y,400,30)


  
  
}

