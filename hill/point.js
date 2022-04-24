export class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;

    this.speed = 0.1;
    this.cur = index;
    // 얼만큼 움직일 것인가
    //this.max = Math.random() * 100 + 150;
    this.max = 0.5 * 100 + 150;
  }

  update() {
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}
