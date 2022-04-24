import { Point } from "./point.js";

export class Wave {
  constructor(index, totalPoints, color) {
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  init() {
    //this.point = []; 필요함?
    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(this.index + i, this.pointGap * i, this.centerY);

      this.points[i] = point;
    }
    console.log(this.points);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    for (let i = 0; i < this.totalPoints; i++) {
      if (i < this.totalPoints - 1) {
        this.points[i].update();
      }

      const cx = prevX + this.points[i].x / 2;
      const cy = prevY + this.points[i].y / 2;
      console.log(cy);
      ctx.lineTo(cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);

    ctx.lineTo(this.points[0].x, this.stageHeight);
    //console.log(this.stageWidth, this.stageHeight, prevY);
    // 1920 937 468.5
    ctx.fill();
    ctx.closePath();
  }
}
