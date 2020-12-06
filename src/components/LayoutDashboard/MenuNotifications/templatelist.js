import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function TemplateList({ notifications }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {notifications.reverse().map(({ body, url,fecha }, index, arr) => (
        <div key={index + "adsad"}>
          <ListItem
            alignItems="flex-start"
            style={{cursor:"pointer"}}
            onClick={() => {
              window.location.href = url;
            }}
          >
            <ListItemAvatar>
              <Avatar
                alt={body.substr(0, 1)}
                src="/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Transferencia"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {fecha}
                  </Typography>
                  <br />
                  {body}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}
