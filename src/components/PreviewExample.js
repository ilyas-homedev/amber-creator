import classes from "./PreviewExample.module.css";
import { Fragment } from "react";
import { PX_IN_MM } from "../data/pixelsInMillimeter";

function PreviewExample(props) {
  return (
    <Fragment>
      <div className={classes["preview-container"]}>
        {props.shape === "circle" && (
          <div
            className={classes.example}
            style={{
              height: props.sizeValue * PX_IN_MM,
              width: props.sizeValue * PX_IN_MM,
              borderRadius: "50%",
            }}
          ></div>
        )}

        {props.shape === "square" && (
          <div
            className={classes.example}
            style={{
              height: props.sizeValue * PX_IN_MM,
              width: props.sizeValue * PX_IN_MM,
              borderRadius: props.cornerRadiusValue + "%",
            }}
          ></div>
        )}

        {props.shape === "custom" && (
          <div
            className={classes.example}
            style={{
              height: props.heightValue * PX_IN_MM,
              width: props.widthValue * PX_IN_MM,
              borderTopLeftRadius: props.topLeftCornerValue + "%",
              borderTopRightRadius: props.topRightCornerValue + "%",
              borderBottomLeftRadius: props.bottomLeftCornerValue + "%",
              borderBottomRightRadius: props.bottomRightCornerValue + "%",
            }}
          ></div>
        )}
      </div>
      <p className={classes["material-name"]}>Amber</p>
    </Fragment>
  );
}

export default PreviewExample;
