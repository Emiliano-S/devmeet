import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(() => ({
  appointments: [
    {
      name: "Google",
      date: "10/10/2022",
    },
  ],
  notifications: [
    {
      name: "Facebook",
      date: "10/10/2022",
    },
    {
      name: "Facebook",
      date: "10/10/2022",
    },
  ],
}));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
