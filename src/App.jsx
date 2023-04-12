import { useState } from "react";

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Auth/Login";
import MoviePage from "./Page/MoviePage";
import RootLayout from "./Layout/RootLayout";
import TVSeriesPage from "./Page/TVSeriesPage";
import BookmarkPage from "./Page/BookmarkPage";
function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout></RootLayout>,

      children: [
        {
          index: true,
          path: "",
          element: <Home></Home>,
        },
        {
          path: "/movie",
          element: <MoviePage></MoviePage>,
        },
        {
          path: "/TVseries",
          element: <TVSeriesPage></TVSeriesPage>,
        },
        {
          path: "/Bookmarks",
          element: <BookmarkPage></BookmarkPage>,
        },
      ],
    },
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: <Login></Login>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
