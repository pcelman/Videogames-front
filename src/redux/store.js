import { createStore, applyMiddleware } from "redux";
import {
  composeWithDevTools,
  composeWithFevTools,
} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
<<<<<<< HEAD:src/store/index.js
); 
=======
);
>>>>>>> 80b669084a3e8b4e657b543fd23352d9c486e9e6:src/redux/store.js
