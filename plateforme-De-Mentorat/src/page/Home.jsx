import { useContext } from "react";
import AboutSection from "../components/landingPage/AboutSection";
import FaqSection from "../components/landingPage/FaqSection";
import Footer from "../components/landingPage/Footer";
import HiroSection from "../components/landingPage/HiroSection";
import PartenaireSection from "../components/landingPage/PartenaireSection";
import { ContextGlobal } from "../components/ContexGlobal";

function Home() {
  const { dataMentor } = useContext(ContextGlobal);
  console.log(dataMentor);
  return (
    <div className="pt-12">
      <HiroSection />
      <AboutSection />
      <PartenaireSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default Home;
