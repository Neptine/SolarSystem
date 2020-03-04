
function Star(x, y, r, red, green, blue) {
  this.r = r;
  this.x = x;
  this.y = y;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);

  this.red = red;
  this.green = green;
  this.blue = blue;


  this.show = function() {
    noStroke();
    this.position.add(this.velocity); 
    fill(this.red, this.green, this.blue);
    ellipse(this.position.x, this.position.y, this.r*2, this.r*2);
  }
}
