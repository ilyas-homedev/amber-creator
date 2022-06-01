import classes from "./TopMenu.module.css";
import TopMenuItem from "./TopMenuItem";
import types from "../data/types";
import TypeSettings from "./TypeSettings";

function TopMenu(props) {
  const chooseType = (type) => {
    props.onChooseType(type);
  };

  return (
    <div className={classes["top-menu-container"]}>
      <ul>
        {types.map((type) => (
          <TopMenuItem value={type.id} key={type.id} onClick={chooseType} />
        ))}
      </ul>
      <TypeSettings />
    </div>
  );
}

export default TopMenu;
