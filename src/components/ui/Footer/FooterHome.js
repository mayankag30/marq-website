import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
// import Mail from "@material-ui/icons/Mail";
// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Button from "../CustomButtons/Button";
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CustomInput from "components/CustomInput/CustomInput.js";

// import bg7 from "assets/img/bg7.jpg";

import styles from "./preFooter";

const useStyles = makeStyles(styles);

export default function SectionPreFooter() {
  const classes = useStyles();

  const submitHandler = (e) => {
    e.preventDefault();
  } 

  return (
    <div>
      <div
        className={classNames(
          classes.socialLine,
          classes.textCenter,
          classes.dark
        )}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={12}>
              <h4 className={classes.title}>Thank you for your support!</h4>
            </GridItem>
            <Button
              color="twitter"
              round
              href="#pablo"
              onClick={submitHandler}
            >
              <i className="fab fa-twitter" /> Twitter
            </Button>
            <Button
              color="facebook"
              round
              href="#pablo"
              onClick={submitHandler}
            >
              <i className="fab fa-facebook" /> Facebook
            </Button>
            <Button
              color="google"
              round
              href="#pablo"
              onClick={submitHandler}
            >
              <i className="fab fa-google-plus-g" /> Google
            </Button>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
