import React from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import MainInfoItem from "./components/MainInfoItem";
import SecondInfoItem from "./components/SecondInfoItem";
import DetailPage from "./components/DetailPage";
// const getParameters = {
//   serviceKey:
//     "ujgF2jP0uCRpTRsHmLf2jYs6pQ3ld554lGxy1sj9j3UYMrxbu31CuLobu9AJzPS/CMkTxDlfrBA0dLy8GoeBlA==",
//   returnType: "json",
//   numOfRows: "10",
//   pageNo: "1",
//   sidoName: "서울",
//   ver: "1.0",
// };

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
    <div className="App">
      <DetailPage></DetailPage>
    </div>
  );
}

export default App;
