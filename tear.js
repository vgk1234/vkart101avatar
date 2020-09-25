class Tear {
  constructor (_yPos) {
    this.yPos = yPos = height * 2.5;
  }
  display () {
    fill(104, 204, 255);
    stroke(104, 204, 255);
    strokeWeight(1);
    circle (width/4, yPos, width/20);
    circle (width * 3/4, yPos, width/20);
  
    yPos = yPos + 1; // movement of tear
  }
  
}

