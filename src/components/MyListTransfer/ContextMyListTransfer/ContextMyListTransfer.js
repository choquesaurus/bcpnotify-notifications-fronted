import React from "react";
const ContextMyListTransfer = React.createContext({
  //authenticate: false,
  data: [],
  filter_incoming_transfer: [],
  filter_outgoing_transfer: [],
});
export default ContextMyListTransfer;
