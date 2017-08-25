import manager from '../gameManager';
import config from '../utils/config';

export default class extends Phaser.Scene {

  preload() {
    manager.increaseDeathCount();

    const loseText = 'ur ded !!1! lol';
    const desappointmentText = `You desappointed me ${manager.getDeathCount()} ${manager.getDeathCount() > 1 ? 'times' : 'time'}!`;

    const text1 = this.add.text(config.width * 0.5, config.height * 0.45, loseText).setFont('48px silkscreen').setFill(config.pixelColor);
    text1.setOrigin(0.5, 0.5);

    const text2 = this.add.text(config.width * 0.5, config.height * 0.54, desappointmentText).setFont('24px silkscreen').setFill(config.pixelColor);
    text2.setOrigin(0.5, 0.5);
    
    manager.restartPoints();

    setTimeout(() => this.scene.start('Game'), 1300);
  }
}
