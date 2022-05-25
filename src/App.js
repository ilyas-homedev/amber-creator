import { Fragment, useEffect, useRef } from "react";
import classes from "./App.module.css";
import RightMenu from "./components/RightMenu";
import TopMenu from "./components/TopMenu";

function App() {
  const canvasRef = useRef();
  const contextRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    drawLine();
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

  const drawLine = () => {
    contextRef.current.beginPath();
    contextRef.current.moveTo(300, 300);
    contextRef.current.bezierCurveTo(450, 700, 600, 700, 750, 300);
    contextRef.current.stroke();
  };

  return (
    <Fragment>
      <TopMenu />
      <RightMenu onDraw={draw} />
      <canvas id="canvas" className={classes.canvas} ref={canvasRef}></canvas>
    </Fragment>
  );
}

export default App;
