function FaqSection() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center gap-y-6 ">
          <div className="w-[250px]">
            <img
              src="src\assets\img\background\1A1_controlrocks-70 (1).svg"
              alt=""
            />
          </div>
          <div className="w-[50%] text-center py-3  font-bold">
            <h4>QUESTION COURANTES</h4>
            <ul className="text-start pt-3  leading-normal]">
              <li className=" py-5 border-b border-black">
                Est ce vraiment gratuit ?
              </li>
              <li className=" py-5 border-b border-black">
                Combien de temps ça dure ?
              </li>
              <li className=" py-5 border-b border-black">
                Tout est digitalisé ?
              </li>
            </ul>
          </div>
          <div className="w-[250px]">
            <img
              src="src\assets\img\background\1A1_controlrocks-03.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default FaqSection;
