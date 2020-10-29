import React from "react";
//import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

// function preventDefault(event) {
//   event.preventDefault();
// }

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Mi Saldo</Title>
      <Typography component="p" variant="h4">
        S./ {props.miSaldo ? props.miSaldo : "Loading ..."}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {/* {new Date().toDateString()} */}
        {new Date().toDateString()}
        <br />
        Nro cuenta :{" "}
        {props.miNumerodeCuenta ? props.miNumerodeCuenta : "Loading ..."}
      </Typography>
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link> */}
      </div>
    </React.Fragment>
  );
}
