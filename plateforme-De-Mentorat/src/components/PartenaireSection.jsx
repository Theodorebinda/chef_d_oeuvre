import Partenaires from "./Partenaire";

function PartenaireSection() {
  return (
    <>
      <div className="bg-[#f6f6f6]">
        <div className="text-center mx-[20%] py-3">
          <h1 className="font-bold">NOS PARTENAIRES</h1>
          <p className="py-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eos
            ducimus dignissimos voluptas .
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
