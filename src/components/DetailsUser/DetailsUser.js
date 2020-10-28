import React, { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
//import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
//import HelpIcon from "@material-ui/icons/Help";
//import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
//import ThumbDown from "@material-ui/icons/ThumbDown";
//import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import TextField from "@material-ui/core/TextField";
import PoliticaPrivacidad from "./PoliticaPrivacidad/PoliticaPrivacidad";
import useContextDetailsUser from "../LayoutDashboard/UseContextDetailsUser/UseContextDetailsUser";
//import Typography from "@material-ui/core/Typography";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const { detailsUser } = useContext(useContextDetailsUser);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* <useContextDetailsUser.Consumer>
        {({ detailsUser }) => <p>{detailsUser.name}</p>}
      </useContextDetailsUser.Consumer> */}
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          //variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          centered
        >
          <Tab
            label="Datos Personales"
            icon={<AccountBoxIcon />}
            {...a11yProps(0)}
          />
          <Tab label="Beneficios" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab
            label="Política de Privacidad"
            icon={<PersonPinIcon />}
            {...a11yProps(2)}
          />
          {/* <Tab label="Item Four" icon={<HelpIcon />} {...a11yProps(3)} /> */}
          {/* <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TextField
          id="filled-required"
          //disabled
          label="Nombre"
          defaultValue="Loading . . ."
          value={detailsUser.name}
          variant="filled"
          InputProps={{
            readOnly: true,
          }}
        />
        &nbsp;
        <TextField
          id="filled-required"
          InputProps={{
            readOnly: true,
          }}
          label="Apellidos"
          defaultValue="Loading . . ."
          value={detailsUser.last_name}
          variant="filled"
        />
        &nbsp;
        <TextField
          id="filled-basic"
          label="Edad"
          variant="filled"
          defaultValue="Loading . . ."
          value={detailsUser.age}
          InputProps={{
            readOnly: true,
          }}
          size="medium"
        />
        &nbsp;
        <TextField
          id="filled-basic"
          label="Correo"
          variant="filled"
          defaultValue="Loading . . ."
          value={detailsUser.email}
          InputProps={{
            readOnly: true,
          }}
          size="medium"
        />
        &nbsp;
        <TextField
          id="filled-basic"
          label="Número de cuenta"
          variant="filled"
          defaultValue="Loading . . ."
          value={detailsUser.nrocuenta}
          InputProps={{
            readOnly: true,
          }}
          size="medium"
        />{" "}
        &nbsp;
        <br />
        <hr />
        <TextField
          id="filled-basic"
          label="Url de imagen de perfil"
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          defaultValue="Loading . . ."
          value={detailsUser.photoURL}
          variant="filled"
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h5">¡Es gratis!</Typography>
        <Typography variant="subtitle1">
          No tiene costo de descarga, ni pago de comisiones.
        </Typography>
        <Typography variant="h5">¡Dinero al instante!</Typography>
        <Typography variant="subtitle1">
          El dinero ingresará inmediatamente a tu cuenta bancaria.
        </Typography>
        <Typography variant="h5">¡Sin complicaciones!</Typography>
        <Typography variant="subtitle1">
          Olvídate del vuelto y los billetes falsos. Evita entrar en contacto
          con efectivo manipulado por otros.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PoliticaPrivacidad />
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  );
}
