import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import { REACT_APP_URL_BASE_BACKEND } from "../../../config/index";
export default function Review({
  cuentareceptora: nrocuenta,
  depositoOrTranferencia,
  setreceptorfound,
}) {
  const [data, setData] = React.useState("");
  useEffect(() => {
    (async () => {
      const requestresult = await Axios({
        method: "POST",
        url: `${REACT_APP_URL_BASE_BACKEND}/searchbynrocuenta`,
        data: { nrocuenta },
      });
      setData(requestresult.data.message);
      setreceptorfound(requestresult.data.found);
    })();
  }, [nrocuenta, setreceptorfound]);
  return (
    <React.Fragment>
      <Typography component={'div'} variant="h6" gutterBottom>
        {data.toString().startsWith('No existe')
          ? data.toString()
          : `¿${data.toString()}
        el monto de ${depositoOrTranferencia} soles ?`}
      </Typography>
    </React.Fragment>
  );
}
