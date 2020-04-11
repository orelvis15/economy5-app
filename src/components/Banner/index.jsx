import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  welcome: {
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 50,
  },
  actions: {
    textAlign: "center",
  },
  
}));

const propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

function Banner({ isLogin }) {
  const classes = useStyles();

  return (
    <div className="spacer1">
      <div className={classes.welcome}>
        <Typography variant="h2">BIENVENIDO</Typography>
        <Typography variant="h5">A</Typography>
        <Typography variant="h4">ECONOMÍA EN 5 PASOS</Typography>
      </div>
      {!isLogin ? (
        <div className={classes.actions}>
          <Button onClick={()=>{alert('hello world')}} variant="contained" size="large" color="primary">
            Iniciar
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
Banner.propTypes = propTypes;
export default Banner;
