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

const imgUrl = process.env.imgUrl || "http://localhost:3000/images/";

const useStyles = makeStyles((theme) => ({
  
  card: {
    maxWidth: 345,
    margin: 10,
  },
  info: {
    textAlign: "start",
  },
}));

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function ArticleListMain({ list }) {
  const classes = useStyles();

  function generate(theList) {
    return theList.map((value) => (
      <Grid>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="complex"
              height="140"
              image={imgUrl + value.img}
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
          <CardActions>
            <Button size="small" color="primary">
              Compartir
            </Button>
            <Button size="small" color="primary">
              Leer más...
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ));
  }

  return (
    <div className={classes.root}>
      <Typography className="title" variant="h3">
        ARTÍCULOS
      </Typography>
      <Grid justify="center" container>
        {list.length != null ? generate(list) : <div></div>}
      </Grid>
    </div>
  );
}

ArticleListMain.propTypes = propTypes;

export default ArticleListMain;
