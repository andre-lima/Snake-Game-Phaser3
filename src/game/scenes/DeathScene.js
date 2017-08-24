import manager from '../gameManager';
import config from '../utils/config';

export default class extends Phaser.Scene {

  preload() {
    const deathText = `ur ded !!1! lol`

    manager.restartPoints();
    const text = this.add.text(config.width * 0.5, config.height * 0.5, deathText).setFont('48px silkscreen').setFill(config.textColor);
    text.setOrigin(0.5, 0.5);

    setTimeout(() => this.scene.start('Game'), 1000);
  }
}
