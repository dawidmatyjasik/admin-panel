import React from "react";
import { makeStyles } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    // maxWidth: 345,
    border: "1px solid rgba(0,0,0,0.1)",
    backgroundColor: "transparent",
    flexBasis: "50%",
    "& > a": {
      color: "black",
    },
  },
  media: {
    // height: 140,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "2vw",
    margin: "10px 10px 0 10px",
    minHeight: "40%",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CardActionArea className={classes.card}>
        <Link to="/panel/edytuj/dane-osobowe">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              WPROWADŹ DANE UŻYTKOWNIKA
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </Link>
      </CardActionArea>

      <CardActionArea className={classes.card}>
        <Link to="/panel/dodaj/projekt">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              PROJEKTY
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </Link>
      </CardActionArea>

      <CardActionArea className={classes.card}>
        <Link to="/panel/kadra">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              KADRA
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActionArea className={classes.card}>
        <Link to="/panel/wyplaty">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              WYPŁATY DLA UP
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </div>
  );
}
