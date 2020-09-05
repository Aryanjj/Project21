var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600, 400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = color(80, 80, 80);
  bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(255, 255, 255);

  if (hasCollided(wall, bullet)) {
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if (damage < 10) {
      bullet.shapeColor = "red";


    }
    bullet.collide(wall);
    if (damage > 10) {
      bullet.shapeColor = "green";


    }


  }


  drawSprites();
}

function hasCollided(ob1, ob2) {
  if (ob1.x - ob2.x < ob1.width / 2 + ob2.width / 2) {
    return true;

  } else {
    return false;
  }

}