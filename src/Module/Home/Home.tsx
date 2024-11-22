import HomeContext from "./HomeContext/HomeContext";
import HomeImg from "./HomeImg/HomeImg";
import "./Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <HomeContext />
      <HomeImg />
    </section>
  );
};

export default Home;
