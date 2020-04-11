import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import Grid from "@material-ui/core/Grid";
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 400,
    },
    background: theme.palette.common.white,
    textAlign: "center",
  },
  form: {
    padding: "50px 0px 50px 0px",
  },
  medias: {
    alignItems: "center",
    padding: "20px 50px 0px 20px",
  },
  footer: {
    height: 80,
    padding: "50px 0px 0px 0px",
    background: "#303030",
  },
  textF: {
    color: theme.palette.common.white,
    textJustify: true,
  },
  iconF: {
    color: theme.palette.common.white,
  },
  contactsContainer: {
    minHeight: "max-content",
    padding: "50px 20px 50px 20px",
    backgroundColor: "#424242",
  },
  paragraph: {
    textAlign: "justify",
    maxWidth: 400,
    padding: "20px 50px 0px 20px",
  },
  emailContainer:{
    display: 'flex'
  }
}));

export default function MainForm() {
  const classes = useStyles();
  var year = new Date();
  year = year.getFullYear();

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <Typography variant="h3">CONTÁCTENOS</Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <div>
            <TextField required label="Nombre" variant="outlined" />
          </div>
          <div>
            <TextField required label="Email" variant="outlined" />
          </div>
          <div>
            <TextField required label="Asunto" variant="outlined" />
          </div>
          <div>
            <TextField
              required
              label="Mensage"
              variant="outlined"
              multiline
              rows="6"
            />
          </div>
          <Button
            onClick={() => {
              alert("hello world");
            }}
            variant="contained"
            size="large"
            color="primary"
          >
            Enviar Opinión
          </Button>
        </form>
      </div>
      <Grid container justify="center" className={classes.contactsContainer}>
        <Grid className={classes.paragraph}>
          <Typography className={classes.textF} variant="h5" component="p">
            ECONOMÍA EN 5 PASOS
          </Typography>
          <Typography className={classes.textF} variant="body2" component="p">
            Esta web ha sido destinada a la mera causa de compartir artículos
            útiles relacionados con la economía política del mundo. No se hace
            responsable por la interpretación de estos y se compromete a no
            permitir discriminación de ningún tipo.
          </Typography>
        </Grid>
        <Grid className={classes.medias}>
          <Typography className={classes.textF} variant="h5">
            REDES SOCIALES
          </Typography>
          <div>
            <IconButton size="large">
              <FacebookIcon className={classes.iconF} fontSize="large" />
            </IconButton>
            <IconButton size="large">
              <TwitterIcon className={classes.iconF} fontSize="large" />
            </IconButton>
            <IconButton size="large">
              <LinkedInIcon className={classes.iconF} fontSize="large" />
            </IconButton>
          </div>
        </Grid>
        <Grid className={classes.paragraph}>
          <Typography className={classes.textF} variant="body2" component="p">
            Si desea participar como colaborador puede escribirnos al siguiente
            email:
          </Typography>
          <div className={classes.emailContainer}>
            <EmailIcon className={classes.iconF}/>
            <Typography className={classes.textF} variant="body2" component="p">
              economia5pasos@gmail.com
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div className={classes.footer}>
        <Typography className={classes.textF} variant="body2" component="p">
          TODOS LOS DERECHOS RESERVADOS {year}
        </Typography>
      </div>
    </div>
  );
}
