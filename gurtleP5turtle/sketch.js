let greg;  //variable to hold gurtle

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  greg = new Gurtle(width/4,height/4,color(255,0,0));

  background(0);
  snowflake(greg,4,300)
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