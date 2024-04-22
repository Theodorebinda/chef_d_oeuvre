import MentorForm from "../components/singUp/Mentor";

function SingUpMentor() {
  return (
    <div className="flex   py-20 px-10 bg-[#F5F5F5]">
      <div className="w-[40%] ">
        <h1>MENTOR CONNECT</h1>
        <span>
          {
            "Met en relation des étudiants avec des mentors pour les accompagner dans leurs projets d'études et de vie professionnelle"
          }
        </span>
      </div>
      <div className="flex ">
        <MentorForm />
      </div>
    </div>
  );
}
export default SingUpMentor;
