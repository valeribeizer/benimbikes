import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import About from "./components/About/About";
import OurServices from "./components/OurServices/OurServices";
import Prices from "./components/Prices/Prices";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <HomeScreen />
      <About />
      <OurServices />
      <Prices />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
