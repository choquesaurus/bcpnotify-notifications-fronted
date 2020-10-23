import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
//import { Field, Form, FormSpy } from "react-final-form";
import Typography from "./modules/components/Typography";
//import AppFooter from "./modules/views/AppFooter";
//import AppAppBar from "./modules/views/AppAppBar";
import AppForm from "./modules/views/AppForm";
//import { email, required } from "./modules/form/validation";
//import RFTextField from "./modules/form/RFTextField";
//import FormButton from "./modules/form/FormButton";
//import FormFeedback from "./modules/form/FormFeedback";
import { Button, TextField } from "@material-ui/core";
import Axios from "axios";
import { REACT_APP_URL_BASE_BACKEND } from "../../config/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// const useStyles = makeStyles((theme) => ({
//   form: {
//     //marginTop: theme.spacing(6),
//     marginTop: theme.spacing(3),
//   },
//   button: {
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(2),
//   },
//   feedback: {
//     marginTop: theme.spacing(2),
//   },
// }));

function SignUp() {
  //const refemail = React.useRef();
  //const classes = useStyles();
  const refNroCuenta = React.useRef(null);
  const [valuesSignUp, setvaluesSignUp] = React.useState({
    password: "",
    email: "",
    last_name: "",
    age: 0,
  });
  //const [sent, setSent] = React.useState(false);

  // const validate = (values) => {
  //   const errors = required(
  //     ["firstName", "lastName", "email", "password"],
  //     values
  //   );

  //   if (!errors.email) {
  //     const emailError = email(values.email, values);
  //     if (emailError) {
  //       errors.email = email(values.email, values);
  //     }
  //   }

  //   return errors;
  // };

  // const handleSubmit = (e) => {
  //   //setSent(true);
  //   console.log(refemail.current.value);
  // };
  // const changenrocuenta = (e) => {
  //   console.log(e.target.value);
  // };
  const ChangeValuesSignup = (e) => {
    setvaluesSignUp({ ...valuesSignUp, [e.target.name]: e.target.value });
  };
  const CreateUser = () => {
    const datavalues = Object.assign(
      { ...valuesSignUp },

      { age: parseInt(valuesSignUp.age), nrocuenta: refNroCuenta.current.value }
    );

    Axios({
      method: "POST",
      url: `${REACT_APP_URL_BASE_BACKEND}/signup`,
      data: datavalues,
    })
      //   //Axios.post(`${REACT_APP_URL_BASE_BACKEND}/transfer`, datavalues)
      .then((result) => {
        if (result.data.the_user_was_created) {
          toast.success("" + result.data.message, {
            position: "top-center",
            autoClose: 4000,
            closeOnClick: true,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
          });
        }
        if (result.data.the_user_was_created === false) {
          toast.error("" + result.data.message, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      })
      .catch((error) => {
        toast.error("" + error, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
    console.log(datavalues);
  };
  const GenerateNroCuenta = () => {
    let range_cero_siete = Math.floor(Math.random() * 9999999 + 1) + "";
    // let get_seven_gettime = new Date()
    //   .getTime()
    //   .toString()
    //   .split("")
    //   .reverse()
    //   .slice(0, 7)
    //   .join("");
    let rance_cero_other = Math.floor(Math.random() * 4561888 + 1) + "";
    //console.log((range_cero_siete+get_seven_gettime).length)
    return `${range_cero_siete}${rance_cero_other}`;
  };
  return (
    <>
      <ToastContainer />
      {/* <AppAppBar /> */}
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/signin" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </React.Fragment>
        {/* <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        > */}
        {/* {({ handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate> */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoFocus
              //component={RFTextField}
              //autoComplete="fname"
              fullWidth
              label="First name"
              name="name"
              required
              onChange={ChangeValuesSignup}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              //component={RFTextField}
              //autoComplete="lname"
              fullWidth
              label="Last name"
              name="last_name"
              required
              onChange={ChangeValuesSignup}
            />
          </Grid>
        </Grid>
        <TextField
          id="standard-number"
          label="Edad"
          required
          name="age"
          type="number"
          onChange={ChangeValuesSignup}
          inputProps={{
            maxLength: 2,
          }}

          // InputLabelProps={{
          //   shrink: true,
          // }}
        />
        <TextField
          //autoComplete="nrocuenta"
          //component={RFTextField}
          //onChange={changenrocuenta}
          //disabled={submitting || sent}
          //disabled={false}
          fullWidth
          label="nrocuenta(automatico)"
          margin="normal"
          name="nrocuenta"
          disabled={true}
          //required

          value={GenerateNroCuenta()}
          inputRef={refNroCuenta}
          //onChange={ChangeValuesSignup}
          inputProps={{
            maxLength: 14,
          }}
        />
        <TextField
          autoComplete="email"
          //component={RFTextField}
          //disabled={submitting || sent}
          fullWidth
          label="Email"
          margin="normal"
          name="email"
          //ref={refemail}
          required
          onChange={ChangeValuesSignup}

          // onChange={changenrocuenta}
        />

        <TextField
          fullWidth
          //component={RFTextField}
          //disabled={submitting || sent}
          required
          name="password"
          //autoComplete="current-password"
          label="Password"
          type="password"
          margin="normal"
          onChange={ChangeValuesSignup}
        />
        {/* <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback className={classes.feedback} error>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy> */}
        <Button
          onClick={CreateUser}
          fullWidth
          variant="contained"
          color="secondary"
        >
          Send
        </Button>
        {/* <FormButton
          className={classes.button}
          //disabled={submitting || sent}
          color="secondary"
          fullWidth
        > */}
        {/* {submitting || sent ? "In progress…" : "Sign Up"} */}
        {/* Sent
        </FormButton> */}
        {/* </form>
          )}
        </Form> */}
      </AppForm>
      {/* <AppFooter /> */}
    </>
  );
}

export default withRoot(SignUp);
