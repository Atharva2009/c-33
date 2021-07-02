const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var side1;
var score=0;


function setup() {
  createCanvas(800,480);
  engine = Engine.create();
  world = engine.world;

  side1=new Ground(2,240,10,480);
  side2=new Ground(400,2,800,10);
  side3=new Ground(798,240,10,480);
  side4=new Ground(400,478,800,10);
  plinko=new Particle(400,240,10,10)


}

function draw() {
  background(0);
  textSize(18)
        fill("white")
        text("Score : " +score,width-200,height/8)
         
Engine.update(engine); 

side1.display()
side2.display()
side3.display()
side4.display()
plinko.display()
drawSprites()
}

