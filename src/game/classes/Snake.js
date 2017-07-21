import direction from '../utils/direction';

let Snake = new Phaser.Class({

  initialize: function Snake(scene, x, y) {
    this.headPosition = new Phaser.Geom.Point(x, y);

    this.body = scene.add.group();

    this.head = this.body.create(x * 16, y * 16, 'body');
    this.head.setOrigin(0);

    this.alive = true;

    this.speed = 100;

    this.moveTime = 0;

    this.heading = direction.RIGHT;
    this.direction = direction.RIGHT;
  },

  update: function (time) {
    if (time >= this.moveTime) {
      return this.move(time);
    }
  },

  faceLeft: function () {
    if (this.direction === direction.UP || this.direction === direction.DOWN) {
      this.heading = direction.LEFT;
    }
  },

  faceRight: function () {
    if (this.direction === direction.UP || this.direction === direction.DOWN) {
      this.heading = direction.RIGHT;
    }
  },

  faceUp: function () {
    if (this.direction === direction.LEFT || this.direction === direction.RIGHT) {
      this.heading = direction.UP;
    }
  },

  faceDown: function () {
    if (this.direction === direction.LEFT || this.direction === direction.RIGHT) {
      this.heading = direction.DOWN;
    }
  },

  move: function (time) {
    /**
    * Based on the heading property (which is the direction the pgroup pressed)
    * we update the headPosition value accordingly.
    * 
    * The Math.wrap call allow the snake to wrap around the screen, so when
    * it goes off any of the sides it re-appears on the other.
    */
    switch (this.heading) {
      case direction.LEFT:
        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, 40);
        break;

      case direction.RIGHT:
        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, 40);
        break;

      case direction.UP:
        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, 30);
        break;

      case direction.DOWN:
        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, 30);
        break;
    }

    this.direction = this.heading;

    //  Update the body segments
    this.body.shiftPosition(this.headPosition.x * 16, this.headPosition.y * 16, 1);

    //  Update the timer ready for the next movement
    this.moveTime = time + this.speed;

    return true;
  }

});

export default Snake;