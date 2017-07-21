import '../vendor/phaser';
import config from './utils/config';
import GameScene from './scenes/GameScene';

export default class Game extends Phaser.Game {
  constructor() {
    super(config)
    
    this.scene.add('Game', GameScene, false)
    this.scene.start('Game')
  }

}
