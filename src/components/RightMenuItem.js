import classes from "./RightMenuItem.module.css";

function RightMenuItem(props) {
  return (
    <li
      className={classes["item-container"]}
      onClick={() => props.onClick(props.value)}
    >
      {props.value}
    </li>
  );
}

export default RightMenuItem;
