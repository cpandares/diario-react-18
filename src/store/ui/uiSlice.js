import { createSlice } from "@reduxjs/toolkit";
export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    show: false,
  },
  reducers: {
    changeShow:(state)=>{
        state.show = !state.show
    },
  },
});

export const { changeShow } = uiSlice.actions;
