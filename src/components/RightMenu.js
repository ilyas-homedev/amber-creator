import classes from "./RightMenu.module.css";
import RightMenuItem from "./RightMenuItem";
import ShapeSettings from "./ShapeSettings";
import shapes from "../data/shapes";
import { useState } from "react";

function RightMenu(props) {
  const [choosenShape, setChoosenShape] = useState("circle");

  const chooseShape = (shape) => {
    setChoosenShape(shape);
  };

  const applyShapeSettings = (shapeSettings) => {
    props.onChooseShape(shapeSettings);
  };

  return (
    <div className={classes["right-menu"]}>
      <ul className={classes.list}>
        {shapes.map((item) => (
          <RightMenuItem
            value={item.id}
            key={item.id}
            onClick={() => chooseShape(item.id)}
          />
        ))}
      </ul>
      <ShapeSettings
        shape={choosenShape}
        onApplyShapeSettings={applyShapeSettings}
      />
    </div>
  );
}

export default RightMenu;
