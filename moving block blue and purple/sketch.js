let squares = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
  generateSquares();
}

function draw() {
  background(255);
  drawSquares();
  moveSquares();
  checkEdges();
}

function generateSquares() {
  let numSquares = 50;
  for (let i = 0; i < numSquares; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(30, 80);
    let speed = random(0.5, 2);
    let direction = random(TWO_PI);
    let square = { x, y, size, speed, direction };
    squares.push(square);
  }
}

function drawSquares() {
  squares.forEach(square => {
    fill(random(0, 400), random(100, 200), random(300, 500), 150);
    rect(square.x, square.y, square.size, square.size);
  });
}

function moveSquares() {
  squares.forEach(square => {
    let vx = cos(square.direction) * square.speed;
    let vy = sin(square.direction) * square.speed;
    square.x += vx;
    square.y += vy;
  });
}

function checkEdges() {
  squares.forEach(square => {
    if (square.x < -square.size) {
      square.x = width + square.size;
    } else if (square.x > width + square.size) {
      square.x = -square.size;
    }
    if (square.y < -square.size) {
      square.y = height + square.size;
    } else if (square.y > height + square.size) {
      square.y = -square.size;
    }
  });
}