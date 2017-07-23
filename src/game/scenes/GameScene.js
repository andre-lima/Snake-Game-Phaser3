import Snake from '../components/Snake';
import Food from '../components/Food';
import food from '../components/Food/assets/food.png';
import body from '../components/Snake/assets/body.png';
import config from '../utils/config';

export default class extends Phaser.Scene {
  init() { }

  preload() {
    this.load.image('food', food);
    this.load.image('body', body);
  }

  create() {
    this.snake = new Snake(this, config.gridSize, config.height * 0.5);
    
    this.food = new Food(this, config.width - 10 * config.gridSize, config.height * 0.5);

    //  Create our keyboard controls
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update(time, delta) {
    this.snake.update(delta * 0.001, this.cursors);
  }

  render() { }
}