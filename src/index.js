import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import VeroViajes from "./container/VeroViajes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        
      </Route>
      <Route path="VeroViajes" element={<VeroViajes />} />
    </Routes>
  </BrowserRouter>
);
