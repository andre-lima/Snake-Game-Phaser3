import manager from '../gameManager';
import config from '../utils/config';

export default class extends Phaser.Scene {

  preload() {
    this.text = this.add.group();
    this.text.create(config.width * 0.5, config.height * 0.5, 'text').setOrigin(0.5);

    manager.restartPoints();

    setTimeout(() => this.scene.start('Game'), 1000);
  }
}
