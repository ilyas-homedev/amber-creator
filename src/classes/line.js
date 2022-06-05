export default class Line {
  constructor(canvas, context, settings) {
    this.canvas = canvas;
    this.context = context;
    this.settings = settings;
  }

  draw() {
    this.context.beginPath();
    this.context.moveTo(100, this.canvas.height / 2 + 50);
    this.context.lineTo(800, this.canvas.height / 2 + 50);
    this.context.stroke();
  }
}
