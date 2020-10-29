import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
//import AppBar from "@material-ui/core/AppBar";
//import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
//import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import swal from "sweetalert";
import {
  REACT_APP_URL_BASE_BACKEND,
  DecodeIdUser,
  DecodeNroCuenta,
} from "../../../config/index";
import Axios from "axios";
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

//const steps = ["Shipping address", "Payment details", "Review your order"];
const steps = ["Ingresar informacion", "Revision de orden"];
function getStepContent(step, dataTransfer, setDataTransfer, setreceptorfound) {
  switch (step) {
    // case 0:
    //   return <AddressForm />;
    case 0:
      return <PaymentForm {...{ dataTransfer, setDataTransfer }} />;
    case 1:
      return <Review {...{ ...dataTransfer, setreceptorfound }} />;
    default:
      throw new Error("Unknown step");
  }
}
// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <AddressForm />;
//     case 1:
//       return <PaymentForm />;
//     case 2:
//       return <Review />;
//     default:
//       throw new Error("Unknown step");
//   }
// }

export default function Transfer() {
  const [dataTransfer, setDataTransfer] = React.useState({
    depositoOrTranferencia: "",
    cuentareceptora: "",
  });
  const [receptorfound, setreceptorfound] = React.useState(true);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const MakeTransfer = () => {
    let { depositoOrTranferencia, cuentareceptora } = dataTransfer;
    let data_Result_data = {
      depositoOrTranferencia: Number(
        parseFloat(depositoOrTranferencia).toFixed(2)
      ),
      cuentareceptora,
    };
    //let idUsuarioQueDepositaraOEmisor = DecodeIdUser();
    const datavalues = Object.assign(
      { ...data_Result_data },
      {
        cuentaemisora: DecodeNroCuenta(),
        idUsuarioQueDepositaraOEmisor: DecodeIdUser(),
      }
    );
    Axios({
      method: "POST",
      url: `${REACT_APP_URL_BASE_BACKEND}/transfer`,
      data: datavalues,
    })
      //   //Axios.post(`${REACT_APP_URL_BASE_BACKEND}/transfer`, datavalues)
      .then(({ data }) => {
        setActiveStep(0);
        if (data.status) {
          swal(
            data.message,
            ` Acabas de transferir el monto de 
          ${dataTransfer.depositoOrTranferencia} soles a la cuenta 
          ${data.to_account_transfer}`,
            "success"
          );
        }
        if (data.status === false) {
          swal("Transferencia errónea", ` ${data.message}`, "error");
        }

        //console.log(result);
      })
      .catch((error) =>
        swal("Transferencia errónea", ` ${error.message}`, "error")
      );

    //alert("Hacer transferencia");
  };
  const handleBack = () => {
    setDataTransfer({
      depositoOrTranferencia: "",
      cuentareceptora: "",
    });
    setActiveStep(activeStep - 1);
    setreceptorfound(true);
  };
  // const handleOpen = () => {
  //   setActiveStep(0);
  // };
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main className={classes.layout}>
        <Paper
          data-aos="zoom-in"
          data-aos-duration="500"
          className={classes.paper}
        >
          <Typography component="h1" variant="h4" align="center">
            Transferir
            {/* <br />
            {JSON.stringify(dataTransfer)} */}
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Transferencia exitosa
                </Typography>
                <Typography variant="subtitle1">
                  Acabas de transferir el monto de
                  {" " + dataTransfer.depositoOrTranferencia} soles a la cuenta{" "}
                  {dataTransfer.cuentareceptora}
                  <br />
                  <Button
                    onClick={handleOpen}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                  >
                    Transferir de nuevo
                  </Button>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment> */}
          {getStepContent(
            activeStep,
            dataTransfer,
            setDataTransfer,
            setreceptorfound
          )}
          <div className={classes.buttons}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} className={classes.button}>
                Back
              </Button>
            )}

            <Button
              variant="contained"
              color="primary"
              disabled={receptorfound ? false : true}
              onClick={
                activeStep === steps.length - 1 ? MakeTransfer : handleNext
              }
              className={classes.button}
            >
              {activeStep === steps.length - 1 ? "Transferir" : "Next"}
            </Button>

            {/* <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button> */}
          </div>
          {/* </React.Fragment>
            )}
          </React.Fragment> */}
        </Paper>
        {/* <Copyright /> */}
      </main>
    </React.Fragment>
  );
}
