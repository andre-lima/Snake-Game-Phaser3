import '../vendor/phaser';
import config from './utils/config';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';
import DeathScene from './scenes/DeathScene';

export default class Game extends Phaser.Game {
  constructor() {
    super(config)

    this.scene.add('Boot', BootScene, false);
    this.scene.add('Game', GameScene, false);
    this.scene.add('Death', DeathScene, false);

    this.scene.start('Boot');
  }

}
