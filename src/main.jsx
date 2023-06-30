import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import axios from "axios";

// axios.defaults.baseURL="http://localhost:3001"
axios.defaults.baseURL="https://pokemon-back-production-5656.up.railway.app"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </React.StrictMode>
  </Provider>
);
