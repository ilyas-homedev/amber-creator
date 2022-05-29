import MaterialItem from "./MaterialItem";
import classes from "./MaterialType.module.css";

function MaterialType(props) {
  const materiaItemsArray = props.items;
  return (
    <div className={classes["type-container"]}>
      <p className={classes["type-name"]}>{props.name}</p>
      <ul>
        {/* {materiaItemsArray.map((item) => {
          return <MaterialItem />;
        })} */}
      </ul>
    </div>
  );
}

export default MaterialType;
