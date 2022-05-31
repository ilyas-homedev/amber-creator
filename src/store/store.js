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

const store = configureStore({
  reducer: mouseCoordsSlice.reducer,
});

export const mouseActions = mouseCoordsSlice.actions;
export default store;
