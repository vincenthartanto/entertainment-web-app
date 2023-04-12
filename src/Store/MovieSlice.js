import { createSlice } from "@reduxjs/toolkit";
import jsonData from "../data.json";
const MovieSlice = createSlice({
  name: "Movie-Slice",
  initialState: {
    data: jsonData,
  },
  reducers: {
    addBookmark(state, action) {
      const dataIndex = state.data.findIndex(
        (dt) => dt.title === action.payload
      );
      state.data[dataIndex].isBookmarked = true;
    },
    deleteBookmark(state, action) {
      console.log("masuk");
      const dataIndex = state.data.findIndex(
        (dt) => dt.title === action.payload
      );
      state.data[dataIndex].isBookmarked = false;
    },
  },
});

export const MovieSliceAction = MovieSlice.actions;
export default MovieSlice;
