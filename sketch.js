var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
}
function draw() {
background("black")
Engine.update(engine)
ground.display()
}

for (var k = 0; k<=width; k=k+80){
  divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var j = 40; j<=width; j=j+50){
  plinkos.push(new plinkos(j,75));
}

for (var j = 15; j<=width-10; j=j+50){
  plinkos.push(new plinkos(j,175));
}

for (var j = 15; j<=width-10; j=j+50){
  plinkos.push(new plinkos(j,275));
}

for (var j = 15; j<=width-10; j=j+50){
  plinkos.push(new plinkos(j,375));
}

if(frameCount%60===0){
  particles.push(new particle(random(width/2-10, width/2+10), 10,10));
}

for (var j= 0; j< particles.length;j++){
  particles[j].display();
}
for (var k = 0; k< divisions.length; k++){
  divisions[k].display();
}