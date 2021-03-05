import image from "../../Assets/pic.jpg";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./Cards.module.css";
import Stars from "../Stars/Stars";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },

  "&:hover": {
    backgroundColor: "rgb(7, 177, 77, 0.42)",
  },
});

const Cards = () => {
  const [hover, setHover] = useState(false);
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Card className={classes.root}>
        <CardActionArea>
          <div id={styles.imageCentre}>
            <CardMedia
              component="img"
              alt=""
              className={styles.image}
              image={image}
              title="Contemplative Reptile"
            />

            {/* <CardMedia component={<Stars />} /> */}

            <div id={styles.stars}>
              <Stars />
            </div>

            <FavoriteBorderIcon fontSize="large" id={styles.heart} />
          </div>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              id={styles.textCentre}
            >
              Printed round Neck
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <div class="text">
                <p id={styles.price}>
                  <b>Rs. 454</b>
                  <strike>Rs. 699</strike>
                  <span style={{ color: "#FF7F7F" }}> (35 % off) </span>
                </p>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Cards;
