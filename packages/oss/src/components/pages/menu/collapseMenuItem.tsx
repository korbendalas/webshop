import React, { useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MailIcon from "@material-ui/icons/Mail";
import { Collapse } from "@material-ui/core";
import List from "@material-ui/core/List";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { NavLink, useRouteMatch } from "react-router-dom";

export const CollapseMenuItem = ({ routes, menuToggle, itemName }) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      nested: {
        paddingLeft: theme.spacing(4),
      },
    }),
  );
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  let { path, url } = useRouteMatch();

  useEffect(() => {
    if (toggle) {
      setToggle(false);
    }
  }, [menuToggle]);

  return (
    <>
      {" "}
      <ListItem button onClick={() => setToggle(prev => !prev)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={itemName} />
        {toggle ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={toggle} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {routes.map((item, index) => (
            <NavLink
              key={index}
              exact
              to={`${item.link}`}
              // to={`${url}${item.link}`}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              <ListItem button key={item.title} className={classes.nested}>
                <ListItemIcon>{menuToggle ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Collapse>
    </>
  );
};
