import { useState } from "react";

const MIN_SCALE = 0.5;
const MAX_SCALE = 3;

function useScale() {
  const [scale, setScale] = useState(1);

  const updateScale = ({ direction, interval }) => {
    setScale((currentScale) => {
      let scale;

      if (direction === "up" && currentScale + interval < MAX_SCALE) {
        scale = currentScale + interval;
      } else if (direction === "up") {
        scale = MAX_SCALE;
      } else if (direction === "down" && currentScale - interval > MIN_SCALE) {
        scale = currentScale - interval;
      } else if (direction === "down") {
        scale = MIN_SCALE;
      } else {
        scale = currentScale;
      }

      return scale;
    });
  };

  document.addEventListener("wheel", (event) => {
    event.preventDefault();

    updateScale({
      direction: event.deltaY > 0 ? "up" : "down",
      interval: 0.1,
    });
  });

  return scale;
}

export default useScale;
