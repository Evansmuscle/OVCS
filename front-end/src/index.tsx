import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./Components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <MantineProvider
        theme={{ white: "var(--bg)" }}
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
      >
        <App />
      </MantineProvider>
    </Router>
  </React.StrictMode>
);
