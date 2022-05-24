import classes from "./RightMenu.module.css";
import RightMenuItem from "./RightMenuItem";

function RightMenu() {
  const shapes = ["Add", "Delete"];

  return (
    <div className={classes["right-menu"]}>
      <ul className={classes.list}>
        {shapes.map((item) => (
          <RightMenuItem value={item} key={Math.random()} />
        ))}
      </ul>
    </div>
  );
}

export default RightMenu;
