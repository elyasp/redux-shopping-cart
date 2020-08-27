import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import Store from "./store";

const StoreInstance = Store();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={StoreInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
