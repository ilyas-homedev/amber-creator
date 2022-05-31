import { Fragment, useEffect, useRef, useState } from "react";
import classes from "./App.module.css";
import RightMenu from "./components/RightMenu";
import TopMenu from "./components/TopMenu";
import { useSelector, useDispatch } from "react-redux";
import { mouseActions } from "./store/store";

function App() {
  const canvasRef = useRef();
  const contextRef = useRef();
  const [canvasBoundaries, setCanvasBoundaries] = useState({});

  const dispatch = useDispatch();
  const mouse = useSelector((state) => state);

  const drawLine = (type) => {
    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    setCanvasBoundaries({
      x1: 200,
      y1: 200,
      x2: canvasRef.current.width - 450,
      y2: 200,
    });

    switch (type) {
      case "necklace":
        drawNecklace(type.settings);
        break;
      case "bracelet":
        drawBracelet(type.settings);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");
    contextRef.current = context;
    // mouseMove();
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

  const drawNecklace = (settings) => {
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

  const drawBracelet = (settings) => {
    contextRef.current.beginPath();
    contextRef.current.arc(
      canvasRef.current.width / 2,
      canvasRef.current.height / 2,
      300,
      0,
      Math.PI * 2,
      false
    );
    contextRef.current.stroke();
  };

  const handleMouseMove = (event) => {
    dispatch(
      mouseActions.setCoords({ mouseX: event.clientX, mouseY: event.clientY })
    );

    console.log(mouse.x, mouse.y);
  };

  return (
    <Fragment>
      <TopMenu onChooseType={drawLine} />
      <RightMenu onChooseShape={draw} />
      <canvas
        id="canvas"
        className={classes.canvas}
        ref={canvasRef}
        onMouseMove={handleMouseMove}
      ></canvas>
    </Fragment>
  );
}

export default App;
