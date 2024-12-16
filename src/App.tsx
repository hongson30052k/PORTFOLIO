import { Fragment } from "react/jsx-runtime";
import Header from "./components/Header/Header";
import HomePage from "./page/Home/HomePage";
import AboutPage from "./page/About/AboutPage";
import PortfolioPage from "./page/Portfolio/PortfolioPage";
import ContactPage from "./page/Contact/ContactPage";
import Footer from "./components/Footer/Footer";
import SkillsPage from "./page/Skills/SkillsPage";

function App() {
  return (
    <Fragment>
      <Header />
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <PortfolioPage />
      <ContactPage />
      <Footer />
    </Fragment>
  );
}

export default App;
