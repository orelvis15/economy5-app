import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  back: {
    height: "max-content",
    padding: "50px 10px 50px 10px",
  },
  phrase: {
    padding: "30px 10px 30px 10px",
    background: "#3f51b5",
  },
  author: {
    color: theme.palette.common.white,
    textAlign: "end",
  },
  text: {
    color: theme.palette.common.white,
  },
}));

const propTypes = {
    phrase: PropTypes.object.isRequired
};

function Divider({ phrase }) {
  const classes = useStyles();

  return (
    <Paper className={classes.back}>
      <Paper className={classes.phrase}>
        <Typography className={classes.text} variant="h4">
          Se le suele llamar script a una pieza de software que no necesita ser
          compilado para ser ejecutado.
        </Typography>
        <Typography className={classes.author} variant="h5">
          author
        </Typography>
      </Paper>
    </Paper>
  );
}
Divider.propTypes = propTypes;
export default Divider;
