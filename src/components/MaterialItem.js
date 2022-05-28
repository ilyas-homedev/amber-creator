import classes from "./MaterialItem.module.css";

function MaterialItem(props) {
  return (
    <div className={classes["color-item-container"]}>
      <div className={classes["color-item-example"]}></div>
      <p>{props.name}</p>
    </div>
  );
}

export default MaterialItem;
