import { useContext } from "react";
import { ContextGlobal } from "../../ContexGlobal";

function Groupe() {
  const { dataSessions } = useContext(ContextGlobal);

  return (
    <div className="flex justify-between items-center gap-2  border py-3 rounded-md px-6 w-[24%]">
      <span className="flex justify-center items-center py-4 w-11 rounded-full  bg-[#CEAE7F]">
        <img
          className="w-6"
          src="src\assets\img\Logos\Vector (10).svg"
          alt=""
        />
      </span>
      <div className="flex flex-col items-center">
        <span>
          {dataSessions?.map((session, index) => (
            <span key={index}>{session.groupes.length}</span>
          ))}{" "}
        </span>
        <span>Groupes</span>
      </div>
    </div>
  );
}
export default Groupe;
