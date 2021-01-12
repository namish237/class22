const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

var ground,box;



function setup() {
  createCanvas(400,400);

  myEngine=Engine.create();
  // myworld is myEngine'e world
  myWorld = myEngine.world;

  var options={
    isStatic :true,
  }

  ground = Bodies.rectangle(200,350,400,30, options);
  World.add(myWorld, ground);

  console.log(ground);

  var ball_option={
    restitution :1,
  }

  ball = Bodies.circle(200,200,30,ball_option);
  World.add(myWorld,ball)
  ball1= Bodies.circle(100,100,20,ball_option);
  World.add(myWorld,ball1)
   box= Bodies.rectangle(100,100,20,20);
   World.add(myWorld,box)
 
}

function draw() {
  Engine.update(myEngine);
  background(0); 
  ellipseMode(CENTER)
  ellipse(ball.position.x, ball.position.y , 60,60)
  ellipse(ball1.position.x, ball1.position.y , 40,40)
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,30)
   rect(box.position.x,box.position.y,20,20)
  //rect(200,200,50,50);

}