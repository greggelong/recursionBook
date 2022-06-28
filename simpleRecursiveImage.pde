void setup(){
size(600,600);
background(0);
frameRate(2);
stroke(0,255,0);
noFill();
rectMode(CENTER);
rmf(width/2,height/2,300,1); // (x,y,sz,depth)
  
}

void draw(){
  background(0);
  
  rmf(width/2,height/2,300,frameCount%9); // (x,y,sz,depth)
  
}


void rmf(float x, float y, float sz, int depth){
 square(x,y,sz);
 circle(x,y,sz); 
 if(depth > 1){
   depth =depth -1;
 // to the left
  rmf(x-sz/2, y, sz/2, depth); 
  
 //to the right
  
  rmf(x+sz/2,y,sz/2,depth);
   
  //to the down
  
  //rmf(x,y+sz/2,sz/2,depth);
  
  //to the up
  
  rmf(x,y-sz/2,sz/2,depth);
 }
  
}
