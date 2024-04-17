import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partenaires from "../data/partenaire.json";

function Partenaires() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider {...settings} className="flex items-center p-[20px]">
      {partenaires?.map((partenaire, index) => (
        <div key={index} className="h-[]">
          <img src={partenaire.logo} alt={partenaire.name} />
        </div>
      ))}
    </Slider>
  );
}

export default Partenaires;
