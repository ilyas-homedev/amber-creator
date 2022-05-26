import classes from "./ShapeSettings.module.css";
import { useState } from "react";

function ShapeSettings(props) {
  const PX_IN_MM = 3.7795275591;
  const [radiusValue, setRadiusValue] = useState(5);

  const changeRadius = (event) => {
    setRadiusValue(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.preview}>
        <div
          className={classes.example}
          style={{
            height: radiusValue * PX_IN_MM,
            width: radiusValue * PX_IN_MM,
          }}
        ></div>
      </div>
      <label htmlFor="radiusValue">Радиус (2мм - 20мм): </label>
      <input
        type="number"
        id="radiusValue"
        min="2"
        max="20"
        value={radiusValue}
        onChange={changeRadius}
      />
      <input
        type="range"
        id="radius"
        className={classes.radius}
        min="2"
        max="20"
        step="1"
        value={radiusValue}
        onChange={changeRadius}
      />
      <button className={classes["add-btn"]}></button>
    </div>
  );
}

export default ShapeSettings;
