export default class Bracelet {
  constructor(canvas, context, settings) {
    this.canvas = canvas;
    this.context = context;
    this.settings = settings;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(
      this.canvas.width / 2,
      this.canvas.height / 2,
      300,
      0,
      Math.PI * 2,
      false
    );
    this.context.stroke();
  }
}
