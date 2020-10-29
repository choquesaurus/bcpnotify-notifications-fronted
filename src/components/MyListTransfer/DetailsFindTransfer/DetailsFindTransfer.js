import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TableFindTransfer from "./TableFindTransfer";
import {
  REACT_APP_URL_BASE_BACKEND,
  //REACT_APP_URL_BASE,
  DecodeIdUser,
} from "../../../config/index";
export default function DetailsTransfer() {
  const [FindTransfer, setFindTransfer] = useState({});
  const { idtransfer } = useParams();
  //console.log(idtransfer);
  useEffect(() => {
    (async () => {
      Axios({
        method: "POST",
        url: `${REACT_APP_URL_BASE_BACKEND}/transferdetails`,
        data: {
          idUsuarioActual: DecodeIdUser(),
          idtransferencia: idtransfer,
        },
      })
        .then((result) => setFindTransfer(result.data))
        .catch((error) => console.log(error));
    })();
  }, [idtransfer]);

  // { idUsuarioActual = "", idtransferencia = "" }
  return (
    <div>
      <TableFindTransfer value={FindTransfer} />
      <Link to="/bcp/details">Regresar</Link>
      {/* {new Date(FindTransfer.hour_transfer).toLocaleString()} */}
    </div>
  );
}
