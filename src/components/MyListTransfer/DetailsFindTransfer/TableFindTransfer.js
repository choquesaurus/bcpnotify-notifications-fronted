import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function BasicTable({ value }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Tipo de transferencia</TableCell>
            <TableCell align="right">
              {value.type
                ? value.type === "outgoing_transfer"
                  ? "Cuenta receptora"
                  : "Cuenta emisora"
                : "Loading"}
            </TableCell>
            <TableCell align="right">¿Nombre de usuario?</TableCell>
            <TableCell align="right">Monto</TableCell>
            <TableCell align="right">Saldo antiguo</TableCell>
            <TableCell align="right">Saldo nuevo</TableCell>
            <TableCell align="right">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => ( */}

          <TableRow>
            <TableCell align="right" defaultValue="Loading">
              {value.type
                ? value.type === "outgoing_transfer"
                  ? "Saliente"
                  : "Entrante"
                : "Loading"}
            </TableCell>
            <TableCell align="right" scope="row">
              {value.type
                ? value.type === "outgoing_transfer"
                  ? value.cuenta_receptora
                  : value.cuenta_emisora
                : "Loading"}
            </TableCell>
            <TableCell align="right" scope="row">
              {value.details_user_transfer
                ? `${value.details_user_transfer.name} ${value.details_user_transfer.last_name}`
                : "Loading ..."}
            </TableCell>
            <TableCell align="right">
              {value.monto_transferido
                ? value.monto_transferido
                : "Loading ..."}
            </TableCell>
            <TableCell align="right">{value.saldo_antiguo}</TableCell>
            <TableCell align="right">{value.saldo_nuevo}</TableCell>
            <TableCell align="right">
              {value.hour_transfer
                ? new Date(value.hour_transfer).toLocaleString()
                : "Loading ... "}
            </TableCell>
          </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
