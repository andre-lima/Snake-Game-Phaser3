import Phaser from '../../vendor/phaser';
import food from '../components/Food/assets/food.png';
import head from '../components/Snake/assets/head.png';
import body from '../components/Snake/assets/body.png';
import text from '../assets/death-text.png';

import manager from '../gameManager';

export default class extends Phaser.Scene {

  preload() {
    this.load.image('food', food);
    this.load.image('head', head);
    this.load.image('body', body);
    this.load.image('text', text);
    
    manager.currentScene = 'boot';
  }

  update() { 
     this.scene.start('Game');
  }

}
