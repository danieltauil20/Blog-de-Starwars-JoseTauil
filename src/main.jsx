import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./routes";
import { ContextProvider } from "./appContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <Layout />
  </ContextProvider>
);
