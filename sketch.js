var ball={
  x:20,
  y:30,
  radius:30,
  xspeed:0,
  color:["blue","green"]
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.radius)
  fill(ball.color[1])
  ball.xspeed=2
  ball.x=ball.x+ball.xspeed
}