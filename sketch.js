var ball,img,paddle;
function preload() {
  ballimg=loadImage("ball.png");
  
paddleimg=loadImage("paddle.png");
  
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  ball=createSprite(200,200,12,12);
  ball.addImage(ballimg);
  paddle=createSprite(390,200,10,70);
 paddle.addImage(paddleimg);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
 edges= createEdgeSprites();
 ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  paddle.collide(edges);
  ball.bounceOff(paddle);
  
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
   paddle.velocityY=-7;
  }
  
  if(keyDown(DOWN_ARROW))
  {
     paddle.velocityY = 7;
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
   var random = randomNumber();
 ball.velocity.y = Math.round(random(1,9));

}

