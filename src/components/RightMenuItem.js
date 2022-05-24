import classes from "./RightMenuItem.module.css";

function RightMenuItem(props) {
  return <li className={classes["item-container"]}>{props.value}</li>;
}

export default RightMenuItem;
