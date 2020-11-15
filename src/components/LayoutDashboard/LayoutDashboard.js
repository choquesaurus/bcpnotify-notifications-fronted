import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
//import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import Saldo from "./Saldo";
import { Outlet } from "react-router-dom";
import { messaging, database } from "../../firebase/init";
import MenuAvatarProfile from "./MenuUserAvatar/MenuUserAvatarProfile";

import {
  REACT_APP_URL_BASE_BACKEND,
  REACT_APP_URL_BASE,
  EncodeIdUser,
  DecodeIdUser,
} from "../../config/index";
import { EncodeNroCuenta } from "../../config/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UseContextDetailsUser from "./UseContextDetailsUser/UseContextDetailsUser";
import Helmet from "react-helmet";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [miSaldo, setmiSaldo] = useState("");
  const [detailsUser, setDetailsUser] = useState({});
  //const [mensaje, setMensaje] = useState("");
  async function getIdUser() {
    const request = await (
      await fetch(`${REACT_APP_URL_BASE_BACKEND}/user`, {
        credentials: "include",
      })
    ).json();
    return request;
  }
  useEffect(() => {
    (async () => {
      const validateSession = await (
        await fetch(`${REACT_APP_URL_BASE_BACKEND}/authenticate`, {
          credentials: "include",
        })
      ).json();
      if (validateSession.status === false) {
        window.location.href = REACT_APP_URL_BASE;
      }
      const { iduser } = await getIdUser();
      await database
        .collection("users")
        .doc(iduser)
        .onSnapshot(async (result) => {
          // const {
          //   details_user,
          //   //details_user: { nrocuenta },
          // } =  result.data();

          if (result.data().details_user !== undefined) {
            const details_user = result.data().details_user;
            //details_user: { nrocuenta },

            //let { nrocuenta = "" } = details_user;
            setDetailsUser(details_user);

            //CODIFICAR NRO DE CUENTA DEL EMISOR OR ACCOUNT CURRENT
            EncodeNroCuenta(details_user.nrocuenta);
            // window.localStorage.setItem(
            //   "minumerodecuenta",
            //   details_user.nrocuenta
            // );
            //console.log("DATA ONSNAPSHOT", details_user);
            await database
              .collection("users")
              .doc(iduser)
              .collection("accountbcp")
              .doc(details_user.nrocuenta)
              .onSnapshot((result) => {
                const { saldo } = result.data();
                setmiSaldo(saldo);
                //console.log(saldo);
              });
          }
        });

      messaging
        .getToken()
        .then(async (currentToken) => {
          if (currentToken) {
            console.log("TOKEN DE MENSAJERIA =>  ",currentToken)
            EncodeIdUser(iduser);
            const decode_iduser = DecodeIdUser();
            await database
              .collection("users")
              .doc(decode_iduser)
              .set({ token: currentToken }, { merge: true });
          } else {
            console.log("No existe un token ");
          }
        })
        .catch((error) => console.log("Ocurrio un error => " + error));

      messaging.onMessage((payload) => {
        //alert(JSON.stringify(payload.notification));
        //setMensaje(JSON.stringify(payload.data));
        //console.log("onMessage => ", payload);
        new Audio(process.env.REACT_APP_URL_SOUND_NOTIFICATION).play();
        toast.info(payload.data.body, {
          position: "top-center",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    })();
  }, []);

  // const CloseSession = async () => {
  //   //await (await fetch("http://localhost:5006/logout")).json();
  //   window.localStorage.clear();
  //   window.location.href = `${REACT_APP_URL_BASE_BACKEND}/logout`;
  // };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <ToastContainer />
      <Helmet>
        <meta name="description" content="Componente principal(Dashboard)" />
        <title>BCPNotify | Dashboard</title>
      </Helmet>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
          
            component="div"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Mi BcpNotify
          </Typography>

          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <MenuAvatarProfile photoURL={detailsUser.photoURL} />
          {/* <Avatar alt="Remy Sharp" src={detailsUser.photoURL} /> */}

          {/* <Button variant="contained" color="secondary" onClick={CloseSession}>
            Cerrar Sesion
          </Button> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {/* MENSAJE: <br />
        {mensaje} */}
        
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                data-aos="fade-right"
                //data-aos-offset="500"
                data-aos-duration="500"
                className={fixedHeightPaper}
              >
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                data-aos="fade-left"
                //data-aos-offset="500"
                data-aos-duration="500"
                className={fixedHeightPaper}
              >
                <Saldo
                  miSaldo={miSaldo}
                  miNumerodeCuenta={detailsUser.nrocuenta}
                />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper
                data-aos="fade-right"
                //data-aos-offset="500"
                data-aos-duration="500"
                className={classes.paper}
              >
                {/* {JSON.stringify(detailsUser)} */}

                {/*
                  OUTLET RENDERIZA LOS CHILDREN
                */}
                <UseContextDetailsUser.Provider value={{ detailsUser }}>
                  <Outlet />
                </UseContextDetailsUser.Provider>

                {/* <Orders /> */}
              </Paper>
            </Grid>
          </Grid>
          {/* <Box pt={4}>
            <Copyright />
          </Box> */}
        </Container>
      </main>
    </div>
  );
}
