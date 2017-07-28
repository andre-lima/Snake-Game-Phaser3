import manager from '../gameManager';

export default class extends Phaser.Scene {

  preload() {
    manager.currentScene = 'death';
  }

  update() {
    console.log('DEATHHHHHH');
    //this.scene.start('Game');
  }

}
