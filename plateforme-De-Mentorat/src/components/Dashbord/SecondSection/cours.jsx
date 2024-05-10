import { useContext } from "react";
import { ContextGlobal } from "../../ContexGlobal";

function Cours() {
  const { dataSessions } = useContext(ContextGlobal);

  return (
    <div className="flex justify-between items-center gap-2  border py-3 rounded-md px-6  w-[23%]">
      <span className="flex justify-center items-center  p-3 w-12 rounded-full  bg-[#CEAE7F]">
        <img
          className="w-8"
          src="src\assets\img\Logos\reussite-sup 2.png"
          alt=""
        />
      </span>
      <div className="flex flex-col items-center">
        <span>
          {dataSessions?.slice(0, 1).map((session, index) => (
            <span key={index}>{session.cours.length}</span>
          ))}{" "}
        </span>
        <span>Cours</span>
      </div>
    </div>
  );
}
export default Cours;
