import React from "react";
//import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import { REACT_APP_URL_BASE_BACKEND } from "../../../config/index";

import Badge from "@material-ui/core/Badge";

import { withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

export default function SimpleMenu({ photoURL }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const CloseSession = async () => {
    setAnchorEl(null);
    //await (await fetch("http://localhost:5006/logout")).json();
    window.localStorage.clear();
    window.location.href = `${REACT_APP_URL_BASE_BACKEND}/logout`;
  };
  return (
    <div>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant="dot"
      >
        <Avatar
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          alt="Remy Sharp"
          src={photoURL}
          style={{
            cursor: "pointer",
            marginLeft: "10px",
          }}
        />
      </StyledBadge>
      {/* <ExpandMoreIcon /> */}

      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button> */}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={CloseSession}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
