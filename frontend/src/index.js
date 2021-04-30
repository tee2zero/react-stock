import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/main.scss";
import Routes from "./Routes";
import UserContextProvider from "./context/UserContext";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
// เรียกใช้ state จาก localstorage
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <UserContextProvider>
        <Router>
          <Routes />
        </Router>
      </UserContextProvider>
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);
