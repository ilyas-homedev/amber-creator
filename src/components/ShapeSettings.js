import classes from "./ShapeSettings.module.css";
import { useState } from "react";
import ColorItem from "./ColorItem";
import PreviewExample from "./PreviewExample";
import materials from "../data/materials";

function ShapeSettings(props) {
  const [sizeValue, setSizeValue] = useState(5);
  const [cornerRadiusValue, setCornerRadiusValue] = useState(0);

  const changeSize = (event) => {
    setSizeValue(event.target.value);
  };

  const changeCornerRadius = (event) => {
    setCornerRadiusValue(event.target.value);
  };

  return (
    <div className={classes.container}>
      <PreviewExample
        shape={props.shape}
        sizeValue={sizeValue}
        cornerRadiusValue={cornerRadiusValue}
      />
      <div className={classes.controls}>
        <div className={classes["colors-container"]}>
          {materials.map((material) => {
            return <ColorItem key={material.id} name={material.name} />;
          })}
        </div>
      </div>
      {(props.shape === "circle" || props.shape === "square") && (
        <div className={classes.controls}>
          <label htmlFor="size">Размер (2мм - 20мм): </label>
          <input
            type="number"
            id="size"
            min="2"
            max="20"
            value={sizeValue}
            onChange={changeSize}
          />
          <div className={classes.controls}>
            <span>2</span>
            <input
              type="range"
              id="size"
              className={classes.range}
              min="2"
              max="20"
              step="1"
              value={sizeValue}
              onChange={changeSize}
            />
            <span>20</span>
          </div>
        </div>
      )}
      {props.shape === "square" && (
        <div className={classes.controls}>
          <label htmlFor="size">Сглаживание углов: </label>
          <input
            type="number"
            id="corner"
            min="0"
            max="50"
            value={cornerRadiusValue}
            onChange={changeCornerRadius}
          />
          <div className={classes.controls}>
            <span>0%</span>
            <input
              type="range"
              id="corner"
              className={classes.range}
              min="0"
              max="50"
              step="1"
              value={cornerRadiusValue}
              onChange={changeCornerRadius}
            />
            <span>50%</span>
          </div>
        </div>
      )}
      <button className={classes["add-btn"]}></button>
    </div>
  );
}

export default ShapeSettings;
