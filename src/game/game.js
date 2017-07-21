import './phaser';
import Snake from './classes/Snake';
import food from './assets/food.png';
import body from './assets/body.png';

let config = {
  type: Phaser.WEBGL,
  width: 640,
  height: 480,
  backgroundColor: '#bfcc00',
  parent: 'root',
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};


let snake;
let cursors;

var game = new Phaser.Game(config);

export default game;

function preload() {
  this.load.image('food', food);
  this.load.image('body', body);
}

function create() {
  snake = new Snake(this, 8, 8);
  console.log(snake);

  //  Create our keyboard controls
  cursors = this.input.keyboard.createCursorKeys();
}

function update(time, delta) {
  if (!snake.alive) {
    return;
  }

  /**
  * Check which key is pressed, and then change the direction the snake
  * is heading based on that. The checks ensure you don't double-back
  * on yourself, for example if you're moving to the right and you press
  * the LEFT cursor, it ignores it, because the only valid directions you
  * can move in at that time is up and down.
  */
  if (cursors.left.isDown) {
    snake.faceLeft();
  }
  else if (cursors.right.isDown) {
    snake.faceRight();
  }
  else if (cursors.up.isDown) {
    snake.faceUp();
  }
  else if (cursors.down.isDown) {
    snake.faceDown();
  }

  snake.update(time);
}