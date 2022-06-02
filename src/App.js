import { Fragment, useEffect, useRef, useState } from "react";
import classes from "./App.module.css";
import RightMenu from "./components/RightMenu";
import TopMenu from "./components/TopMenu";
import { useSelector, useDispatch } from "react-redux";
import { mouseActions } from "./store/store";
import Necklace from "./classes/necklace";
import Bracelet from "./classes/bracelet";

function App() {
  const canvasRef = useRef();
  const contextRef = useRef();
  const [necklace, setNecklace] = useState(null);
  const [necklaceCoords, setNeckalceCoords] = useState({});

  const dispatch = useDispatch();
  const mouse = useSelector((state) => state);

  const drawLine = (type) => {
    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    switch (type) {
      case "necklace":
        drawNecklace(necklaceCoords, type.settings);
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

    const x1 = 200;
    const y1 = 300;
    const x2 = canvasRef.current.width - 450;
    const y2 = y1;
    const pointsDistanceX = (x2 - x1) / 3;
    const px1 = x1 + pointsDistanceX;
    const py1 = 700;
    const px2 = x1 + pointsDistanceX * 2;
    const py2 = 700;

    setNeckalceCoords({
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      px1: px1,
      py1: py1,
      px2: px2,
      py2: py2,
    });
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

  const drawNecklace = (coords, settings) => {
    const necklace = new Necklace(contextRef.current, coords, settings);
    necklace.draw();
    setNecklace(necklace);
    const middle = necklace.takeCoordsOf(0.5);
    console.log("middle", middle);
  };

  const drawBracelet = (settings) => {
    const bracelet = new Bracelet(
      canvasRef.current,
      contextRef.current,
      settings
    );
    bracelet.draw();
  };

  const handleMouseMove = (event) => {
    dispatch(
      mouseActions.setCoords({ mouseX: event.clientX, mouseY: event.clientY })
    );
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
