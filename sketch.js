var ground1;
var box1,box2,box3,box4,box5;
var polygon,slingshot;

function setup() {
  createCanvas(800,400);
  
  ground1 = new Ground(400,100,20,5);
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(810,160,70,70);
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new Slingshot(this.polygon, {x:100, y:200});



}

function draw() {
  background(255,255,255); 
  
  ground1.display();
  block1.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Slingshot.fly();
} 

