import classes from "./TopMenuItem.module.css";

function TopMenuItem(props) {
  return <li className={classes["item-container"]}>{props.value}</li>;
}

export default TopMenuItem;
