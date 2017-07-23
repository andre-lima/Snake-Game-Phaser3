import '../../../vendor/phaser';
import food from './assets/food.png';
import config from '../../utils/config';

export default class Food extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y);
    
    this.setTexture('food');
    this.setPosition(x, y);
    this.setOrigin(0);

    this.total = 0;

    scene.children.add(this);
  }
}