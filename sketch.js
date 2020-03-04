let x_pixels = 1900;
let y_pixels = 980;

function setup() {
  createCanvas(x_pixels, y_pixels);
  stars = makeStars(70);

  sun = new Sun(width/2, height/2, 60);

  
  mercury = new Planet(sun.x, sun.y, 3, 182, 184, 184, 80, 0.015);
  venus = new Planet(sun.x, sun.y, 4, 255, 220, 100, 95, 0.013);

  
  earth = new Planet(sun.x, sun.y, 5, 28, 115, 255, 120, 0.011);
  moon = new Moon(earth.x, earth.y, 2, 255, 255, 255, 10, 0.015);

  
  mars = new Planet(sun.x, sun.y, 4, 212, 90, 19, 150, 0.009);
  phobos = new Moon(mars.x, mars.y, 1.5, 250, 200, 200, 12, 0.011);
  daimos = new Moon(mars.x, mars.y, .5, 255, 255, 255, 8, 0.015);

  
  asteroids = makeBelt(100, 190);

  

  
  jupiter = new Planet(sun.x, sun.y, 20, 181, 139, 34, 250, 0.006);
  callisto = new Moon(jupiter.x, jupiter.y, 3, 250, 200, 200, 30, 0.01);
  ganymede = new Moon(jupiter.x, jupiter.y, 4, 250, 200, 200, 35, 0.012);
  europa = new Moon(jupiter.x, jupiter.y, 2, 250, 200, 200, 40, 0.01);
  io = new Moon(jupiter.x, jupiter.y, 1, 250, 200, 0, 45, 0.009);

  
  saturn = new DiskPlanet(sun.x, sun.y, 14, 255, 198, 54, 320, 0.005);
  enceladus = new Moon(saturn.x, saturn.y, 4, 255, 255, 255, 19, 0.01);
  titan = new Moon(saturn.x, saturn.y, 3, 255, 255, 0, 20, 0.009);
  mimas = new Moon(saturn.x, saturn.y, 2, 200, 200, 200, 23, 0.007);

  
  uranus = new Planet(sun.x, sun.y, 12, 187, 237, 237, 380, 0.004);
  umbriel = new Moon(uranus.x, uranus.y, 3, 200, 200, 200, 20, 0.012);
  titania = new Moon(uranus.x, uranus.y, 2, 200, 200, 200, 25, 0.01);
  oberon = new Moon(uranus.x, uranus.y, 1.5, 200, 200, 200, 30, 0.008);
  ariel = new Moon(uranus.x, uranus.y, 1, 200, 200, 200, 34, 0.007);


  neptune = new Planet(sun.x, sun.y, 10, 0, 10, 255, 450, 0.003);
  triton = new Moon(neptune.x, neptune.y, 1.5, 255, 255, 255, 22, 0.01);

  pluto = new Planet(sun.x, sun.y, 2, 255, 200, 10, 480, 0.002);
  charon = new Moon(pluto.x, pluto.y, 0.5, 255, 255, 255, 5, 0.015);

 
  oort = makeBelt(200, 540);
}


function makeStars(amount) {
  var stars = [];

  for (i = 0; i < amount; i++) {
    var rand_x = floor(random(x_pixels)) + 1;
    var rand_y = floor(random(y_pixels)) + 1;
    var size = floor(random(3)) + 1;
    var star = new Star(rand_x, rand_y, size, 200, 255, 200);
    console.log("Created new star! " + (i + 1).toString());
    stars.push(star);
  }
  return stars;
}


function makeBelt(amount, distance) {
  var belt = [];

  for (i = 0; i < amount; i++) {
    var rand_x = floor(random(x_pixels)) + 1;
    var rand_y = floor(random(y_pixels)) + 1;
    var size = floor(random(2)) + 1;
    var distance_range = floor(random() * ((distance + 10) - (distance - 10)) + distance - 10);

    var asteroid = new Planet(sun.x, sun.y, size, 92, 64, 51, distance_range, 0.0005);
    console.log("Created new star! " + (i + 1).toString());
    belt.push(asteroid);
  }
  return belt;
}


function drawStars(objects) {
  for (i = 0; i < objects.length; i++) {
    
    objects[i].show();
  }
}


function drawBelt(objects) {
  for (i = 0; i < objects.length; i++) {
    
    objects[i].show();
    objects[i].checkPosition(sun);
  }
}


function handlePlanets() {
  mercury.show();
  venus.show();
  earth.show();
  mars.show();
  jupiter.show();
  saturn.show();
  uranus.show();
  neptune.show();
  pluto.show();

  mercury.checkPosition(sun);
  venus.checkPosition(sun);
  earth.checkPosition(sun);
  mars.checkPosition(sun);
  jupiter.checkPosition(sun);
  saturn.checkPosition(sun);
  uranus.checkPosition(sun);
  neptune.checkPosition(sun);
  pluto.checkPosition(sun);
}


function handleMoons() {
  
  moon.show();
  moon.checkPosition(earth);

  
  phobos.show();
  phobos.checkPosition(mars);
  daimos.show();
  daimos.checkPosition(mars);

  
  callisto.show();
  callisto.checkPosition(jupiter);
  europa.show();
  europa.checkPosition(jupiter);
  ganymede.show();
  ganymede.checkPosition(jupiter);
  io.show();
  io.checkPosition(jupiter);

  
  enceladus.show();
  enceladus.checkPosition(saturn);
  titan.show();
  titan.checkPosition(saturn);
  mimas.show();
  mimas.checkPosition(saturn);

 
  umbriel.show();
  umbriel.checkPosition(uranus);
  titania.show();
  titania.checkPosition(uranus);
  oberon.show();
  oberon.checkPosition(uranus);
  ariel.show();
  ariel.checkPosition(uranus);

  
  triton.show();
  triton.checkPosition(neptune);

  
  charon.show();
  charon.checkPosition(pluto);
}


function draw() {
  background(51);
  drawStars(stars);
  sun.show();
  handlePlanets();
  drawBelt(asteroids);
  drawBelt(oort);
  handleMoons();

 
}
