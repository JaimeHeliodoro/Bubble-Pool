let points=[];
let r1;
let r2;
let g1;
let g2;
let b1;
let b2;

function setup() {
  createCanvas(1536, 713);
  background(30);
  angleMode(DEGREES);
  ellipseMode(RADIUS);
  noiseDetail(1);
  let density=100;
  let space=width/density;
  for(let x=0;x<width;x+=space) {
    for(let y=0;y<height;y+=space) {
      let p=createVector(x,y);
      points.push(p);
  colorMode(HSB,360,100,100);
  r1=random(255);
  r2=random(255);
  g1=random(255);
  g2=random(255);
  b1=random(255);
  b2=random(255);
    }
  }  
}

function draw() {
  noStroke();
  translate(width/2,height/2);
  for (let i=0;i<points.length;i++) {
    let r=map(points[i].x,0,width,r1,r2);
    let g=map(points[i].y,0,height,g1,g2);
    let b=map(points[i].x,0,width,b1,b2);
    fill(r,g,b);
    ellipse(points[i].x,points[i].y,5);
    rotate(sin(frameCount+i)*50);
    
  }  
}