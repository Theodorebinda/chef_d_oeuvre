import { Link } from "react-router-dom";

function HiroSection() {
  return (
    <>
      <div className="flex max-w-full flex-col md:flex-row justify-between font-custom ">
        <div className=" max-w-max flex-shrink-0 px-[20px] pt-5 md:w-2/4">
          <div className="justify-end">
            <img
              className="max-w-32 md:w-[200px] py-4"
              src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1714834663/1A1_controlrocks-14_tlhfpz.svg"
              alt=""
            />
          </div>
          <div className="mr-[30px] text-center">
            <h4 className="text-3xl font-bold pb-[20px]">
              {"Je suis étudiant et j'ai besoin d'accompagnement"}
            </h4>
            <Link to="/singUpMentoré">
              <button className="border  rounded-md px-[20px] py-[10px] hover:text-black  hover:font-bold bg-[#FFDF00]">
                {"Je m'inscrit"}
              </button>
            </Link>
          </div>
          <div className="flex  justify-between items-center pt-0">
            <img
              className="max-w-28 md:w-[200px] ml-[15%]"
              src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1714834663/1A1_controlrocks-14-2_edr27p.svg"
              alt=""
            />
            <img
              className=" max-w-48 transform scale-x-[-1] md:transform-none md:scale-x-[-1] "
              src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1714834663/1A1_controlrocks-08_1_p7nuwh.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" max-w-max bg-[#FFFCEA] text-center flex-shrink-0 md:w-2/4 ">
          <div className="justify-end">
            <img
              className="max-w-32 md:w-[150px]"
              src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1714834663/1A1_controlrocks-14-2_edr27p.svg"
              alt=""
            />
          </div>
          <div className="mt-[5%]">
            <h4 className="text-3xl font-bold  p-[20px]">
              {" Je suis un professionnel et je souhaite m'engager"}
            </h4>
            <Link to="/singUpMentor">
              <button className="border rounded-md px-[20px] py-[10px]  hover:text-black  hover:font-bold bg-[#FFDF00]">
                {"Devenir Mentor"}
              </button>
            </Link>
          </div>
          <div className="flex  justify-between">
            <img
              className="max-w-48 mt-[6%] transform scale-x-[-1] md:transform-none md:scale-x-[-1]"
              src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1714834665/1A1_controlrocks-73_pcm7js.svg"
              alt=""
            />
            <img
              className="w-[200px] mr-[10%] mb-[8%] "
              src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1714834663/1A1_controlrocks-14_tlhfpz.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default HiroSection;
