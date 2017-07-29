import Phaser from '../../vendor/phaser';
import Snake from '../components/Snake';
import Food from '../components/Food';

import config from '../utils/config';
import manager from '../gameManager';

export default class extends Phaser.Scene {

  preload() {
    manager.currentScene = 'game';
  }

  create() {
    const snakeStartingPosition = { x: 0, y: 10 * config.gridSize };
    this.snake = new Snake(this, snakeStartingPosition.x, snakeStartingPosition.y);

    const foodStartingPosition = { x: 30 * config.gridSize, y: 10 * config.gridSize };
    this.food = new Food(this, foodStartingPosition.x, foodStartingPosition.y);

    this.audioCTX = new AudioContext();

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

  handleSnakeDeath() {
    manager.numberOfDeaths++;

    // this.text = this.add.group();
    // this.text.create(config.width * 0.5, config.height * 0.5, 'text').setOrigin(0.5);
    
    this.scene.start('Death');
  }

  getRandomValidGridPosition() {
    const validPosition = this.randomValidPosition(this.currentValidGridPositions);
    this.resetValidGridPositions();

    return validPosition
  }

  resetValidGridPositions() {
    this.currentValidGridPositions = { ...this.initialValidGridPositions };
  }

  randomValidPosition(obj) {
    var keys = Object.keys(obj)
    return obj[keys[keys.length * Math.random() << 0]];
  }

}
