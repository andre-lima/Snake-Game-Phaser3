import manager from '../gameManager';
import config from '../utils/config';

export default class extends Phaser.Scene {

  preload() {
    manager.restartPoints();
    const text = this.add.text(config.width * 0.5, config.height * 0.5, 'You\'re ded!').setFont('48px silkscreen').setFill(config.textColor);
    text.setOrigin(0.5, 0.5);

    setTimeout(() => this.scene.start('Game'), 1000);
  }
}
