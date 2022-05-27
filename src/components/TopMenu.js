import classes from "./TopMenu.module.css";
import TopMenuItem from "./TopMenuItem";
import types from "../data/types";

function TopMenu() {
  return (
    <div className={classes["top-menu-container"]}>
      <ul>
        {types.map((type) => (
          <TopMenuItem value={type.id} key={type.id} />
        ))}
      </ul>
    </div>
  );
}

export default TopMenu;
