import '../../../vendor/phaser';
import food from './assets/food.png';
import config from '../../utils/config';
import manager from '../../gameManager';

export default class Food extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.scene = scene;

    this.setTexture('food');
    this.setPosition(x, y);
    this.setOrigin(0);

    this.total = 0;

    scene.children.add(this);
  }

  wasEaten() {
    this.total++;
    
    manager.currentPoints = this.total;
    manager.totalPoints++;

    const validPosition = this.scene.getRandomValidGridPosition();
    this.setPosition(validPosition[0], validPosition[1]);
  }

}