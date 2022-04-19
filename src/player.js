export default class Player {
  constructor() {
    this.width = 30;
    this.height = 30;
    this.position = {
      x: 400,
      y: 500
    };

    this.speed = 0;
    this.speed1 = 0;
    this.maxSpeed = 5;
  }
  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
    this.speed1 = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
    this.speed1 = this.maxSpeed;
  }

  update() {
    this.position.x += this.speed;
  }

  reverse() {
    this.speed = -this.speed1;
    this.speed1 = this.speed;
  }
}
