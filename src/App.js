import { Fragment, useEffect } from "react";
import classes from "./App.module.css";
import RightMenu from "./components/RightMenu";

function App() {
  useEffect(() => {
    const canvas = document.querySelector("#canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");
  }, []);

  return (
    <Fragment>
      <RightMenu />
      <canvas id="canvas" className={classes.canvas}></canvas>
    </Fragment>
  );
}

export default App;
