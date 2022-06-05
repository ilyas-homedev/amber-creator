import classes from "./TypeSettings.module.css";
import { useState } from "react";
import { PX_IN_MM } from "../data/pixelsInMillimeter";

function TypeSettings(props) {
  const [typeLengthValue, setTypeLengthValue] = useState(40);
  const [typeSizehValue, setTypeSizeValue] = useState(50);

  const changeTypeLength = (event) => {
    setTypeLengthValue(event.target.value);
  };

  const changeTypeSize = (event) => {
    setTypeSizeValue(event.target.value);
  };

  const addTypeHandler = () => {
    const currentTypeSettings = {
      type: props.type,
      length: typeLengthValue * 10 * PX_IN_MM,
      size: typeSizehValue * PX_IN_MM,
    };

    props.onApplyTypeSettings(currentTypeSettings);
  };

  return (
    <div className={classes["settings-container"]}>
      {(props.type === "necklace" || props.type === "line") && (
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
      <button className={classes["add-btn"]} onClick={addTypeHandler}></button>
    </div>
  );
}

export default TypeSettings;
