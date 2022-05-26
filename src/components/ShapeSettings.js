import classes from "./ShapeSettings.module.css";
import { useState } from "react";
import ColorItem from "./ColorItem";

function ShapeSettings(props) {
  const colorTypes = [
    { id: "amber", name: "Янтарь" },
    { id: "stone", name: "Камень" },
    { id: "iron", name: "Металл" },
  ];
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
      <div className={classes.controls}>
        <div className={classes["colors-container"]}>
          {colorTypes.map((colorType) => {
            return <ColorItem key={colorType.id} name={colorType.name} />;
          })}
        </div>
      </div>
      <div className={classes.controls}>
        <label htmlFor="radiusValue">Радиус (2мм - 20мм): </label>
        <input
          type="number"
          id="radiusValue"
          min="2"
          max="20"
          value={radiusValue}
          onChange={changeRadius}
        />
        <div className={classes.controls}>
          <span>2</span>
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
          <span>20</span>
        </div>
      </div>
      <button className={classes["add-btn"]}></button>
    </div>
  );
}

export default ShapeSettings;
