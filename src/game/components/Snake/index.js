import Phaser from '../../../vendor/phaser';
import direction from '../../utils/direction';
import './assets/head.gif';
import './assets/body.gif';
import config from '../../utils/config';
import sfx from '../../utils/audio';
import controllerManager from '../../managers/controllerManager';

export default class Snake {
  constructor(scene, x, y) {
    this.SPEED_INCREASE = 10;

    this.scene = scene;

    this.headPosition = new Phaser.Geom.Point(x, y);

    this.body = scene.add.group();

    this.head = this.body.create(x, y, 'head');
    this.head.setOrigin(0);

    this.tail = new Phaser.Geom.Point(x, y);

    this.body.create(this.tail.x, this.tail.y, 'body').setOrigin(0);
    this.body.create(this.tail.x, this.tail.y, 'body').setOrigin(0);
    this.body.create(this.tail.x, this.tail.y, 'body').setOrigin(0);

    this.alive = true;

    this.distanceIncrement = 0;
    this.speed = 150;
    this.maxSpeed = 450;
    this.moveTime = 0;

    this.heading = direction.RIGHT;
    this.direction = direction.RIGHT;

    this.cursors = this.scene.input.keyboard.createCursorKeys();

    controllerManager.bindController('up', this.faceUp.bind(this));
    controllerManager.bindController('down', this.faceDown.bind(this));
    controllerManager.bindController('left', this.faceLeft.bind(this));
    controllerManager.bindController('right', this.faceRight.bind(this));
  }

  update(delta, food) {
    if (!this.alive) {
      return;
    }

    this.move(delta, food);

    /**
    * Check which key is pressed, and then change the direction the snake
    * is heading based on that. The checks ensure you don't double-back
    * on yourself, for example if you're moving to the right and you press
    * the LEFT cursor, it ignores it, because the only valid directions you
    * can move in at that time is up and down.
    */
    if (this.cursors.left.isDown) {
      this.faceLeft();
    }
    else if (this.cursors.right.isDown) {
      this.faceRight();
    }
    else if (this.cursors.up.isDown) {
      this.faceUp();
    }
    else if (this.cursors.down.isDown) {
      this.faceDown();
    }
  }

  faceLeft() {
    if (this.direction === direction.UP || this.direction === direction.DOWN) {
      this.heading = direction.LEFT;
    }
  }

  faceRight() {
    if (this.direction === direction.UP || this.direction === direction.DOWN) {
      this.heading = direction.RIGHT;
    }
  }

  faceUp() {
    if (this.direction === direction.LEFT || this.direction === direction.RIGHT) {
      this.heading = direction.UP;
    }
  }

  faceDown() {
    if (this.direction === direction.LEFT || this.direction === direction.RIGHT) {
      this.heading = direction.DOWN;
    }
  }

  move(delta, food) {
    // Clamps the snake movement to 16px
    this.distanceIncrement += this.speed * delta;

    if (this.distanceIncrement < config.gridSize) {
      return true;
    }

    this.distanceIncrement = config.gridSize;

    /**
    * Based on the heading property (which is the direction the pgroup pressed)
    * we update the headPosition value accordingly.
    * 
    * The Math.wrap call allow the snake to wrap around the screen, so when
    * it goes off any of the sides it re-appears on the other.
    */
    switch (this.heading) {
      case direction.LEFT:
        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - this.distanceIncrement, 0, config.width);
        break;

      case direction.RIGHT:
        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + this.distanceIncrement, 0, config.width);
        break;

      case direction.UP:
        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - this.distanceIncrement, 0, config.height);
        break;

      case direction.DOWN:
        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + this.distanceIncrement, 0, config.height);
        break;

      default:
        break;
    }

    this.distanceIncrement = 0;

    this.direction = this.heading;

    //  Update the body segments
    this.body.shiftPosition(this.headPosition.x, this.headPosition.y, 1, this.tail);

    const hitBody = this.body.getFirst({ x: this.head.x, y: this.head.y }, 1);

    if (hitBody) {
      new Phaser.Sound.Dynamic.FX(this.scene.audioCTX, sfx.death);

      this.alive = false;

      this.scene.handleSnakeDeath();

      return false;
    }

    this.checkCollisionWithFood(food);

    return true;
  }

  grow() {
    new Phaser.Sound.Dynamic.FX(this.scene.audioCTX, sfx.eat);

    this.body.create(this.tail.x, this.tail.y, 'body').setOrigin(0);
    this.body.create(this.tail.x, this.tail.y, 'body').setOrigin(0);

    // Removes valid position after iterating the snake body parts position
    this.body.children.iterate((segment) => {
      const occupiedGridPosition = (segment.y / config.gridSize) * (config.width / config.gridSize) + (segment.x / config.gridSize);
      delete this.scene.currentValidGridPositions[occupiedGridPosition];
    });
  }

  checkCollisionWithFood(food) {
    if (this.head.x === food.x && this.head.y === food.y) {
      this.grow();

      food.wasEaten();

      //  For every 3 items of food eaten we'll increase the snake speed a little
      if (this.speed < this.maxSpeed && food.total % 3 === 0) {
        this.speed += this.SPEED_INCREASE;
      }

      return true;
    }
    else {
      return false;
    }
  }

}
