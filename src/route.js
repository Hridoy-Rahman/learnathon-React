import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import User from "./class-3/Component/User";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: '/user/:id',
  //   element : <User></User>
  // }
  
]);

export default router;