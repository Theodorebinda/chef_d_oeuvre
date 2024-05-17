import { Link } from "react-router-dom";
import Footer from "../landingPage/Footer";

function SingUpAll() {
  return (
    <>
      {" "}
      <div className="pt-20 pb-3 md:bg-[#f6f6f6] md:h-screen">
        <div className="flex flex-col justify-center items-center p-8 rounded-lg drop-shadow-lg md:bg-white  md:mx-auto md:w-[70%]">
          <div className=" flex flex-col items-center text-center  p-8">
            <h4 className="font-bold text-2xl p-6">
              {"Hello, bienvenue sur Mentor Connect !"}
            </h4>
            <span className="text-xs">
              {"Pour bien commencer, dites-nous si vous êtes ..."}
            </span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-between gap-3 md:gap-20 py-6 items-center">
            <Link className="flex flex-col items-center " to="/singUpMentoré">
              <div className="w-[150px] md:w-[200px] md:h-[150px] border px-3 border-sky-500 rounded-sm">
                <img
                  className="max-w-20 m-auto"
                  src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1714834665/1A1_controlrocks-77_dhobs8.svg"
                  alt="Mentoré"
                />
              </div>
              <span className="text-xs">Mentoré</span>
            </Link>
            <Link className="flex flex-col items-center " to="/singUpMentor">
              <div className="w-[150px] md:w-[200px] border p-3 h-[120px] md:h-[150px] border-sky-500 rounded-sm">
                <img
                  className="max-w-28  md:w-[150px] m-auto"
                  src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1714834668/1A1_controlrocks-762_c5kkoq.svg"
                  alt="Mentor"
                />
              </div>

              <span className=" text-xs">Mentor</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingUpAll;
