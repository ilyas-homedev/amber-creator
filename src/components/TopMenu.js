import classes from "./TopMenu.module.css";
import TopMenuItem from "./TopMenuItem";

function TopMenu() {
  const types = [{ id: "necklace" }, { id: "bracelet" }];
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
