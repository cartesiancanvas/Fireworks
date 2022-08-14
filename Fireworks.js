var particle_count;
var particles =[]; 
let xPos;
let yPos;
let flag;
let choose;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  colorMode(HSB, 360, 1, 1, 255);
}


function draw() {
  background(0, 0, 0, 15);
  particle_count=random(100, 350);

  if (flag==1) {
    for (var j=0; j<particle_count; j++) {
      particles.push(new Particles(xPos, yPos, 255, choose, int(random(8)), int(random(3, 8)), int(random(3, 8)),random(8*PI)));
    }
  }
  flag=0;

  for (var i=particles.length-1; i>=0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].y>height || particles[i].y<0 || particles[i].x>width || particles[i].x<0 || particles[i].alpha<0) {
      particles.splice(i, 1);
    }
  }
}
function mouseClicked() {
  flag=1;
  choose=int(random(14));
  xPos = mouseX;
  yPos = mouseY;
}
