import { useCallback, useRef, useState } from "react";

const ORIGIN = Object.freeze({ x: 0, y: 0 });

function usePan() {
  const [panState, setPanState] = useState(ORIGIN);

  const lastPointRef = useRef(ORIGIN);

  const pan = useCallback((event) => {
    const lastPoint = lastPointRef.current;
    const point = { x: event.pageX, y: event.pageY };
    lastPointRef.current = point;

    setPanState((panState) => {
      const delta = {
        x: lastPoint.x - point.x,
        y: lastPoint.y - point.y,
      };
      const offset = {
        x: panState.x + delta.x,
        y: panState.y + delta.y,
      };

      return offset;
    });
  }, []);

  const endPan = useCallback(() => {
    document.removeEventListener("mousemove", pan);
    document.removeEventListener("mouseup", endPan);
  }, [pan]);

  const startPan = useCallback(
    (event) => {
      document.addEventListener("mousemove", pan);
      document.addEventListener("mouseup", endPan);
      lastPointRef.current = { x: event.pageX, y: event.pageY };
    },
    [pan, endPan]
  );

  return [panState, startPan];
}

export default usePan;
