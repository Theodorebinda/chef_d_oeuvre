import { useContext } from "react";
import { ContextGlobal } from "../../ContexGlobal";
export default function Parrains() {
  const { dataMentoree } = useContext(ContextGlobal);
  return (
    <div className="w-[200px] flex flex-col items-center border-r py-3 px-2  rounded-md text-[#5D5D5D] text-xs">
      <div className="flex items-center flex-col gap-3 ">
        <span>Parrains</span>
        <div className="m-[15%]">
          <img src="src\assets\img\Logos\image 1.png" alt="parrains" />
        </div>
      </div>
    </div>
  );
}
