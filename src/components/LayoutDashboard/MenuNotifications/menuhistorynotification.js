import React from "react";
// import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import TemplateList from  "./templatelist"


export default function MenuHistoryNotifications({notifications}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div aria-controls="simple-menu" onClick={handleClick} aria-haspopup="true">
        <Badge  badgeContent={notifications.length} color="secondary">
          <NotificationsIcon  style={{color:"white"}} />
        </Badge>
        
      </div>

      <Menu
        id="simple-menu"
      
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* {
          notifications.map(({data},index,arr)=>(
            <>
              <MenuItem key={index} >{data}</MenuItem>
            </>
          ))
        }
        <MenuItem dense={true} component="ul"> <TemplateList/></MenuItem>
        */}
        <div>
          <TemplateList notifications={notifications}/>

        </div>
        {/* <TemplateList ref/> */}

        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}
