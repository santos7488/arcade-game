// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.h = 101;
    this.w = 171;
};

let difficulty = 0;
let death = 0;
// characters
const char = {
    boy: "images/char-boy.png",
    catgirl: "images/char-cat-girl.png",
    horngirl: "images/char-horn-girl.png",
    princessgirl: 'images/char-princess-girl.png',
    pinkgirl: 'images/char-pink-girl.png'
}

var Player = function(x, y, speed) {
    // Load sprite
    this.sprite = "images/char-boy.png";
    // Position player baised on variable
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.h = 101;
    this.w = 171;
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.dt = dt;
    this.x = this.x + this.speed * dt;

    if (this.x > 550) {
      // speed after each turn
      this.speed = 100 + Math.floor(Math.random() * 520);
      this.x = -100;
    }
    // collision detection, see https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    if (this.x + 60 > player.x && this.x < player.x + 60 && player.y < this.y + 25 && 30 + player.y > this.y) {
    // collision detected! set player position, add to death
      player.x = 200;
      player.y = 400;
      death += 1;
    }
    if (player.y < 0) {
          this.speed += 80 + Math.floor(Math.random() * 520);
    }
     else if (this.x > 500) {
      this.x = 0; //reset position
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function() {
  if (this.y < 0) {
    // return to position, add score, increase speed
    this.y = 400;
  }
  // keep the player in bounderies

};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function() {

  switch (event.keyCode) {
    // up
    case 38:
      this.y -= 85;
      console.log(`x: ${this.x}, y: ${this.y}`);
      break;
    // down
    case 40:
      this.y += 85;
      break;
    // left
    case 37:
      this.x -= 100;
      break;
    // right
    case 39:
      this.x += 100;
      break;
  }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


// expert level
var enemy1 = new Enemy(0, 220, 320);
var enemy2 = new Enemy(0, 140, 90);
var enemy3 = new Enemy(0, 60, 180);
var enemy4 = new Enemy(100, 60, 140);
var enemy5 = new Enemy(200, 220, 230);
var enemy6 = new Enemy(300, 60, 250);
var enemy7 = new Enemy(200, 60, 280);
const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7];
let player = new Player(200, 400, 50);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
