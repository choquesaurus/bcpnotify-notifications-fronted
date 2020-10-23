import Axios from "axios";
import React, { useState } from "react";
import //messaging,
//database,
"../../firebase/init";
import { REACT_APP_URL_BASE_BACKEND, Decode } from "../../config/index";

// import {
//   // FormControl,
//   // InputLabel,
//   // Input,
//   // FormHelperText,
//   Button,
//   TextField,
//   Typography,
// } from "@material-ui/core";
export default function Transfer() {
  //const [token, setToken] = useState("");
  const [dataTranfer, setDataTranfer] = useState({
    depositoOrTranferencia: "",
    cuentareceptora: "",
  });
  //  const [miSaldo, setmiSaldo] = useState("");
  //const [detailsUser, setDetailsUser] = useState({});

  //const [mensaje, setMensaje] = useState("");
  //const [idUser, setidUser] = useState({});
  // const uploadTokens = async () => {
  //   //await database.collection("tokens").add({ token });
  //   const decode_iduser = Decode();
  //   //   await database
  //   //     .collection("users")
  //   //     .doc(decode_iduser)
  //   //     .update({ details_user: { name: "juan gabriel" } });

  //   await database
  //     .collection("datas")
  //     .doc("PxZ9b6iUdUDq149IZk09")
  //     .set(
  //       { pasatiempos: { pass2: "nelson2", pass3: "quiroga", pass1: "gaaaa" } },
  //       { merge: true }
  //     );
  // };

  // async function getIdUser() {
  //   const request = await (
  //     await fetch(`${REACT_APP_URL_BASE_BACKEND}/user`, {
  //       credentials: "include",
  //     })
  //   ).json();
  //   return request;
  // }

  // useEffect(() => {
  //   (async () => {
  //     const { iduser } = await getIdUser();
  //     await database
  //       .collection("users")
  //       .doc(iduser)
  //       .onSnapshot(async (result) => {
  //         // const {
  //         //   details_user,
  //         //   //details_user: { nrocuenta },
  //         // } =  result.data();

  //         if (result.data().details_user !== undefined) {
  //           const details_user = result.data().details_user;
  //           //details_user: { nrocuenta },

  //           //let { nrocuenta = "" } = details_user;
  //           setDetailsUser(details_user);
  //           console.log("DATA ONSNAPSHOT", details_user);
  //           // await database
  //           //   .collection("users")
  //           //   .doc(iduser)
  //           //   .collection("accountbcp")
  //           //   .doc(details_user.nrocuenta)
  //           //   .onSnapshot((result) => {
  //           //     const { saldo } = result.data();
  //           //     setmiSaldo(saldo);
  //           //     console.log(saldo);
  //           //   });
  //         }
  //       });

  // messaging
  //   .getToken()
  //   .then(async (currentToken) => {
  //     if (currentToken) {
  //       Encode(iduser);
  //       const decode_iduser = Decode();
  //       await database
  //         .collection("users")
  //         .doc(decode_iduser)
  //         .set({ token: currentToken }, { merge: true });
  //     } else {
  //       console.log("No existe un token ");
  //     }
  //   })
  //   .catch((error) => console.log("Ocurrio un error => " + error));

  // messaging.onMessage((payload) => {
  //   //alert(JSON.stringify(payload.notification));
  //   setMensaje(JSON.stringify(payload.data));
  //   console.log("onMessage => ", payload);
  // });
  //   })();
  // }, []);
  const changeData = (event) => {
    // if (event.target.name == "depositoOrTranferencia") {
    //   parseInt(event.target.value);
    //   console.log("aeaaa", event.target.value);
    // }
    setDataTranfer({
      ...dataTranfer,
      [event.target.name]: event.target.value,
    });
  };
  const sendPayMent = async () => {
    // const request = await fetch(`${REACT_APP_URL_BASE_BACKEND}/transfer`,{
    //   method:"POST",
    //   headers:{

    //   },
    //   body:
    // });
    //const { nrocuenta: nrocuenta_current } = detailsUser;
    let { depositoOrTranferencia, cuentareceptora } = dataTranfer;
    let data_Result_data = {
      depositoOrTranferencia: parseInt(depositoOrTranferencia),
      cuentareceptora,
    };
    let idUsuarioQueDepositaraOEmisor = Decode();
    //await parseInt(data_Result_data.depositoOrTranferencia);
    const datavalues = Object.assign(
      { ...data_Result_data },
      {
        cuentaemisora: window.localStorage.getItem("minumerodecuenta"),
        idUsuarioQueDepositaraOEmisor,
      }
    );
    //console.log("values ", datavalues);
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
      {/* <h4>Mi saldo es : </h4>
      {miSaldo.toString()}
      <br />
      {JSON.stringify(detailsUser)} */}
      {/* {mensaje} */}

      {/* <button onClick={uploadTokens}>Subir Token </button> */}
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

//export default App;

// export default function Transfer() {
//   useEffect(() => {}, []);
//   return (
//     <>
//       <Typography>Tranferencia</Typography>
//       {/*  <FormControl>
//         <InputLabel htmlFor="my-input">Nro cuenta</InputLabel>
//         <Input id="my-input" aria-describedby="my-helper-text" />
//         <FormHelperText id="my-helper-text">
//           Ingresa el numero de cuenta del receptor
//         </FormHelperText>

//         <br />

//         <InputLabel htmlFor="my-input">Nro cuenta</InputLabel>
//         <Input id="my-input" aria-describedby="my-helper-text" />
//         <FormHelperText id="my-helper-text">
//           Ingresa el numero de cuenta del receptor
//         </FormHelperText>

//       </FormControl>
//      */}
//       <TextField
//         id="outlined-basic"
//         label="Nro a transferir"
//         variant="outlined"
//       />
//       <br /> <br />
//       <TextField id="outlined-basic" label="Monto" variant="outlined" />
//       <br /> <br />
//       <Button variant="contained" color="secondary">
//         Transferir
//       </Button>
//     </>
//   );
// }
