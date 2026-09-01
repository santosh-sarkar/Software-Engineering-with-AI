const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let isGameOver = false;
let leftPressed = false;
let rightPressed = false;

const bricks = [];
const brickRows = 4;
const brickColumns = 16;
const brickWidth = 40;
const brickHeight = 25;
const brickGap = 5;
const brickOffsetTop = 50;
const brickOffsetLeft = 50;

let score = 0;

const ball = {
  x: canvas.width / 2,
  y: canvas.height - 15,
  radius: 10,
  velocityX: 4,
  velocityY: -3,
};

const paddle = {
  x: canvas.width / 2 - 60,
  y: canvas.height - 10,
  width: 120,
  height: 15,
  speed: 7,
};
function createBricks() {
  for (let row = 0; row < brickRows; row++) {
    for (let column = 0; column < brickColumns; column++) {
      bricks.push({
        x: brickOffsetLeft + column * (brickWidth + brickGap),
        y: brickOffsetTop + row * (brickHeight + brickGap),
        width: brickWidth,
        height: brickHeight,
        destroyed: false,
      });
    }
  }
}
createBricks();

function drawBricks() {
  bricks.forEach((brick) => {
    if (!brick.destroyed) {
      ctx.fillStyle = "orange";

      ctx.fillRect(brick.x, brick.y, brick.width, brick.height);
    }
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBricks();

  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "green";
  ctx.fill();

  ctx.fillStyle = "red";
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

  if (ball.x <= 0 || ball.x >= canvas.width) {
    ball.velocityX = -ball.velocityX;
  }

  if (ball.y <= 0) {
    ball.velocityY = -ball.velocityY;
  }

  if (ball.y >= canvas.height) {
    isGameOver = true;
  }

  if (leftPressed && paddle.x > 0) {
    paddle.x -= paddle.speed;
  }
  if (rightPressed && paddle.x + paddle.width < canvas.width) {
    paddle.x += paddle.speed;
  }

  if (
    ball.x - ball.radius < paddle.x + paddle.width &&
    ball.x + ball.radius > paddle.x &&
    ball.y - ball.radius < paddle.y + paddle.height &&
    ball.y + ball.radius > paddle.y &&
    ball.velocityY > 0
  ) {
    ball.velocityY = -ball.velocityY;
  }

  bricks.forEach((brick) => {
    if (brick.destroyed) {
      return;
    }

    if (
      ball.x - ball.radius < brick.x + brick.width &&
      ball.x + ball.radius > brick.x &&
      ball.y - ball.radius < brick.y + brick.height &&
      ball.y + ball.radius > brick.y
    ) {
      brick.destroyed = true;
      ball.velocityY = -ball.velocityY;
      score++;
    }
  });

  if(bricks.every((brick) => brick.destroyed)){
    alert("you won the game !!")
    return
  }

  if (!isGameOver) {
    requestAnimationFrame(animate);
  } else {
    alert(`game over !! and your score is : ${score}`);
  }
}

animate();

if (leftPressed) {
  paddle.x -= paddle.speed;
}
if (rightPressed) {
  paddle.x += paddle.speed;
}

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    leftPressed = true;
  }

  if (event.key === "ArrowRight") {
    rightPressed = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key === "ArrowLeft") {
    leftPressed = false;
  }

  if (event.key === "ArrowRight") {
    rightPressed = false;
  }
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
