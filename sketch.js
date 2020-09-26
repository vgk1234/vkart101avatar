let face = ["A", "B", "C", "D", "E"]''

function setup() {

  console.log(face[2]);

  eyeColor = color(128); // eye color is gray


  yPos = height * 2.5; // height where tear drop begins
  eyeColor = color(128); // eye color is gray
  tear1 = new Tear (width/4, yPos, width/20);
  tear2 = new Tear (width * 3/4, yPos, width/20);
  console.log (tear1);
  console.log (tear2);

  createCanvas(400, 400);
  //face
  noStroke;
  background(255, 255, 204);

  drawHair();
  drawNose();
  drawMouth();
  drawEye1 ();
  drawEye2 ();
}

function draw () {
  tear1.display ();
  tear2.display ();
  drawEye1 ();
  drawEye2 ();
}

function mousePressed() {

  if (mouseX > width/8 && mouseX < width * 7/8 &&
     mouseY > height/3 && mouseY < height * 2/3 ) {
     console.log("I am sad");
     eyeColor = color(0); // set eye color to black
     drawCheek ();
     drawCheek2 ();
  }
}

function drawHair() {
  fill(0);
  beginShape(TRIANGLES);
  vertex(0, 0);
  vertex(width/8, height/3);
  vertex(width/4, 0);
  vertex(width/4, 0);
  vertex(width * 3/8, height/3);
  vertex(width/2, 0);
  vertex(width/2, 0);
  vertex(width * 5/8, height/3);
  vertex(width * 3/4, 0);
  vertex(width * 3/4, 0);
  vertex(width * 7/8, height/3);
  vertex(400, 0);
  endShape();
}

function drawEye1() {
  //eye1
  fill(eyeColor);
  stroke(255);
  strokeWeight(8);
  circle(width/4, width/2, width/5);
}

function drawEye2() {
  //eye2
  fill(eyeColor);
  stroke(255);
  strokeWeight(8);
  circle(width * 3/4, width/2, width/5);
}


function drawNose () {
  //nose
  fill(255, 238, 204);
  stroke(0);
  strokeWeight(1);
  circle(width/2, width * 3/5, width/12);
}


function drawMouth () {
  //mouth
  stroke(0);
  strokeWeight(6);
  line(width * 3/8, height * 4/5, width * 5/8, height * 4/5);
}

function drawCheek () {
  fill (255, 204, 255);
  stroke(255, 204, 255);
  strokeWeight(1);
  circle (width/8, height * 3/4, width/8);
}


function drawCheek2 () {
  fill (255, 204, 255);
  stroke(255, 204, 255);
  strokeWeight(1);
  circle (width * 7/8, height * 3/4, width/8);
}
