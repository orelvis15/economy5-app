import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const propTypes = {
  openMenu: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

function TemporaryDrawer({ openMenu, toggleDrawer }) {
  const classes = useStyles();

  function list() {
    if (openMenu) {
      return (
        <div
          className={classes.list}
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          role="presentation"
        >
          <List>
            {["Menu1", "Menu2", "Menu13", "Menu4", "Menu5"].map((text, index) => (
              <ListItem button key={text} onClick={(event) => imprime(text)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );
    }
  }

  function imprime(text) {
    alert(text);
  }

  return (
    <Drawer open={openMenu} onClose={toggleDrawer}>
      {list()}
    </Drawer>
  );
}

TemporaryDrawer.propTypes = propTypes;

export default TemporaryDrawer;
