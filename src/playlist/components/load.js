import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const afterformStyle = afterformStyle => ({
  container: {
    display: "grid",
    height: "auto",
    minHeight: "100vh",
    gridTemplateRows: "15% 20% 5% 10% 10% 10% 5% 10% 5%",
    gridTemplateColumns: "5% 10% 15% 20% 20% 15% 10% 5%",
    backgroundColor: "#0c0c0c"
  },
  headerItem: {
    gridRow: "2 / span 1",
    gridColumn: "3 / span 4",
    placeSelf: "center"
  },
  subtextItem: {
    gridRow: "4 / span 1",
    gridColumn: "4 / span 2",
    placeSelf: "center"
  },
  circleItem: {
    gridRow: "6 / span 1",
    gridColumn: "4 / span 2",
    placeSelf: "center"
  },
  buttonItem: {
    gridRow: "8 / span 1",
    gridColumn: "4 / span 2",
    placeSelf: "center"
  },
  textHeader: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "5vmax",
    fontWeight: "800",
    color: "#4A7023"
  },
  textContent: {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: "2vmax",
    fontWeight: "400",
    color: "#C1CDC1"
  },
  button: {
    backgroundColor: "#00611C",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#4A7023"
    }
  },
  links: {
    fontFamily: "Montserrat",
    fontWeight: "800",
    textDecoration: "none",
    color: "#C1CDC1"
  },
  progress: {
    color: "#00611C"
  }
});

function Load(props) {
  const { classes } = props;

  let showCircle;
  if (props.showCircle) {
    showCircle = (
      <CircularProgress className={classes.progress} size={60} thickness={3} />
    );
  }

  let showButton;
  if (props.noReturn) {
    showButton = (
      <div class="animated flip">
        <Button
          size="medium"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          <Link className={classes.links} to="/steps">
            TRY AGAIN!
          </Link>
        </Button>
      </div>
    );
  }

  if (props.failure) {
    showButton = (
      <div className="animated flip">
        <Button
          size="medium"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          <Link className={classes.links} to="/steps">
            TRY AGAIN!
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.headerItem}>
        <p className={classes.textHeader}>{props.title}</p>
      </div>
      <div className={classes.subtextItem}>
        <p className={classes.textContent}>{props.content}</p>
      </div>
      <div className={classes.circleItem}>{showCircle}</div>
      <div className={classes.buttonItem}>{showButton}</div>
    </div>
  );
}

Load.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(afterformStyle)(Load);
