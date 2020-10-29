import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
//import Axios from "axios";
import ContextMyListTransfer from "./ContextMyListTransfer/ContextMyListTransfer";
import { database } from "../../firebase/init";
import {
  DecodeIdUser,
  //,REACT_APP_URL_BASE_BACKEND
} from "../../config/index";
export default () => {
  const [data, setData] = React.useState([]);
  // const contextoMyListTransfer = createContext({
  //   data: [],
  //   filter_incoming_transfer: [],
  //   filter_outgoin_transfer: [],
  // });

  useEffect(() => {
    (async () => {
      database
        .collection("users")
        .doc(DecodeIdUser())
        .collection("transfers")
        .orderBy("timestamp", "desc")
        .onSnapshot((results) => {
          const result_listTotal = results.docs.map((data) =>
            Object.assign({ id: data.id }, data.data())
          );
          setData(result_listTotal);
        });

      // const requestresult = await Axios({
      //   method: "POST",
      //   url: `${REACT_APP_URL_BASE_BACKEND}/alltransfers`,
      //   data: { idUsuarioActual: DecodeIdUser() },
      // });
      // setData(requestresult.data);

      //console.log(requestresult.data);
    })();
  }, []);
  return (
    <>
      Mi lista de transferencias
      <br />
      <ContextMyListTransfer.Provider
        value={{
          data,
          filter_incoming_transfer: data.filter(
            (value) => value.type === "incoming_transfer"
          ),
          filter_outgoing_transfer: data.filter(
            (value) => value.type === "outgoing_transfer"
          ),
        }}
      >
        <Outlet />
      </ContextMyListTransfer.Provider>
    </>
  );
};
