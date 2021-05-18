/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";
// core components
// import Header from "../ui/Header/Header";
// import Footer from "../ui/Footer/Footer";
import GridContainer from "../ui/Grid/GridContainer";
import GridItem from "../ui/Grid/GridItem";
import Button from "../ui/CustomButtons/Button";
// import HeaderLinks from "../ui/Header/HeaderLinks";
// import Parallax from "../ui/Parallax/Parallax";
import SectionContacts from "../ui/ContactUs/ContactUs";

// Sections for this page
import SectionProduct from "./Sections/SectionProduct";
import SectionTestimonials from "../Reviews/SectionTestimonials";
import ResponsivePlayer from "../ui/VideoPlayer/ResponsivePlayer";
import landingPageStyle from "./landingPageStyle";

// Sections for this page
// import SectionProduct from "./Sections/SectionProduct";
import SectionTeam from "../ui/AboutUsPage/Sections/SectionTeam2";
// import SectionWork from "./Sections/SectionWork";
import SectionServices from "../ui/AboutUsPage/Sections/SectionServices";
const useStyles = makeStyles(landingPageStyle);
import QR from "../../assets/images/qr.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function LandingPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <br />
          <h1 className={classes.title}>MARQUEDO</h1>
          <h4>
            Every landing page needs a small description after the big bold
            title, that{"'"}s why we added this text here. Add here all the
            information that can make you or your product create the first
            impression.
          </h4>
          <br />
          <AnchorLink href="#aboutUs" style={{ textDecoration: "none" }}>
            <Button color="warning" size="lg" target="_blank">
              About Us
            </Button>
          </AnchorLink>
        </GridItem>
        <br />
        <GridItem xs={12} sm={6} md={6}>
          <div style={{ textAlign: "center" }}>
            <h7>
              Scan the QR code and<br></br> WhatsApp us a {"'"}Hi{"'"} today
            </h7>
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <img src={QR} style={{ justifyContent: "center" }}></img>
          </div>
        </GridItem>
      </GridContainer>

      <br />
      <br />
      <br />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ResponsivePlayer />

          <SectionProduct />
          <br />
          <br />
          <br />
          <SectionTestimonials />

          <br />
          <br />
          <br />
          <section id="aboutUs">
            <SectionTeam />
          </section>

          <br />
          <br />
          <br />
          <SectionServices />
          <br />
          <br />
          <br />
          <SectionContacts />
        </div>
      </div>
    </div>
  );
}

{
  /* <Parallax image={"home2.jpg"} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <br />
              {/* <br /> */
}
{
  /* <br /> */
}
// <h1 className={classes.title}>MARQUEDO</h1>
// <h4>
//   Every landing page needs a small description after the big bold
//   title, that{"'"}s why we added this text here. Add here all the
//   information that can make you or your product create the first
//   impression.
// </h4>
// <br />
{
  /* <ScrollL activeClass="active" to="playersection" spy={true} smooth={true} duration={1000}>scroll</ScrollL> */
}
//         <AnchorLink
//           href="#videoPlayer"
//           style={{ textDecoration: "none" }}
//         >
//           <Button
//             color="danger"
//             size="lg"
//             // href="/about/:playersection"
//             target="_blank"
//           >
//             <i className="fas fa-play" />
//             Watch video
//           </Button>
//         </AnchorLink>
//       </GridItem>
//       <br />
//       <GridItem xs={12} sm={6} md={6}>
//         <div style={{ textAlign: "center" }}>
//           <h7>
//             Scan the QR code and<br></br> WhatsApp us a {"'"}Hi{"'"} today
//           </h7>
//         </div>
//         <br />
//         <div style={{ textAlign: "center" }}>
//           <img src={QR} style={{ justifyContent: "center" }}></img>
//         </div>
//       </GridItem>
//     </GridContainer>
//   </div>
// </Parallax> */}
