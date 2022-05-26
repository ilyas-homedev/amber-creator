import classes from "./ColorItem.module.css";

function ColorItem(props) {
  return (
    <div className={classes["color-item-container"]}>
      <div className={classes["color-item-example"]}></div>
      <p>{props.name}</p>
    </div>
  );
}

export default ColorItem;
