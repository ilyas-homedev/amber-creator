import classes from "./TopMenuItem.module.css";

function TopMenuItem(props) {
  return (
    <li
      className={classes["item-container"]}
      onClick={() => props.onClick(props.value)}
    >
      {props.value}
    </li>
  );
}

export default TopMenuItem;
