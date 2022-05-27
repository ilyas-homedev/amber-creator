import classes from "./PreviewExample.module.css";

function PreviewExample(props) {
  const PX_IN_MM = 3.7795275591;

  return (
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
    </div>
  );
}

export default PreviewExample;
