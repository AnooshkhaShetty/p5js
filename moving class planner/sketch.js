let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  generateShapes();
}

function draw() {
  background(255);
  moveShapes();
  drawShapes();
}

function generateShapes() {
  for (let i = 0; i < 200; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(10, 100);
    let color = randomColor();
    let shape = {
      x: x,
      y: y,
      size: size,
      color: color,
      speed: random(0.5, 2)
    };
    shapes.push(shape);
  }
}

function moveShapes() {
  shapes.forEach(shape => {
    if (shape.x < -shape.size) {
      shape.x = width + shape.size;
    } else {
      shape.x -= shape.speed;
    }
  });
}

function drawShapes() {
  shapes.forEach(shape => {
    fill(shape.color);
    if (random(1) < 0.5) {
      rect(shape.x, shape.y, shape.size, shape.size);
    } else {
      rect(shape.x, shape.y, shape.size * 2, shape.size);
    }
  });
}

function randomColor() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  return color(r, g, b, 50);
}
