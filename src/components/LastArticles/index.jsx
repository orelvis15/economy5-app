import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ScrollAnimation from "react-animate-on-scroll";
import "./style.css";
import "animate.css/animate.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  card: {
    maxWidth: 600,
    margin: 10,
  },
  info: {
    textAlign: "start",
  },
  author: {
    display: "flex",
    alignItems: "center",
    marginStart: "10px",
  },
  authorPhoto: {
    width: 50,
    height: 50,
  },
  tag: {
    display: "inline-block",
    padding: "2px 8px 2px 8px",
    borderRadius: "50px",
    margin: "10px",
    border: "2px solid #aaa",
  },
}));

const propTypes = {
  lastArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const imgUrl = process.env.imgUrl || "http://localhost:3000/images/";

function LastArticles({ lastArticles }) {
  const classes = useStyles();

  function tags(theTags) {
    return theTags.map((value) => (
      <Grid>
        <a href className={classes.tag}>
          <Typography variant="body2" color="textSecondary" component="p">
            {value}
          </Typography>
        </a>
      </Grid>
    ));
  }

  function generate(theList) {
    return theList.map((value) => (
      <ScrollAnimation animateIn="flipInY">
        <Grid>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="complex"
                height="240"
                image={imgUrl + value.imgs[0]}
                title={"Primer paso de " + value.title}
              />
              <CardContent className={classes.info}>
                <Typography gutterBottom variant="h5" component="h2">
                  {value.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {value.abstract}
                </Typography>
              </CardContent>
            </CardActionArea>
            <div className={classes.author}>
              <Avatar>
                <img
                  className={classes.authorPhoto}
                  alt="complex"
                  src={imgUrl + value.authorPhoto}
                />
              </Avatar>
              <Typography variant="body2" component="p">
                {value.author}
              </Typography>
            </div>
            <CardActions>
              <Button size="small" color="primary">
                Compartir
              </Button>
              <Button size="small" color="primary">
                Leer más...
              </Button>
            </CardActions>
            <div className={classes.tags}>
              <Grid container>{tags(value.tags)}</Grid>
            </div>
          </Card>
        </Grid>
      </ScrollAnimation>
    ));
  }

  return (
    <div className="lastArtBack">
      <Typography variant="h3">ÚLTIMAS PUBLICACIONES</Typography>
      <Grid justify="center" container>
        {lastArticles != null ? generate(lastArticles) : <div></div>}
      </Grid>
    </div>
  );
}
LastArticles.propTypes = propTypes;
export default LastArticles;
