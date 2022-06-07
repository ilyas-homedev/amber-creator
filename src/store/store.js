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

const typeObjectSlice = createSlice({
  name: "typeObject",
  initialState: {},
  reducers: {
    createType(state, action) {
      state = action.payload.type;
      console.log(state);
    },
  },
});

const canvasSlice = createSlice({
  name: "canvas",
  initialState: { offset: { x: 0, y: 0 }, scale: 1 },
  reducers: {},
});

const store = configureStore({
  reducer: {
    mouse: mouseCoordsSlice.reducer,
    shapes: shapesArraySlice.reducer,
    type: typeObjectSlice.reducer,
    canvas: canvasSlice.reducer,
  },
});

export const mouseActions = mouseCoordsSlice.actions;
export const shapeActions = shapesArraySlice.actions;
export const typeActions = typeObjectSlice.actions;
export const canvasActions = canvasSlice.actions;
export default store;
