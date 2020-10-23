import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  //Toolbar,
  Typography,
  Box,
  Tooltip,
} from "@material-ui/core";
import Signin from "../Signin/Signin";
const useStyles = makeStyles({
  itemsnavtitles: {
    textDecoration: "none",
    color: "black",
  },
});
export default function Header() {
  const clasess = useStyles();
  return (
    <>
      <div style={{ height: "75px" }}>
        <AppBar color="transparent" style={{ boxShadow: "none" }}>
          <Box className="menu">
            <Box className="logomenu">{/* <TemporaryDrawer /> */}</Box>
            <Box className="menutitle">
              <Box className="navitems">
                <Signin />
              </Box>

              <Box className="navitems">
                <Link to="/proyects" className={clasess.itemsnavtitles}>
                  <Tooltip title="Create una cuenta" placement="bottom" arrow>
                    <Typography className="animate__animated  animate__fast animate__fadeInDown">
                      SignUp
                    </Typography>
                  </Tooltip>
                </Link>
              </Box>

              <Box className="navitems">
                <Link to="/community" className={clasess.itemsnavtitles}>
                  <Tooltip title="Soporte e Ayuda" placement="bottom" arrow>
                    <Typography className="animate__animated animate__fast animate__fadeInDown">
                      Soporte
                    </Typography>
                  </Tooltip>
                </Link>
              </Box>
            </Box>
          </Box>
        </AppBar>
      </div>
    </>
  );
}
