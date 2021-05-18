/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";
// core components
// import Header from "../Header/Header";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Parallax from "../Parallax/Parallax";
// import Footer from "../Footer/";
// sections for this page
// import HeaderLinks from "../Header/HeaderLinks";
// import Navbar from "../Header/Navigation";
import SectionDescription from "./Sections/SectionDescription.js";
// import SectionTeam from "./Sections/SectionTeam";
import SectionTeam from "./Sections/SectionTeam2";
import SectionServices from "./Sections/SectionServices.js";
// import SectionOffice from "./Sections/SectionOffice.js";

import SectionContact from "./Sections/SectionContact.js";

import aboutUsStyle from "./aboutUsStyle";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Parallax image={"about.jpg"} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>About Us</h1>
              <h4>
                Meet the amazing team behind this and find out more about how we
                work.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionDescription />
          <SectionTeam />
          <SectionServices />
        </div>
      </div>
    </div>
  );
}
