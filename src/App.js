import React from "react"; //,{ useEffect }
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import DetailsUser from "./components/DetailsUser/DetailsUser";

import LayoutMyListTransfer from "./components/MyListTransfer/LayoutMyListTransfer";
import ListTransfers from "./components/MyListTransfer/ListTransfers/ListTransfers";

//import AllTransfer from "./components/MyListTransfer/AllTransfer";

import DetailsFindTransfer from "./components/MyListTransfer/DetailsFindTransfer/DetailsFindTransfer";

//import Transfer from "./components/Transfer/Transfer";
import LayoutDashboard from "./components/LayoutDashboard/LayoutDashboard";
import Error from "./components/Error/Error";

//import Dashboard from "./components/dashboard/Dashboard";
//import HeaderStart from "./components/Header/HeaderStart";

import LayoutStart from "./components/LayoutStartBase/LayoutStart";
import Signin from "./components/LayoutStartBase/SignIn";
import Signup from "./components/LayoutStartBase/SignUp";

import Transfer from "./components/LayoutDashboard/MakeTransfer/Transfer";

//import Signin from "./components/Signin/Signin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutStart />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/bcp" element={<LayoutDashboard />}>
          <Route path="/" element={<DetailsUser />} />
          <Route path="/transfer" element={<Transfer />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          <Route path="/details" element={<LayoutMyListTransfer />}>
            <Route path="/" element={<ListTransfers />} />
            <Route path=":idtransfer" element={<DetailsFindTransfer />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
