import Axios from "axios";
import React, { useState } from "react";
import //messaging,
//database,
"../../firebase/init";
import { REACT_APP_URL_BASE_BACKEND, DecodeIdUser } from "../../config/index";
import { DecodeNroCuenta } from "../../config/index";

export default function Transfer() {
  //const [token, setToken] = useState("");
  const [dataTranfer, setDataTranfer] = useState({
    depositoOrTranferencia: "",
    cuentareceptora: "",
  });

  const changeData = (event) => {
    setDataTranfer({
      ...dataTranfer,
      [event.target.name]: event.target.value,
    });
  };
  const sendPayMent = async () => {
    let { depositoOrTranferencia, cuentareceptora } = dataTranfer;
    let data_Result_data = {
      depositoOrTranferencia: Number(
        parseFloat(depositoOrTranferencia).toFixed(2)
      ),
      cuentareceptora,
    };
    let idUsuarioQueDepositaraOEmisor = DecodeIdUser();
    const datavalues = Object.assign(
      { ...data_Result_data },
      {
        cuentaemisora: DecodeNroCuenta(),
        idUsuarioQueDepositaraOEmisor,
      }
    );

    Axios({
      method: "POST",
      url: `${REACT_APP_URL_BASE_BACKEND}/transfer`,
      data: datavalues,
    })
      //   //Axios.post(`${REACT_APP_URL_BASE_BACKEND}/transfer`, datavalues)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
    //console.log("send payment", datavalues);
  };
  return (
    <div className="App">
      <br />
      <input
        placeholder="Ingresa el monto"
        name="depositoOrTranferencia"
        onChange={changeData}
      ></input>
      <input
        placeholder="Ingresa numero de cuenta"
        name="cuentareceptora"
        onChange={changeData}
      ></input>
      <button onClick={sendPayMent}>Enviar dinero</button>
    </div>
  );
}
