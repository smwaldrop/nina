var img;
var back;
var slope = 0.3; // Slope of the incline (rise overrun)
let yIntercept = 250; // Y-intercept of the line

let x1 = 0;
let y1 = 0;
let easing = 0.02; // 1.0 to 0

function preload() {
  // Load an image (replace this with your own image URL if needed)
  //SYDNEY -- I updated these links here
  img = loadImage('assets/nina-1000.png');
  back = loadImage('assets/down1-1000.png')
}

function setup() {
  createCanvas(1000, 650);
  //imageMode(CENTER);
}

function draw() {
  // background(back);
  imageMode(CORNER);
  image(back, 0, 0, 1000, 650);
 

  // Calculate constrained y position based on the line's equation: y = m*x + b
  let x = mouseX;
  let y = slope * x + yIntercept;
  
  let targetX = x;
  x1 = x1 + ((targetX - x1) * easing);
  
  let targetY = y;
  y1 = y1 + ((targetY - y1) * easing);
 
  
  // Draw the slope line for reference (you can delete this later)
  //stroke(150);
  //line(0, yIntercept, width, slope * width + yIntercept);
  
  imageMode(CENTER);
  
  //this uses a timer
  //when the sketch starts, the figure is all the way on the left.
  // once 1000 milliseconds goes by, the sketch becomes interactive
  let m = millis();
  let t = 1000; // how many milliseconds to keep the figure on the left. You can change this to make her stay there longer or shorter
  if (m < t){ 
    image(img, 0, yIntercept, 300, 230);
  }
  else{
    image(img, x1, y1, 300, 230);
  }

  
}