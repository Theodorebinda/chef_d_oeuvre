function NavDashBord() {
  return (
    <div className="flex flex-col rounded-xl py-3 bg-[#34519D] ">
      <div className="flex justify-start items-center my-2 ">
        <img
          className="px-4"
          src="src\assets\img\Logos\LogoDashBord\Vector (1).svg"
          alt=""
        />
        <h4 className="font-semibold text-[white] text-xs">Tableau de Bord</h4>
      </div>
      <div>
        <div className="flex flex-col gap-8 justify-start ml-9">
          <ul className="flex flex-col justify-start gap-3 mt-4 border-b  border-[#848484] pb-6 text-xs ">
            <li className="flex justify-start items-center gap-6 text-[white] ">
              <img
                className="w-[20px]"
                src="src\assets\img\Logos\LogoDashBord\Vector (2).svg"
                alt=""
              />{" "}
              <span>Relation</span>
            </li>
            <li className="flex justify-start items-center gap-6 text-[white] ">
              <img
                className="w-[20px]"
                src="src\assets\img\Logos\LogoDashBord\Vector (3).svg"
                alt=""
              />
              <span>Groupe</span>
            </li>
            <li className="flex justify-start items-center gap-6 text-[white]">
              <img
                className="w-[20px]"
                src="src\assets\img\Logos\LogoDashBord\Vector (4).svg"
                alt=""
              />
              <span>Mentor</span>
            </li>
            <li className="flex justify-start items-center gap-6 text-[white]">
              <img
                className="w-[20px]"
                src="src\assets\img\Logos\LogoDashBord\Vector (5).svg"
                alt=""
              />
              <span>Mentoré</span>
            </li>
          </ul>
          <ul className="flex flex-col justify-start gap-3 mb-4 border-b  border-[#848484] pb-6 text-xs">
            <li className="flex justify-start items-center gap-6 text-[white]">
              <img
                className="w-[20px]"
                src="src\assets\img\Logos\LogoDashBord\Vector (6).svg"
                alt=""
              />
              <span>Cours</span>
            </li>
            <li className="flex justify-start items-center gap-6 text-[white]">
              <img
                className="w-[20px]"
                src="src\assets\img\Logos\LogoDashBord\Vector (7).svg"
                alt=""
              />
              <span>Evenement</span>
            </li>

            <li className="flex justify-start items-center gap-6 text-[white]">
              <img
                className="w-[20px]"
                src="src\assets\img\Logos\LogoDashBord\Vector (8).svg"
                alt=""
              />
              <span>Ressources</span>
            </li>
            <li className="flex justify-start items-center gap-6 text-[white]">
              <img
                className="w-[20px]"
                src="src\assets\img\Logos\LogoDashBord\Vector (9).svg"
                alt=""
              />
              <span>Discussion</span>
            </li>
          </ul>
          <div className="flex gap-6 text-[white] items-center text-xs">
            <img
              className="w-[20px]"
              src="src\assets\img\Logos\LogoDashBord\Vector (1).png"
              alt=""
            />
            <span>Telecharger l’application</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavDashBord;
