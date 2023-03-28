import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Router from "./routes/Router";
import store from "./store";

// const fetchData = async () => {
//   const response = await axios.get(
//     "/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
//     { params: getParameters }
//   );
//   console.log(response);
// };

// fetchData();

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
