import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "./context";
import App from "./App";

import "normalize.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
