import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/ui/Header/Header";
import HeaderLinks from "./components/ui/Header/HeaderLinks";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <HeaderLinks />
        <Header />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
