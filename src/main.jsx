import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppContextProvider } from "./appContext/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider
        router={routes}
        future={{
          v7_startTransition: true,
        }}
      >
        <App />
      </RouterProvider>
    </AppContextProvider>
  </React.StrictMode>
);
