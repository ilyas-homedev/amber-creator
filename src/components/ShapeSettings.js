import classes from "./ShapeSettings.module.css";

function ShapeSettings(props) {
  return (
    <div className={classes.container}>
      <button className={classes["add-btn"]}></button>
    </div>
  );
}

export default ShapeSettings;
