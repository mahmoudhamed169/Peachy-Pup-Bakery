import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import HowToWork from "./Components/HowToWork/HowToWork";
import Recipes from "./Components/Recipes/Recipes";
import Testymonials from "./Components/Testymonials/Testymonials";

function App() {
  return (
    <>
      <Hero />
      <HowToWork />
      <AboutUs />
      <Recipes />
      <Testymonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
