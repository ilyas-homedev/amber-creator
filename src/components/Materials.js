import classes from "./Materials.module.css";
import materials from "../data/materials";
import MaterialType from "./MaterialType";

function Materials() {
  return (
    <div className={classes["materials-container"]}>
      {materials.map((material) => {
        return <MaterialType name={material.name} key={material.id} />;
      })}
    </div>
  );
}

export default Materials;
