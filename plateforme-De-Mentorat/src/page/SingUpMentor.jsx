import MentorForm from "../components/singUp/Mentor";
import Footer from "../components/landingPage/Footer";

function SingUpMentor() {
  return (
    <div className="relative ">
      <div className="flex justify-between  py-20 px-10  bg-[#F5F5F5]  ">
        <div className="flex  flex-col gap-5 ml-6 mx-auto w-[40%] m-[30px] pt-20   sticky top-0   h-[10px]">
          <h1 className="font-bold text-3xl ">MENTOR CONNECT</h1>
          <span className="text-2xl  border-b-4  border-[#8f9ec6] pb-6">
            <span className="font-semibold ">
              {"Met en relation des étudiants avec des mentors"}
            </span>{" "}
            <span>pour les accompagner dans leurs</span>
            <span className="font-semibold">
              {" projets d'études et de vie professionnelle"}
            </span>
          </span>
        </div>
        <div className="">
          <MentorForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SingUpMentor;
