import { useContext } from "react";
import { ContextGlobal } from "../../ContexGlobal";

export default function Contacts() {
  const { dataSessions } = useContext(ContextGlobal);
  console.log(dataSessions.ressources);

  return (
    <div className="flex justify-between items-center gap-2  border py-3 rounded-md px-6  w-[23%]">
      <span className="w-12">
        <img src="src\assets\img\Logos\Groupe 80.png" alt="" />
      </span>
      <div className="flex flex-col items-center">
        <span>
          {dataSessions?.map((session, index) => (
            <span key={index}>{session.contacts.length}</span>
          ))}{" "}
        </span>
        <span>Contact</span>
      </div>
    </div>
  );
}
