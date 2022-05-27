import { Fragment, useEffect, useRef, useState } from "react";
import classes from "./App.module.css";
import RightMenu from "./components/RightMenu";
import TopMenu from "./components/TopMenu";

function App() {
  const canvasRef = useRef();
  const contextRef = useRef();
  const [canvasBoundaries, setCanvasBoundaries] = useState({});

  const drawLine = () => {
    setCanvasBoundaries({
      x1: 200,
      y1: 200,
      x2: canvasRef.current.width - 450,
      y2: 200,
    });
    contextRef.current.beginPath();
    contextRef.current.moveTo(canvasBoundaries.x1, canvasBoundaries.y1);
    const pointsDistanceX = (canvasBoundaries.x2 - canvasBoundaries.x1) / 3;
    contextRef.current.bezierCurveTo(
      canvasBoundaries.x1 + pointsDistanceX,
      700,
      canvasBoundaries.x1 + pointsDistanceX * 2,
      700,
      canvasBoundaries.x2,
      canvasBoundaries.y2
    );
    contextRef.current.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");
    contextRef.current = context;
  }, []);

  const draw = (name) => {
    switch (name) {
      case "circle":
        drawCircle();
        break;
      case "square":
        drawSquare();
        break;
    }
  };

  const drawCircle = () => {
    contextRef.current.beginPath();
    contextRef.current.arc(100, 100, 10, 0, Math.PI * 2, false);
    contextRef.current.stroke();
  };

  const drawSquare = () => {
    contextRef.current.beginPath();
    contextRef.current.rect(200, 100, 20, 20);
    contextRef.current.stroke();
  };

  return (
    <Fragment>
      <TopMenu />
      <RightMenu />
      <canvas id="canvas" className={classes.canvas} ref={canvasRef}></canvas>
    </Fragment>
  );
}

export default App;
