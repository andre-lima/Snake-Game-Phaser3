import '../vendor/phaser';
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

  //  Create our keyboard controls
  cursors = this.input.keyboard.createCursorKeys();
}

function update(time, delta) {
  snake.update(time, cursors);
}
