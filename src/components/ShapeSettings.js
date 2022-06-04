import classes from "./ShapeSettings.module.css";
import { Fragment, useState } from "react";
import PreviewExample from "./PreviewExample";
import Materials from "./Materials";
import { PX_IN_MM } from "../data/pixelsInMillimeter";

function ShapeSettings(props) {
  const [materialsOn, setMaterialsOn] = useState(false);
  const [sizeValue, setSizeValue] = useState(5);
  const [cornerRadiusValue, setCornerRadiusValue] = useState(0);
  const [widthValue, setWidthValue] = useState(10);
  const [heightValue, setHeightValue] = useState(10);
  // Custom corners
  const [topLeftCornerValue, setTopLeftCornerValue] = useState(0);
  const [topRightCornerValue, setTopRightCornerValue] = useState(0);
  const [bottomLeftCornerValue, setBottomLeftCornerValue] = useState(0);
  const [bottomRightCornerValue, setBottomRightCornerValue] = useState(0);

  const changeSize = (event) => {
    setSizeValue(event.target.value);
  };

  const changeCornerRadius = (event) => {
    setCornerRadiusValue(event.target.value);
  };

  const toggleMaterials = () => {
    setMaterialsOn((prev) => !prev);
  };

  const changeWidthValue = (event) => {
    setWidthValue(event.target.value);
  };

  const changeHeightValue = (event) => {
    setHeightValue(event.target.value);
  };

  // Custom corners handlers
  const changeTopLeftCorner = (event) => {
    setTopLeftCornerValue(event.target.value);
  };

  const changeTopRightCorner = (event) => {
    setTopRightCornerValue(event.target.value);
  };

  const changeBottomLeftCorner = (event) => {
    setBottomLeftCornerValue(event.target.value);
  };

  const changeBottomRightCorner = (event) => {
    setBottomRightCornerValue(event.target.value);
  };

  // Add shape button
  const addShapeHandler = () => {
    const currentSHapeSettings = {
      shape: props.shape,
      sizeValue: sizeValue * PX_IN_MM,
      cornerRadiusValue: cornerRadiusValue,
      widthValue: widthValue * PX_IN_MM,
      heightValue: heightValue * PX_IN_MM,
      topLeftCornerValue: topLeftCornerValue,
      topRightCornerValue: topRightCornerValue,
      bottomLeftCornerValue: bottomLeftCornerValue,
      bottomRightCornerValue: bottomRightCornerValue,
    };

    props.onApplyShapeSettings(currentSHapeSettings);
  };

  return (
    <div className={classes.container}>
      <PreviewExample
        shape={props.shape}
        sizeValue={sizeValue}
        cornerRadiusValue={cornerRadiusValue}
        topLeftCornerValue={topLeftCornerValue}
        topRightCornerValue={topRightCornerValue}
        bottomLeftCornerValue={bottomLeftCornerValue}
        bottomRightCornerValue={bottomRightCornerValue}
        widthValue={widthValue}
        heightValue={heightValue}
      />
      <div className={classes.controls}>
        <button className={classes["material-btn"]} onClick={toggleMaterials}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={materialsOn ? classes["arrow-animation"] : ""}
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Материал
        </button>
        {materialsOn && <Materials />}
      </div>
      {(props.shape === "circle" || props.shape === "square") && (
        <div className={classes["controls-pair"]}>
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
          </div>
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
      {props.shape === "custom" && (
        <div className={classes["controls-pair"]}>
          <div className={classes.controls}>
            <label htmlFor="width">Ширина: </label>
            <input
              type="number"
              id="width"
              min="2"
              max="20"
              value={widthValue}
              onChange={changeWidthValue}
            />
          </div>
          <div className={classes.controls}>
            <span>2</span>
            <input
              type="range"
              id="width"
              className={classes.range}
              min="2"
              max="20"
              step="1"
              value={widthValue}
              onChange={changeWidthValue}
            />
            <span>20</span>
          </div>
        </div>
      )}
      {props.shape === "custom" && (
        <div className={classes["controls-pair"]}>
          <div className={classes.controls}>
            <label htmlFor="height">Высота: </label>
            <input
              type="number"
              id="height"
              min="2"
              max="20"
              value={heightValue}
              onChange={changeHeightValue}
            />
          </div>
          <div className={classes.controls}>
            <span>2</span>
            <input
              type="range"
              id="height"
              className={classes.range}
              min="2"
              max="20"
              step="1"
              value={heightValue}
              onChange={changeHeightValue}
            />
            <span>20</span>
          </div>
        </div>
      )}
      {props.shape === "square" && (
        <div className={classes["controls-pair"]}>
          <div className={classes.controls}>
            <label htmlFor="corners">Сглаживание углов: </label>
            <input
              type="number"
              id="corners"
              min="0"
              max="50"
              value={cornerRadiusValue}
              onChange={changeCornerRadius}
            />
          </div>
          <div className={classes.controls}>
            <span>0%</span>
            <input
              type="range"
              id="corners"
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

      {props.shape === "custom" && (
        <Fragment>
          <p className={classes["custom-corners-header"]}>
            Сглаживание углов по отдельности
          </p>
          <div className={classes["custom-corners-container"]}>
            <div className={classes["controls-pair"]}>
              <div className={classes.controls}>
                <label htmlFor="topLeftCorner">Верх. Л.: </label>
                <input
                  type="number"
                  id="topLeftCorner"
                  min="0"
                  max="100"
                  value={topLeftCornerValue}
                  onChange={changeTopLeftCorner}
                />
              </div>
              <div className={classes.controls}>
                <span>0%</span>
                <input
                  type="range"
                  id="topLeftCorner"
                  min="0"
                  max="100"
                  step="1"
                  value={topLeftCornerValue}
                  onChange={changeTopLeftCorner}
                />
                <span>100%</span>
              </div>
            </div>
            <div className={classes["controls-pair"]}>
              <div className={classes.controls}>
                <label htmlFor="topRightCorner">Верх. П.: </label>
                <input
                  type="number"
                  id="topRightCorner"
                  min="0"
                  max="100"
                  value={topRightCornerValue}
                  onChange={changeTopRightCorner}
                />
              </div>
              <div className={classes.controls}>
                <span>0%</span>
                <input
                  type="range"
                  id="topRightCorner"
                  min="0"
                  max="100"
                  step="1"
                  value={topRightCornerValue}
                  onChange={changeTopRightCorner}
                />
                <span>100%</span>
              </div>
            </div>
            <div className={classes["controls-pair"]}>
              <div className={classes.controls}>
                <label htmlFor="bottomLeftCorner">Нижн. Л.: </label>
                <input
                  type="number"
                  id="bottomLeftCorner"
                  min="0"
                  max="100"
                  value={bottomLeftCornerValue}
                  onChange={changeBottomLeftCorner}
                />
              </div>
              <div className={classes.controls}>
                <span>0%</span>
                <input
                  type="range"
                  id="bottomLeftCorner"
                  min="0"
                  max="100"
                  step="1"
                  value={bottomLeftCornerValue}
                  onChange={changeBottomLeftCorner}
                />
                <span>100%</span>
              </div>
            </div>
            <div className={classes["controls-pair"]}>
              <div className={classes.controls}>
                <label htmlFor="bottomRightCorner">Нижн. П.: </label>
                <input
                  type="number"
                  id="bottomRightCorner"
                  min="0"
                  max="100"
                  value={bottomRightCornerValue}
                  onChange={changeBottomRightCorner}
                />
              </div>
              <div className={classes.controls}>
                <span>0%</span>
                <input
                  type="range"
                  id="bottomRightCorner"
                  min="0"
                  max="100"
                  step="1"
                  value={bottomRightCornerValue}
                  onChange={changeBottomRightCorner}
                />
                <span>100%</span>
              </div>
            </div>
          </div>
        </Fragment>
      )}

      <button className={classes["add-btn"]} onClick={addShapeHandler}></button>
    </div>
  );
}

export default ShapeSettings;
