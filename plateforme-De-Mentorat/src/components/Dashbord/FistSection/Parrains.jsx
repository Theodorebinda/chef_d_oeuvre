import { useContext } from "react";
import { ContextGlobal } from "../../ContexGlobal";
export default function Parrains() {
  const { dataMentoree } = useContext(ContextGlobal);
  return (
    <div className="w-[250px] p-3 ">
      {dataMentoree.map((mentee, index) => (
        <div
          key={index}
          className=" flex flex-col items-center border py-3 px-2 gap-2 rounded-md"
        >
          <span>Parrains</span>
          <div className="m-[15%]">
            <img src="src\assets\img\Logos\image 1.png" alt="parrains" />
          </div>
        </div>
      ))}
    </div>
  );
}
