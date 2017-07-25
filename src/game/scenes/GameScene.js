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
    const snakeStartingPosition = { x: 0, y: 10 * config.gridSize };
    const foodStartingPosition = { x: 10 * config.gridSize, y: 10 * config.gridSize };

    this.snake = new Snake(this, snakeStartingPosition.x, snakeStartingPosition.y);

    this.food = new Food(this,  foodStartingPosition.x, foodStartingPosition.y);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update(time, delta) {
    this.snake.update(delta * 0.001, this.cursors, this.food);
  }

  render() { }
}