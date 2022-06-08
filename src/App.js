import { Fragment, useEffect, useRef, useState } from "react";
import classes from "./App.module.css";
import RightMenu from "./components/RightMenu";
import TopMenu from "./components/TopMenu";
import { useSelector, useDispatch } from "react-redux";
import { mouseActions, shapeActions, typeActions } from "./store/store";
import Necklace from "./classes/necklace";
import Bracelet from "./classes/bracelet";
import Line from "./classes/line";
import usePan from "./hooks/usePan";
import useScale from "./hooks/useScale";

function App() {
  const canvasRef = useRef();
  const contextRef = useRef();
  const [necklace, setNecklace] = useState(null);
  const [necklaceCoords, setNeckalceCoords] = useState({});

  // mouse pan and canvas zooming
  const [offset, startPan] = usePan();
  const scale = useScale(canvasRef);

  const dispatch = useDispatch();
  const mouse = useSelector((state) => state.mouse);
  const shapesArray = useSelector((state) => state.shapes);
  const type = useSelector((state) => state.type);

  // console.log(type);

  const drawLine = (typeSettings) => {
    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    switch (typeSettings.type) {
      case "necklace":
        drawNecklace(necklaceCoords, typeSettings);
        break;
      case "bracelet":
        drawBracelet(typeSettings);
        break;
      case "line":
        drawLineType(typeSettings);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;
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

  const draw = (shapeSettings) => {
    switch (shapeSettings.shape) {
      case "circle":
        drawCircle(shapeSettings);
        break;
      case "square":
        drawSquare(shapeSettings);
        break;
      default:
        break;
    }
  };

  const drawCircle = (settings) => {
    const necklaceMiddle = necklace.takeCoordsOf(0.5);
    contextRef.current.beginPath();

    const circleObj = {
      id: settings.shape + `_${Math.floor(Math.random() * 10000)}`,
      x: necklaceMiddle.x,
      y: necklaceMiddle.y,
      radius: settings.sizeValue / 2,
      startPoint: 0,
      endPoint: Math.PI * 2,
      clockWise: false,
    };

    contextRef.current.arc(
      circleObj.x,
      circleObj.y,
      circleObj.radius,
      circleObj.startPoint,
      circleObj.endPoint,
      circleObj.clockWise
    );
    contextRef.current.stroke();

    dispatch(shapeActions.addShapeToTheLeft({ shape: circleObj }));
  };

  const drawSquare = (settings) => {
    contextRef.current.beginPath();
    contextRef.current.rect(200, 100, settings.sizeValue, settings.sizeValue);
    contextRef.current.stroke();
  };

  const drawNecklace = (coords, settings) => {
    const necklace = new Necklace(contextRef.current, coords, settings);
    necklace.draw();
    setNecklace(necklace);

    const necklaceObject = {
      ...coords,
      ...settings,
    };
    dispatch(typeActions.createType({ type: necklaceObject }));
  };

  const drawBracelet = (settings) => {
    const bracelet = new Bracelet(
      canvasRef.current,
      contextRef.current,
      settings
    );
    bracelet.draw();
  };

  const drawLineType = (settings) => {
    const line = new Line(canvasRef.current, contextRef.current, settings);
    line.draw();
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
        onMouseDown={startPan}
      ></canvas>
      <div className={classes["zoom-data"]}>
        <span>{JSON.stringify(offset)}</span>
        <span>{scale}</span>
      </div>
    </Fragment>
  );
}

export default App;
