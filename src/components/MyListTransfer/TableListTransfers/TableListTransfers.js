import React from "react";
import { DataGrid } from "@material-ui/data-grid";
//import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
// const columns2 = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue("firstName") || ""} ${
//         params.getValue("lastName") || ""
//       }`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

export default function DataTable({ value, option }) {
  const columns = [
    //{ field: "id", headerName: "ID", width: 170 },

    {
      field: "type",

      headerName: "Tipo", //value.option === "" ? "Saliente" : "Entrante",

      width: 70,
      renderCell: (params) =>
        params.data.type === "outgoing_transfer" ? (
          <RemoveCircleIcon color="secondary" />
        ) : (
          <AddCircleIcon color="primary" />
        ),
    },
    {
      field: "fullname",
      headerName: "¿Nombre de usuario?",
      width: 320,
      valueGetter: (params) =>
        `${params.getValue("details_user_transfer").name || "Loading ..."} ${
          params.getValue("details_user_transfer").last_name || "Loading ..."
        }`,
    },
    {
      field: "nrocuenta",
      headerName: "Cuenta",
      width: 250,
      valueGetter: (params) =>
        option === "all"
          ? params.getValue("cuenta_receptora") ||
            params.getValue("cuenta_emisora")
          : option === "Entrante"
          ? params.getValue("cuenta_emisora")
          : params.getValue("cuenta_receptora"),
    },
    { field: "monto_transferido", headerName: "Monto", width: 170 },
    // { field: "saldo_antiguo", headerName: "Saldo antiguo", width: 170 },
    // { field: "saldo_nuevo", headerName: "Saldo nuevo", width: 170 },
    {
      field: "hora_transferencia",
      headerName: "Hora",
      width: 220,
      valueGetter: (params) =>
        `${new Date(params.getValue("hour_transfer")).toLocaleString()}`,
    },
    {
      field: "VerMas",
      headerName: "options",
      renderCell: (params) => {
        //console.log(params);
        return <Link to={`/bcp/details/${params.data.id}`}>Ver más</Link>;
      },
    },
  ];
  //console.log(value);
  return (
    <div
      data-aos="fade-right"
      //data-aos-offset="500"
      data-aos-duration="500"
      style={{ height: 400, width: "100%" }}
    >
      <DataGrid
        rows={value}
        columns={columns}
        pageSize={5}
        components
        //checkboxSelection
      />
    </div>
  );
}
