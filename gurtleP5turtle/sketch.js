let greg;  //variable to hold gurtle

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  greg = new Gurtle(10,height/2,color(255,0,0));
}

function draw() {
  background(127);
  // can move gurtel to a particular spot
  greg.x = random(width)
  greg.y = random(height)
  // can change gurtel's angle 
  greg.angle = random(360)
  // can change gurtle's color
  greg.clr = color(random(255),random(255), random(255))
  
  sqr(greg, random(height/4))
  
}


function sqr(obj, size){
  for (let i=0; i<4;i++){
    obj.forward(size)
    obj.right(90)
  }
}