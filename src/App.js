import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
// import Header from "./components/ui/Header/Header";
// import HeaderLinks from "./components/ui/Header/HeaderLinks";
import Navbar from "./components/ui/Header/Navigation";
// import Footer from "./components/ui/Footer/FooterHome";
import SectionPreFooter from "./components/ui/Footer/FooterHome";
import CardElement from "./components/ui/CardElement/CardElement";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <CardElement />
        <SectionPreFooter />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
