import '../../../vendor/phaser';
import food from './assets/food.png';
import config from '../../utils/config';

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

    const randomPosition = this.randomValidPosition(this.scene.currentValidGridPositions);
    this.setPosition(randomPosition[0], randomPosition[1]);

    //Reseting valid positions
    this.scene.resetValidGridPositions();
  }

  randomValidPosition(obj) {
    var keys = Object.keys(obj)
    return obj[keys[keys.length * Math.random() << 0]];
  }
}