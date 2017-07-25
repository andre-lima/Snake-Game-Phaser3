import direction from '../../utils/direction';
import body from './assets/body.png';
import config from '../../utils/config';

export default class Snake {
  constructor(scene, x, y) {
    this.headPosition = new Phaser.Geom.Point(x, y);
    this.distanceIncrement = 0;

    this.body = scene.add.group();

    this.head = this.body.create(x, y, 'body');

    this.head.setOrigin(0);

    this.tail = new Phaser.Geom.Point(x, y);

    this.alive = true;

    this.speed = 150;
    this.maxSpeed = 400;

    this.moveTime = 0;

    this.heading = direction.RIGHT;
    this.direction = direction.RIGHT;
  }

  update(delta, cursors, food) {
    this.move(delta, food);

    if (!this.alive) {
      return;
    }

    /**
    * Check which key is pressed, and then change the direction the snake
    * is heading based on that. The checks ensure you don't double-back
    * on yourself, for example if you're moving to the right and you press
    * the LEFT cursor, it ignores it, because the only valid directions you
    * can move in at that time is up and down.
    */
    if (cursors.left.isDown) {
      this.faceLeft();
    }
    else if (cursors.right.isDown) {
      this.faceRight();
    }
    else if (cursors.up.isDown) {
      this.faceUp();
    }
    else if (cursors.down.isDown) {
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
    }

    this.distanceIncrement = 0;

    this.direction = this.heading;

    //  Update the body segments
    this.body.shiftPosition(this.headPosition.x, this.headPosition.y, 1, this.tail);

    this.checkCollisionWithFood(food);

    return true;
  }

  grow() {
    var newBodyPiece = this.body.create(this.tail.x, this.tail.y, 'body');
    newBodyPiece.setOrigin(0);
  }

  checkCollisionWithFood(food) {
    if (this.head.x === food.x && this.head.y === food.y) {
      this.grow();

      food.wasEaten();

      //  For every 3 items of food eaten we'll increase the snake speed a little
      if (this.speed < this.maxSpeed && food.total % 3 === 0) {
        this.speed += 10;
      }

      return true;
    }
    else {
      return false;
    }
  }

}
