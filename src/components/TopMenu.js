import classes from "./TopMenu.module.css";
import { useState } from "react";
import TopMenuItem from "./TopMenuItem";
import types from "../data/types";
import TypeSettings from "./TypeSettings";

function TopMenu(props) {
  const [choosenType, setChoosenType] = useState("necklace");

  const chooseType = (type) => {
    setChoosenType(type);
    props.onChooseType(type);
  };

  return (
    <div className={classes["top-menu-container"]}>
      <ul>
        {types.map((type) => (
          <TopMenuItem value={type.id} key={type.id} onClick={chooseType} />
        ))}
      </ul>
      <TypeSettings type={choosenType} />
    </div>
  );
}

export default TopMenu;
