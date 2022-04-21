import { Hill } from "./hill.js";

class App {
  constructor() {
    // 켄배스 추가
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.hills = [
      new Hill("#fd6bea", 0.2, 12),
      new Hill("#ff59c2", 0.5, 8),
      new Hill("#ff4674", 1.4, 6),
    ];

    // 스크린 사이즈 가져오기
    //window.addEventListener("resize", this.resize.bind(this), false);
    //this.resize();

    //requestAnimationFrame(this.animate.bind(this));
  }

  /*resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    // 캔버스 사이즈 두배로 해서 레티나 디스플레이에서도 선명하게 보이게함
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    for (let i = 0; i < this.hills.length; i++) {
      this.hills[i].resize(this.stageWidth, this.stageHeight);
    }
  }*/
  /*
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    // 캔버스 지우는 코드
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    let dots;
    for (let i = 0; i < this.hills.length; i++) {
      dots = this.hills[i].draw(this.ctx);
    }
  }*/
}

window.onload = () => {
  new App();
};
