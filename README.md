# Phaser 3 - Snake Game Remake
Remake of the Snake Game built with Phaser 3, using webpack and ES6 syntax.

## Inspiration
I wanted to learn Phaser, but the fact that v3 is supposed to be released soon, I thought it might me better to just start taking a look at it right now.

This game is simply a remake of the Richard's [tutorial game](https://phaser.io/phaser3/devlog/85) using a project structure strongly inpired by the [Webpack + ES6 boilerplate](https://github.com/lean/phaser-es6-webpack), although, the Webpack setup was created by myself.

## Major differences from Richard's version.

1. Project Structure
    * I'm using Webpack 3, compiling ES6 code.
    * Scenes (ex-states) are separated into a different folder and started when needed.
    * Snake, Food and some configuration variables is separated into different files.
  
2. Screen size
    * Screen width and height can be set in the ```config.js``` file and the whole game logic will adapt.

3. Class API
    * I favored using ES6 classes inheriting from  instead of the Phaser.Class syntax to create my components.

4. Random food placement
    * I changed the way the food is randomly placed on the screen.
  
---
### If you have any questions or suggestions, please let me know!
