import Snake from '../components/Snake';
import Food from '../components/Food';
import food from '../components/Food/assets/food.png';
import head from '../components/Snake/assets/head.png';
import body from '../components/Snake/assets/body.png';
import config from '../utils/config';

export default class extends Phaser.Scene {
  init() { }

  preload() {
    this.load.image('food', food);
    this.load.image('head', head);
    this.load.image('body', body);
  }

  create() {
    const snakeStartingPosition = { x: 0, y: 1 * config.gridSize };
    const foodStartingPosition = { x: 0 * 3 * config.gridSize, y: 0 * config.gridSize };

    this.audioCTX = new AudioContext();

    this.snake = new Snake(this, snakeStartingPosition.x, snakeStartingPosition.y);

    this.food = new Food(this, foodStartingPosition.x, foodStartingPosition.y);

    this.cursors = this.input.keyboard.createCursorKeys();

    // Filling an object with each possible grid position on the game board
    this.initialValidGridPositions = {};
    this.currentValidGridPositions = {};
    for (let i = 0; i < Math.floor(config.height / config.gridSize); ++i) {
      for (let j = 0; j < Math.floor(config.width / config.gridSize); ++j) {
        this.initialValidGridPositions[j + i * Math.floor(config.width / config.gridSize)] = [j * config.gridSize, i * config.gridSize];
      }
    }
    
    this.resetValidGridPositions();
  }

  update(time, delta) {
    this.snake.update(delta * 0.001, this.cursors, this.food);
  }

  render() { }

  resetValidGridPositions() {
    this.currentValidGridPositions = { ...this.initialValidGridPositions };
  }

}
