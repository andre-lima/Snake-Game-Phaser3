import Phaser from '../../vendor/phaser';
import config from '../utils/config';
import food from '../components/Food/assets/food.gif';
import head from '../components/Snake/assets/head.gif';
import body from '../components/Snake/assets/body.gif';

export default class extends Phaser.Scene {

  preload() {
    this.load.image('food', food);
    this.load.image('head', head);
    this.load.image('body', body);

    const txt1 = 'Hungry';
    const txt2 = 'Retro';
    const txt3 = 'Pixel';
    const txt4 = 'Snake';

    this.add.text(config.width * 0.5, config.height * 0.30, txt1).setFont('64px silkscreen').setFill(config.pixelColor).setOrigin(0.5, 0.5);
    this.add.text(config.width * 0.5, config.height * 0.40, txt2).setFont('64px silkscreen').setFill(config.pixelColor).setOrigin(0.5, 0.5);
    this.add.text(config.width * 0.5, config.height * 0.50, txt3).setFont('64px silkscreen').setFill(config.pixelColor).setOrigin(0.5, 0.5);
    this.add.text(config.width * 0.5, config.height * 0.60, txt4).setFont('64px silkscreen').setFill(config.pixelColor).setOrigin(0.5, 0.5);
    this.add.text(config.width * 0.5, config.height * 0.80, 'loading...').setFont('30px silkscreen').setFill(config.pixelColor).setOrigin(0.5, 0.5);
    
    setTimeout(() => this.scene.start('Game'), 3000);
  }

}
