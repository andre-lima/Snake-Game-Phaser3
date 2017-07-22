import Snake from '../components/Snake';
import food from '../assets/food.png';
import body from '../components/Snake/assets/body.png';

export default class extends Phaser.Scene {
  init() { }

  preload() {
    this.load.image('food', food);
    this.load.image('body', body);
  }

  create() {
    this.snake = new Snake(this, 100, 100);

    //  Create our keyboard controls
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update(time, delta) {
    this.snake.update(delta * 0.001, this.cursors);
  }

  render() { }
}