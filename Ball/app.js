import Ball from "./ball.js";
import { Block } from "./block.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    // 3번째 인자는 이벤트 버블링이나 캡쳐링을 사용할건지에 대해 나타냄
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
    this.ball = new Ball(this.stageWidth, this.stageHeight, 30, 15);
    this.block = new Block(200, 30, 100, 450);
    this.block1 = new Block(500, 30, 400, 200);
    this.block2 = new Block(150, 30, 900, 400);
    this.block3 = new Block(150, 30, 700, 600);
    this.block4 = new Block(300, 30, 1200, 200);
    //백그라운드 동작 및 비활성화시 중지(성능 최적화)
    // 최대 1ms(1/1000s)로 제한되며 1초에 60번 동작
    //다수의 애니메이션에도 각각 타이머 값을 생성 및 참조하지 않고 내부의 동일한 타이머 참조
    // 안에는 반복할 함수
    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;

    this.stageHeight = document.body.clientHeight;
    //this.canvas.width = this.stageWidth;
    //this.canvas.height = this.stageHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }
  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.block.draw(this.ctx);
    this.block1.draw(this.ctx);
    this.block2.draw(this.ctx);
    this.block3.draw(this.ctx);
    this.block4.draw(this.ctx);
    this.ball.draw(
      this.ctx,
      this.stageWidth,
      this.stageHeight,
      this.block,
      this.block1,
      this.block2,
      this.block3,
      this.block4
    );
  }
}

window.onload = () => {
  new App();
};
