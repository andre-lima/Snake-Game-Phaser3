import Snake from '../components/Snake';
import food from '../assets/food.png';
import body from '../assets/body.png';

export default class extends Phaser.Scene {
  init() { }

  preload() {
    this.load.image('food', food);
    this.load.image('body', body);
  }

  create() {
    this.snake = new Snake(this, 8, 8);

    //  Create our keyboard controls
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update(time, delta) {
    this.snake.update(time, this.cursors);
  }

  render() { }
}