export default class Necklace {
  constructor(context, coords, settings) {
    this.context = context;
    this.coords = coords;
    this.settings = settings;
  }

  draw() {
    this.context.beginPath();
    this.context.moveTo(this.coords.x1, this.coords.y1);
    this.context.bezierCurveTo(
      this.coords.px1,
      this.coords.py1,
      this.coords.px2,
      this.coords.py2,
      this.coords.x2,
      this.coords.y2
    );
    this.context.stroke();
  }

  // Return coordinates of point (t) (t - percent from the length (0-1));
  takeCoordsOf(t) {
    return {
      x:
        Math.pow(1 - t, 3) * this.coords.x1 +
        3 * t * Math.pow(1 - t, 2) * this.coords.px1 +
        3 * t * t * (1 - t) * this.coords.px2 +
        t * t * t * this.coords.x2,
      y:
        Math.pow(1 - t, 3) * this.coords.y1 +
        3 * t * Math.pow(1 - t, 2) * this.coords.py1 +
        3 * t * t * (1 - t) * this.coords.py2 +
        t * t * t * this.coords.y2,
    };
  }
}
