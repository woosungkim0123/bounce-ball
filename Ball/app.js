import Ball from "./ball.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    console.log(this.canvas.width);

    // 3번째 인자는 이벤트 버블링이나 캡쳐링을 사용할건지에 대해 나타냄
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
    console.log(this.stageWidth);
    console.log(this.canvas.width);
    this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);
    //백그라운드 동작 및 비활성화시 중지(성능 최적화)
    // 최대 1ms(1/1000s)로 제한되며 1초에 60번 동작
    //다수의 애니메이션에도 각각 타이머 값을 생성 및 참조하지 않고 내부의 동일한 타이머 참조
    // 안에는 반복할 함수
    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;

    this.stageHeight = document.body.clientHeight;
    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;
    /*
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
    */
  }
  animate(t) {
    requestAnimationFrame(this.animate.bind(this));

    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
  }
}

window.onload = () => {
  new App();
};
