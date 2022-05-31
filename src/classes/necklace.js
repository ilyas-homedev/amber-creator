export default class Necklace {
  constructor(context, canvasBoundaries, settings) {
    this.context = context;
    this.canvasBoundaries = canvasBoundaries;
    this.settings = settings;
  }

  draw() {
    this.context.beginPath();
    this.context.moveTo(this.canvasBoundaries.x1, this.canvasBoundaries.y1);
    const pointsDistanceX =
      (this.canvasBoundaries.x2 - this.canvasBoundaries.x1) / 3;
    this.context.bezierCurveTo(
      this.canvasBoundaries.x1 + pointsDistanceX,
      700,
      this.canvasBoundaries.x1 + pointsDistanceX * 2,
      700,
      this.canvasBoundaries.x2,
      this.canvasBoundaries.y2
    );
    this.context.stroke();
  }
}
