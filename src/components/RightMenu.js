import classes from "./RightMenu.module.css";
import RightMenuItem from "./RightMenuItem";
import ShapeSettings from "./ShapeSettings";

function RightMenu(props) {
  const shapes = [{ id: "circle" }, { id: "square" }];

  const drawShape = (obj) => {
    props.onDraw(obj);
  };

  return (
    <div className={classes["right-menu"]}>
      <ul className={classes.list}>
        {shapes.map((item) => (
          <RightMenuItem value={item.id} key={item.id} onClick={drawShape} />
        ))}
      </ul>
      <ShapeSettings />
    </div>
  );
}

export default RightMenu;
