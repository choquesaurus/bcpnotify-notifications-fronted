// export default () => {
//   const contexto = useContext(ContextMyListTransfer);

//   return (
//     <>
//       Todas las transferencias gaaa xdd
//       {JSON.stringify(contexto.filter_outgoing_transfer)}

//     </>
//   );
// };

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
//import FavoriteIcon from "@material-ui/icons/Favorite";
//import PersonPinIcon from "@material-ui/icons/PersonPin";
//import PhoneIcon from "@material-ui/icons/Phone";
//import HelpIcon from "@material-ui/icons/Help";
//import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
//import ThumbDown from "@material-ui/icons/ThumbDown";
//import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ContextMyListTransfer from "../ContextMyListTransfer/ContextMyListTransfer";
import TableListTransfers from "../TableListTransfers/TableListTransfers";
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
  const contexto = useContext(ContextMyListTransfer);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
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
          <Tab label="All" icon={<MonetizationOnIcon />} {...a11yProps(0)} />
          <Tab
            label="Entrantes"
            icon={<MonetizationOnIcon />}
            {...a11yProps(1)}
          />
          <Tab
            label="Salientes"
            icon={<MonetizationOnIcon />}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TableListTransfers value={contexto.data} option="all" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableListTransfers
          value={contexto.filter_incoming_transfer}
          option="Entrante"
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TableListTransfers
          value={contexto.filter_outgoing_transfer}
          option="Saliente"
        />
      </TabPanel>
    </div>
  );
}
