import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/home',
    element : <Home></Home>
  },
  {
    path: '/about',
    element : <About></About>
  },
  {
    path: '/contact',
    element : <Contact></Contact>
  },
]);

export default router;