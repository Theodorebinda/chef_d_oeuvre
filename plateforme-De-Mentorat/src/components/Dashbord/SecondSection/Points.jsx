import { useContext } from "react";
import { ContextGlobal } from "../../ContexGlobal";

export default function Points() {
  const { dataSessions } = useContext(ContextGlobal);
  console.log(dataSessions);
  return (
    <div className="flex justify-between items-center gap-6  border py-3 px-6 rounded-md  w-[23%]">
      <span className="w-12">
        <img src="src\assets\img\Logos\LogoDashBord\Groupe 82 1.svg" alt="" />
      </span>
      <div className="flex flex-col items-center">
        <span>
          {dataSessions?.slice(0, 1).map((point, index) => (
            <span key={index}>{point.points}</span>
          ))}{" "}
        </span>
        <span>Point</span>
      </div>
    </div>
  );
}
