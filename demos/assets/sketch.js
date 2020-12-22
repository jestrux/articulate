window.sineColor = "rgba(0, 0, 0, .35)";
var offset = 0;

function setup() { 
  createCanvas(window.innerWidth + 20, 580);
} 

function draw() { 
  // background("antiquewhite");
  background("white");
  beginShape();
  fill(255);
  strokeWeight(2);
  stroke(window.sineColor);
  vertex(0, height);
  for(var x = -15; x < width; x++){
    var angle = offset + x * 0.012;
    var y = map(sin(angle), -1, 1, 280, 575);
    vertex(x, y);
  }
  vertex(width, height);
  endShape();
  // offset += 0.1;
}