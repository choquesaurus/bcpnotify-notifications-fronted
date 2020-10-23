import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  REACT_APP_URL_BASE_BACKEND,
  //REACT_APP_URL_BASE,
  Decode,
} from "../../config/index";
export default function DetailsTransfer() {
  const [getDetailsTransfer, setgetDetailsTransfer] = useState({});
  const { idtransfer } = useParams();
  //console.log(idtransfer);
  useEffect(() => {
    (async () => {
      Axios({
        method: "POST",
        url: `${REACT_APP_URL_BASE_BACKEND}/transferdetails`,
        data: {
          idUsuarioActual: Decode(),
          idtransferencia: idtransfer,
        },
      })
        .then((result) => setgetDetailsTransfer(result.data))
        .catch((error) => console.log(error));
    })();
  }, [idtransfer]);

  // { idUsuarioActual = "", idtransferencia = "" }
  return <div>{JSON.stringify(getDetailsTransfer)}</div>;
}
