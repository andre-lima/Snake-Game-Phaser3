import statsManager from '../managers/statsManager';
import config from '../utils/config';

export default class extends Phaser.Scene {

  preload() {
    statsManager.increaseDeathCount();

    const loseText = 'ur ded !!1! lol';
    const desappointmentText = `You desappointed me ${statsManager.getDeathCount()} ${statsManager.getDeathCount() > 1 ? 'times' : 'time'}!`;

    const text1 = this.add.text(config.width * 0.5, config.height * 0.45, loseText).setFont('40px silkscreen').setFill(config.pixelColor);
    text1.setOrigin(0.5, 0.5);

    const text2 = this.add.text(config.width * 0.5, config.height * 0.54, desappointmentText).setFont('20px silkscreen').setFill(config.pixelColor);
    text2.setOrigin(0.5, 0.5);
    
    statsManager.restartPoints();

    setTimeout(() => this.scene.start('Game'), 1300);
  }
}
