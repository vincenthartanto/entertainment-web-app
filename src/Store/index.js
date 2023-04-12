import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./MovieSlice";
const store = configureStore({
  reducer: {
    movie: MovieSlice.reducer,
  },
});

export default store;
