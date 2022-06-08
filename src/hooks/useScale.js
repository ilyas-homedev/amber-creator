import { useState } from "react";
import useEventListener from "./useEventListener";

const MIN_SCALE = 0.5;
const MAX_SCALE = 3;

function useScale(ref = null) {
  const [scale, setScale] = useState(1);

  const updateScale = ({ direction, interval }) => {
    setScale((currentScale) => {
      let scale;

      if (direction === "down" && currentScale + interval < MAX_SCALE) {
        scale = currentScale + interval;
      } else if (direction === "down") {
        scale = MAX_SCALE;
      } else if (direction === "up" && currentScale - interval > MIN_SCALE) {
        scale = currentScale - interval;
      } else if (direction === "up") {
        scale = MIN_SCALE;
      } else {
        scale = currentScale;
      }

      return scale;
    });
  };

  // Set up an event listener such that on `wheel`, we call `updateScale`.
  useEventListener(ref, "wheel", (e) => {
    e.preventDefault();

    updateScale({
      direction: e.deltaY > 0 ? "up" : "down",
      interval: 0.1,
    });
  });

  return scale;
}

export default useScale;
