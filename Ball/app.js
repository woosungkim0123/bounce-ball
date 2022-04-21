import { Ball } from "./ball";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    // 3번째 인자는 이벤트 버블링이나 캡쳐링을 사용할건지에 대해 나타냄
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }
  animate(t) {
    requestAnimationFrame(this.animate.bind(this));

    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
  }
}

window.onload = () => {
  new App();
};
