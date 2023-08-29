let shapes = [];
let colors = [
  [0, 154, 205],
  [51, 204, 102],
  [255, 221, 0]
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  generateShapes();
}

function draw() {
  background(255);
  drawShapes();
}

function generateShapes() {
  for (let i = 0; i < 200; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(10, 100);
    let color = randomColor();
    let shape = { x, y, size, color };
    shapes.push(shape);
  }
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
  let color = random(colors);
  return color.concat(50);
}
