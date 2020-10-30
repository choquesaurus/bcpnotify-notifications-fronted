import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
//import { Field, Form, FormSpy } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "./modules/components/Typography";
//import AppFooter from './modules/views/AppFooter';
//import AppAppBar from "./modules/views/AppAppBar";
import AppForm from "./modules/views/AppForm";
//import { email, required } from "./modules/form/validation";
//import RFTextField from "./modules/form/RFTextField";
import FormButton from "./modules/form/FormButton";
//import FormFeedback from "./modules/form/FormFeedback";
import { TextField } from "@material-ui/core";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { REACT_APP_URL_BASE_BACKEND } from "../../config/index";
import Helmet from "react-helmet";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function SignIn() {
  const classes = useStyles();
  //const [sent, setSent] = React.useState(false);
  const [validateEmail, setvalidateEmail] = React.useState(false);
  const [validatePassword, setvalidatePassword] = React.useState(true);
  // const validate = (values) => {
  //   const errors = required(["email", "password"], values);

  //   if (!errors.email) {
  //     const emailError = email(values.email, values);
  //     if (emailError) {
  //       errors.email = email(values.email, values);
  //     }
  //   }

  //   return errors;
  // };

  // const handleSubmit = () => {
  //   setSent(true);
  // };
  const TestingEmail = (e) => {
    setvalidateEmail(isEmail(e.target.value));
  };
  const TestingPassword = (e) => {
    setvalidatePassword(isEmpty(e.target.value));
  };
  return (
    <React.Fragment>
      <Helmet>
        <meta name="description" content="Aqui podras iniciar sesion" />
        <title>BCPNotify | Signin</title>
      </Helmet>
      {/* <AppAppBar /> */}
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Iniciar sesión
          </Typography>
          <Typography variant="body2" align="center">
            {"¿No eres miembro todavía? "}
            <Link href="/signup" align="center" underline="always">
              Registrate aquí
            </Link>
          </Typography>
        </React.Fragment>

        <form
          action={`${REACT_APP_URL_BASE_BACKEND}/login`}
          method="POST"
          //onSubmit={handleSubmit2}
          className={classes.form}
          //noValidate
        >
          <TextField
            required
            error={validateEmail === false ? true : false}
            autoComplete="email"
            onChange={TestingEmail}
            autoFocus
            //component={RFTextField}
            //disabled={submitting || sent}
            fullWidth
            label="Email"
            margin="normal"
            name="email"
            size="small"
          />
          <TextField
            error={validatePassword}
            required
            fullWidth
            size="small"
            //component={RFTextField}
            //disabled={submitting || sent}
            onChange={TestingPassword}
            name="password"
            autoComplete="current-password"
            label="Password"
            type="password"
            margin="normal"
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
          <FormButton
            className={classes.button}
            disabled={
              validateEmail === true && validatePassword === false
                ? false
                : true
            }
            //disabled={submitting || sent}
            size="large"
            color="secondary"
            fullWidth
          >
            {validateEmail === true && validatePassword === false
              ? "Iniciar"
              : "En progreso ..."}
            {/* {submitting || sent ? "In progress…" : "Sign In"} */}
          </FormButton>
        </form>

        <Typography align="center">
          <Link
            underline="always"
            href="/premium-themes/onepirate/forgot-password/"
          >
            Forgot password?
          </Link>
        </Typography>
      </AppForm>
      {/* <AppFooter /> */}
    </React.Fragment>
  );
}

export default withRoot(SignIn);
