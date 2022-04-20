class App {
  constructor() {
    // 켄배스 추가
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    // 스크린 사이즈 가져오기
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    // 캔버스 사이즈 두배로 해서 레티나 디스플레이에서도 선명하게 보이게함
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  animate(t) {
    requestAnimationFrame(this.animate.bind(this));
    // 캔버스 지우는 코드
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
  }
}

window.onload = () => {
  new App();
};
