import './phaser';
import food from './game/assets/food.png';
import body from './game/assets/body.png';

let config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    backgroundColor: '#bfcc00',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('food', food);
    this.load.image('body', body);
}

function create ()
{
}

function update (time, delta)
{
}

console.log(game);