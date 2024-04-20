import { Link } from "react-router-dom";

function HiroSection() {
  return (
    <>
      <div className="flex max-w-full  justify-between font-custom">
        <div className=" w-2/4 p-[20px]">
          <div className="justify-end">
            <img
              className="w-[200px] "
              src="src\assets\img\background\1A1_controlrocks-14.svg"
              alt=""
            />
          </div>
          <div className="mr-[30px] text-center">
            <h4 className="text-3xl font-bold pb-[20px]">
              {"Je suis étudiant et j'ai besoin d accompagnement"}
            </h4>
            <Link to="/singup">
              <button className="border  rounded-md px-[20px] py-[10px] hover:text-black  hover:font-bold bg-[#FFDF00]">
                {"Je m'inscrit"}
              </button>
            </Link>
          </div>
          <div className="flex  justify-between items-center pt-0">
            <img
              className="w-[150px] ml-[15%]"
              src="src\assets\img\background\1A1_controlrocks-14-2.svg"
              alt=""
            />
            <img
              className="w-[200px]"
              src="src\assets\img\background\1A1_controlrocks-08(1).svg"
              alt=""
            />
          </div>
        </div>
        <div className=" w-2/4 bg-[#FFFCEA] text-center ">
          <div className="justify-end">
            <img
              className="w-[150px] "
              src="src\assets\img\background\1A1_controlrocks-14-2.svg"
              alt=""
            />
          </div>
          <div className="mt-[5%]">
            <h4 className="text-3xl font-bold  p-[20px]">
              {" Je suis un professionnel et je souhaite m'engager"}
            </h4>
            <Link to="/singup">
              <button className="border rounded-md px-[20px] py-[10px]  hover:text-black  hover:font-bold bg-[#FFDF00]">
                Devenir Mentor
              </button>
            </Link>
          </div>
          <div className="flex  justify-between">
            <img
              className="w-[200px] mt-[6%]"
              src="src\assets\img\background\1A1_controlrocks-73.svg"
              alt=""
            />
            <img
              className="w-[200px] mr-[10%] mb-[8%]"
              src="src\assets\img\background\1A1_controlrocks-14.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default HiroSection;
