import React from "react";
const UseContextDetailsUser = React.createContext({
  //authenticate: false,
  detailsUser: {
    name: "",
    last_name: "",
    age: 18,
    nrocuenta: "",
    photoURL: "",
    email: "",
  },
});
export default UseContextDetailsUser;
