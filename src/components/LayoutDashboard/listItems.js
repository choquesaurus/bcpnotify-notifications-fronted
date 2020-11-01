import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

export const mainListItems = (
  <div>
    <Link to="/bcp">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        {/* <Link to="/sadsad" /> */}
        <ListItemText primary="Dashboard"></ListItemText>
      </ListItem>
    </Link>

    <Link to="/bcp/transfer">
      <ListItem button>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        {/* <Link to="/sadsad" /> */}
        <ListItemText primary="Transferir"></ListItemText>
      </ListItem>
    </Link>

    <Link to="/bcp/details">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        {/* <Link to="/sadsad" /> */}
        <ListItemText primary="Mis transferencias"></ListItemText>
      </ListItem>
    </Link>

    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Soporte(x)" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reportes(x)" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integraciones(x)" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Mes actual(x)" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Ultimo trimestre(x)" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Venta de fin de año(x)" />
    </ListItem>
  </div>
);
