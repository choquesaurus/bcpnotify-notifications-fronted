import React from "react"; //,{ useEffect }
// import logo from "./logo.svg";
import "./App.css";
//import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
  //Outlet
} from "react-router-dom";
//import Details from "./components/DetailsTransfer";
//import Start from "./components/Start/Start";
//import DetailsTransfer from "./components/DetailsTransfer";
//import Signin from "./components/Signin/Signin";
//import Signup from "./components/Signup/Signup";
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
    // <BrowserRouter>
    //   <Switch>
    //     <Route path="/" exact component={Start} />

    //     <MeLayout>
    //       <Route path="/bcp" exact component={DetailsUser}></Route>
    //       {/* <Route path="/app" exact component={DetailsTransfer} /> */}
    //       <Route path="/bcp/trasferencia" exact component={Home} />
    //     </MeLayout>
    //     <Route path="/error" component={Error} />
    //   </Switch>
    // </BrowserRouter>
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

// function Home() {
//   // const [authenticate, setIsauthenticate] = useState(false);

//   // async function isAuthenticated2() {
//   //   const validateSession = await (
//   //     await fetch("http://localhost:5002/authenticate", {
//   //       credentials: "include",
//   //     })
//   //   ).json();
//   //   console.log("Sverificacion ", validateSession);
//   //   return validateSession;
//   // }
//   // async function isAuthenticated() {
//   //   const validateSession = await (
//   //     await fetch("http://localhost:5002/validatesession")
//   //   ).json();
//   //   console.log("Session activa si o no ?", validateSession);
//   //   return validateSession.status;
//   // }
//   const CloseSession = async () => {
//     //   await (await fetch("http://localhost:5002/logout")).json();
//     window.location.href = "http://localhost:5002/logout";
//   };
//   // console.log("console", isAuthenticated2());
//   useEffect(() => {
//     (async () => {
//       const validateSession = await (
//         await fetch("http://localhost:5002/authenticate", {
//           credentials: "include",
//         })
//       ).json();
//       if (validateSession.status == false) {
//         window.location.href = "http://localhost:3001/";
//       } else {
//         // await isAuthenticated();
//         const request = await (
//           await fetch("http://localhost:5002/user", { credentials: "include" })
//         ).json();
//         console.log("peticion", request);
//       }
//     })();
//   }, []);
//   // if (isAuthenticated2() === false) {
//   //   console.log("goooes", "" + isAuthenticated2());
//   //   return <Redirect to="https://www.youtube.com/" />;
//   // }

//   return (
//     <>
//       <h1>Home :D</h1>
//       {/* <button onClick={}>Verificacion</button> */}
//       <button onClick={CloseSession}>Cerrar session</button>
//     </>
//   );
// }
// function Session() {
//   useEffect(() => {
//     (async () => {
//       const validateSession = await (
//         await fetch("http://localhost:5002/authenticate", {
//           credentials: "include",
//         })
//       ).json();
//       if (validateSession.status == true) {
//         window.location.href = "http://localhost:3001/home";
//       }
//     })();
//   }, []);
//   return (
//     <div className="App container">
//       <form action="http://localhost:5002/login" method="POST">
//         <div class="form-group">
//           <label for="exampleInputEmail1">Username</label>
//           <input
//             type="text"
//             name="username"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//           />
//           <small id="emailHelp" class="form-text text-muted">
//             We'll never share your username or password with anyone else.
//           </small>
//         </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1">Password</label>
//           <input
//             type="password"
//             name="password"
//             class="form-control"
//             id="exampleInputPassword1"
//           />
//         </div>

//         <button type="submit" class="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

export default App;
