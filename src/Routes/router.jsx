import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../home/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
