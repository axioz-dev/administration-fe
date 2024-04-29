import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import axios from "axios";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import AllData from "./pages/AllData";
import Specific from "./pages/Specific";
import GlobalError from "./pages/GlobalError";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/">
      <Route path="" element={<Home />} />
      <Route path="all-data" element={<AllData />} />
      <Route path="specific/:eventid" element={<Specific />} />
      <Route path="*" element={<GlobalError />} />
    </Route>,
  ])
);

axios.defaults.baseURL = "http://localhost:3000/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
