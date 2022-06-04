import { createSlice, configureStore } from "@reduxjs/toolkit";

const mouseCoordsSlice = createSlice({
  name: "mouse",
  initialState: { x: null, y: null },
  reducers: {
    setCoords(state, action) {
      state.x = action.payload.mouseX;
      state.y = action.payload.mouseY;
    },
  },
});

const shapesArraySlice = createSlice({
  name: "shapesArray",
  initialState: [],
  reducers: {
    addShapeToTheLeft(state, action) {
      state.push(action.payload.shape);
    },
    addShapeToTheRight(state, action) {
      state.unshift(action.payload.shape);
    },
  },
});

const store = configureStore({
  reducer: {
    mouse: mouseCoordsSlice.reducer,
    shapes: shapesArraySlice.reducer,
  },
});

export const mouseActions = mouseCoordsSlice.actions;
export const shapeActions = shapesArraySlice.actions;
export default store;
