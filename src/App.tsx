import { Fragment } from "react/jsx-runtime";
import Header from "./components/Header/Header";
import HomePage from "./page/Home/HomePage";
import AboutPage from "./page/About/AboutPage";
import ServicesPage from "./page/Services/ServicesPage";
import PortfolioPage from "./page/Portfolio/PortfolioPage";
import ContactPage from "./page/Contact/ContactPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <HomePage />
      <AboutPage />
      <ServicesPage />
      <PortfolioPage />
      <ContactPage />
      <Footer />
    </Fragment>
  );
}

export default App;
