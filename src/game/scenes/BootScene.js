import Phaser from '../../vendor/phaser';
import food from '../components/Food/assets/food.gif';
import head from '../components/Snake/assets/head.gif';
import body from '../components/Snake/assets/body.gif';

export default class extends Phaser.Scene {

  preload() {
    this.load.image('food', food);
    this.load.image('head', head);
    this.load.image('body', body);
  }

  update() { 
     this.scene.start('Game');
  }

}
