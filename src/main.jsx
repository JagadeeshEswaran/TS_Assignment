import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppContextProvider } from "./appContext/Context";
import { ToastContainer } from "react-toastify";

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

      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        width="300px"
        // transition={Bounce}
      />
    </AppContextProvider>
  </React.StrictMode>
);
