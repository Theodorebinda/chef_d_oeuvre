import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import HiroSection from "../components/HiroSection";
import PartenaireSection from "../components/PartenaireSection";

function Home() {
  return (
    <div className="pt-16">
      <HiroSection />
      <AboutSection />
      <PartenaireSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default Home;
