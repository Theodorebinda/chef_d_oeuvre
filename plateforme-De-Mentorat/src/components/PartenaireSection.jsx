import Partenaires from "./Partenaire";

function PartenaireSection() {
  return (
    <>
      <div className="bg-[#f6f6f6] gap-y-6">
        <div className="text-center mx-[20%] py-3">
          <span className="font-bold text-2xl">NOS PARTENAIRES</span>
          <p className="py-3 text-xs">
            Merci à nos partenaires pour leur soutien, leur engagement et leur
            confiance..
          </p>
        </div>
        <div className="py-6">
          <Partenaires />
        </div>
      </div>
    </>
  );
}
export default PartenaireSection;
