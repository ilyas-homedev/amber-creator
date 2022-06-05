import classes from "./TypeSettings.module.css";
import { useState } from "react";

function TypeSettings(props) {
  const [typeLengthValue, setTypeLengthValue] = useState(40);
  const [typeSizehValue, setTypeSizeValue] = useState(50);

  const changeTypeLength = (event) => {
    setTypeLengthValue(event.target.value);
  };

  const changeTypeSize = (event) => {
    setTypeSizeValue(event.target.value);
  };

  return (
    <div className={classes["settings-container"]}>
      {props.type === "necklace" && (
        <div className={classes["controls-pair"]}>
          <div className={classes.controls}>
            <label htmlFor="type-length">Длина (см): </label>
            <input
              type="number"
              id="type-length"
              min="20"
              max="50"
              value={typeLengthValue}
              onChange={changeTypeLength}
            />
          </div>
          <div className={classes.controls}>
            <span>20</span>
            <input
              type="range"
              id="type-length"
              className={classes.range}
              min="20"
              max="50"
              step="1"
              value={typeLengthValue}
              onChange={changeTypeLength}
            />
            <span>50</span>
          </div>
        </div>
      )}
      {props.type === "bracelet" && (
        <div className={classes["controls-pair"]}>
          <div className={classes.controls}>
            <label htmlFor="type-size">Размер (мм): </label>
            <input
              type="number"
              id="type-size"
              min="50"
              max="100"
              value={typeSizehValue}
              onChange={changeTypeSize}
            />
          </div>
          <div className={classes.controls}>
            <span>50</span>
            <input
              type="range"
              id="type-size"
              className={classes.range}
              min="50"
              max="100"
              step="1"
              value={typeSizehValue}
              onChange={changeTypeSize}
            />
            <span>100</span>
          </div>
        </div>
      )}
      <button className={classes["add-btn"]} onClick={() => {}}></button>
    </div>
  );
}

export default TypeSettings;
