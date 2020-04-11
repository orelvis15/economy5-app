import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import img1 from "../../assets/services/1.png";
import img2 from "../../assets/services/2.png";
import img3 from "../../assets/services/3.png";
import img4 from "../../assets/services/4.png";
import { Grid } from "@material-ui/core";

const imgArr = [img1, img2, img3, img4];
const titleArr = [
  "INFORMACIÓN CONFIABLE",
  "USO SENCILLO",
  "TOTALMENTE GRATUITO",
  "CONTAMOS CONTIGO",
];
const subtitleArr = [
  "Nuestro contenido es suministrado por expertos en las materias",
  "La navegación por el sitio se logra ser intuitiva y agradable",
  "Toda la información se brinda de manera gratuita y libre",
  "Tu opinión es importante. Haz saber los temas de tu interés",
];

const useStyles = makeStyles((theme) => ({
  item:{
    margin: "0px 20px 0px 20px"
  }
}));

export default function OurService() {
  const classes = useStyles();
  
  function generateService() {
    return [0, 1, 2, 3].map((value) => (
      
      <ScrollAnimation animateIn="flipInY">
      <Grid>
          <div  className={classes.item}>
            <img alt="complex" src={imgArr[value]} />
            <Typography gutterBottom variant="h5" component="h2">{titleArr[value]}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {subtitleArr[value]}
            </Typography>
          </div>
      </Grid>
      </ScrollAnimation>
    ));
  }

  return (
    <div className="spacer3">
      <Typography variant="h3">NUESTROS SERVICIOS</Typography>
      <Grid justify="center" container>{generateService()}</Grid>
    </div>
  );
}
