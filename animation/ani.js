var canvas = document.getElementById('ani');
var ctx = canvas.getContext("2d");
var bgImage = new Image();

var bgload = false;

var score = 1;
var updateScore = function() {
  score = score + 1;
  document.getElementById('score').innerHTML = score;
};

bgImage.onload = function () {
  bgload = true;
};
bgImage.src = "bg.png";


//draw background image
var drawBackground = function() {
  ctx.drawImage(bgImage, 0, 0);
};

var ball = {
  x: 320,
  y: 460,
  dx: 0,
  dy: 0,
  radius: 10,
  color: "#4A148C",
  move: function() {
    this.x += this.dx;
    this.y += this.dy;
  },
  setSpeed: function(x, y) {
    this.dx = x;
    this.dy = y;
  },
  check: function() {
    if (this.x < this.radius || this.x +this.radius > 640) {
      this.dx = this.dx * (-1.1);
    }
    if (this.y < this.radius) {
      this.dy = this.dy * (-1.1);
    }else if (this.y > 480) {
      this.dead();
    }else if (this.y > 460 && bar.x - bar.length < this.x && this.x < bar.x + bar.length) {
      this.dy = this.dy * (-1);
    }
  },
  dead: function() {
    alert("You Die.. GAME OVER");
    clearInterval(x);
  }
};

var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

var bar = {
  x: 320,
  y: 470,
  dx: 0,
  dy: 0,
  length: 40,
  color: "#FFFF00",
  move: function() {
    if(rightPressed) {
      if (this.x + this.length <= 640) {
        this.x += 10;
      }
    }
    else if(leftPressed) {
      if (this.x - this.length >= 0) {
        this.x -= 10;
      }
    }
  }
};

ctx.drawBar = function() {
  this.beginPath();
  this.lineWidth = 10;
  this.strokeStyle = bar.color;
  this.moveTo(bar.x - bar.length, bar.y);
  this.lineTo(bar.x + bar.length, bar.y);
  this.closePath();
  this.stroke();
};

ctx.drawBall = function() {
  this.beginPath();
  this.fillStyle = ball.color;
  this.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, false);
  this.fill();
};


ball.setSpeed(3, 3);

var drawAll = function() {
  if (bgload) {
    drawBackground();
  }

  //document.getElementById('score').innerHTML =   parseInt(document.getElementById('score').innerHTML) + 1;

  updateScore();
  ball.check();
  ball.move();
  bar.move();
  ctx.drawBall();
  ctx.drawBar();
};

var x= setInterval(drawAll, 30);
