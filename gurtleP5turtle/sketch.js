let greg;  //variable to hold gurtle
let oscil = [0,1,2,3,4,5,5,4,3,2,1,0]; // oscillation heavy at both ends
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  greg = new Gurtle(width/6,height/3,color(255,191,0));

  background(0);
  snowflake(greg,4,400)
  frameRate(5)
}

function draw(){
  background(0);
  greg.angle=0;
  //let lev = abs(floor(sin(frameCount)*4)); // you should first take the abs then floor it but solution below is better
  let lev = oscil[frameCount%oscil.length];
  textSize(20)
  fill(255,191,0);
  text(lev,50,50)
  snowflake(greg,lev,400);
}

function koch(t, level, size){
  if (level == 0){
    t.forward(size);

  }else{
    koch(t, level-1, size/3)   // Go 1/3 of the way
    t.left(60)
    koch(t, level-1, size/3)
    t.right(120)
    koch(t, level-1, size/3)
    t.left(60)
    koch(t, level-1, size/3)
  }

}

// snowflake is three calls to koch
// my left and right for koch are reversed to
// the books, but makes a point about directions

function snowflake(t, level,size){
  koch(t,level,size);
  t.right(120);
  koch(t,level,size);
  t.right(120);
  koch(t,level,size);

}
 


function sqr(obj, size){
  for (let i=0; i<4;i++){
    obj.forward(size)
    obj.right(90)
  }
}