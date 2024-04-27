import FistSection from "./FistSection/FistSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";

export default function Main() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full bg-white">
      <div className="w-full">
        <FistSection />
      </div>
      <div className="w-full">
        <SecondSection />
      </div>
      <div className="w-full ">
        <ThirdSection />
      </div>
    </div>
  );
}
