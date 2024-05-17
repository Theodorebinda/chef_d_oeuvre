function FaqSection() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center gap-y-6 ">
          <div className="w-[250px]">
            <img
              className="max-w-40"
              src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1714834664/1A1_controlrocks-70_1_y864ip.svg"
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
          <div className="w-[250px] hidden md:block">
            <img
              src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1714834663/1A1_controlrocks-03_qzrgcm.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default FaqSection;
