import {
  title,
  description,
  mrAuto,
  mlAuto
} from "../../../material-kit-react";
import imagesStyles from "../../../CardElement/imagesStyles";

const imgRaised = imagesStyles.imgRaised;
const rounded = imagesStyles.imgRounded;
const imgFluid = imagesStyles.imgFluid;

const servicesStyle = {
  title,
  description,
  mrAuto,
  mlAuto,
  textCenter: {
    textAlign: "center!important"
  },
  office: {
    "& img": {
      margin: "20px 0px"
    }
  },
  imgRaised,
  rounded,
  imgFluid
};

export default servicesStyle;
