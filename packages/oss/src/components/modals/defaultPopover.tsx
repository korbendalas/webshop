import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";

import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(1),
      fontSize: "13px",
      color: "black",
      textAlign: "center",
    },
    popover: {
      display: "flex",
      flexDirection: "column",
    },
  }),
);

export const DefaultPopover = ({ text = "", anchorElement, open, onConfirm, onReject }) => {
  const classes = useStyles();

  const id = open ? "simple-popover" : undefined;
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorElement}
      onClose={onReject}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <div className={classes.popover}>
        <Typography className={classes.typography}>{text}</Typography>
        <div>
          <Button onClick={() => onConfirm?.()}>
            <CheckIcon style={{ color: green[500] }} fontSize="small" />
          </Button>
          <Button onClick={() => onReject?.()} color="default">
            <ClearIcon fontSize="small" />
          </Button>
        </div>
      </div>
    </Popover>
  );
};
