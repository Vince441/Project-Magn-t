import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx"

const App = () => {
  //logique
  const router = createBrowserRouter([
    {
      path: "/", // Home
      element: <Root/>,
    },
  ]);

  //visuel
  return <RouterProvider router={router} />;
};

export default App;
