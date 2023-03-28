import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Router from "./routes/Router";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
