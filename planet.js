
function Planet(x, y, r, red, green, blue, distance, velocity) {
  this.r = r;
  this.distance = distance;
  this.random_shift = floor(random(180));
  this.position = createVector(x + this.distance, y);
  this.radians = 0 + this.random_shift;
  this.velocity = velocity;

  this.red = red;
  this.green = green;
  this.blue = blue;

  
  this.show = function() {
    noStroke();
    fill(this.red, this.green, this.blue);
    ellipse(this.position.x, this.position.y, this.r*2, this.r*2);
  }

  
  this.checkPosition = function(parent) {
    this.radians -= this.velocity;
    this.position.x = parent.x + Math.cos(this.radians) * this.distance;
    this.position.y = parent.y + Math.sin(this.radians) * this.distance;
  }
}
