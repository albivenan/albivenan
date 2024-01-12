import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Fix import statement
import "./index.css";
import Navfoot from "../layouts/navfoot";
import App from "../pages/App";
import Aboutme from "../pages/Aboutme";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Uas from "../pages/Uas"
import NavFoot from "../layouts/navfoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavFoot />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/aboutme",
        element: <Aboutme />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/uas",
        element: <Uas />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
);
