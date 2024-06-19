import BoxElement from "./components/ReactScroll/BoxElement";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Generator from "./components/Generator/Generator";
import Navbar from "./components/Navbar/Navbar";
import MoreInfo from "./components/MoreInfo/MoreInfo";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <BoxElement name="home" />
      <Navbar />
      <Welcome />
      <BoxElement name="about" />
      <About />
      <BoxElement name="generator" />
      <Generator />
      <BoxElement name="moreInfo" />
      <MoreInfo />
      <BoxElement name="contact" />
      <Footer />
    </>
  );
}
