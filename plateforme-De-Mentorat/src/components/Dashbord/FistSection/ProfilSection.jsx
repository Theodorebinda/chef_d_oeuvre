import { useContext } from "react";
import { ContextGlobal } from "../../ContexGlobal";
import { calculerPourcentageRemplissage } from "../../../utiles/calculeRemplissage";

export default function ProfileSection() {
  const { dataMentoree } = useContext(ContextGlobal);

  // Calcul du pourcentage de remplissage du profil du mentoré
  const pourcentageRemplissage = calculerPourcentageRemplissage(dataMentoree);
  return (
    <div className="w-full border-l py-3 px-6 rounded-md  ">
      <div className="flex flex-col items-center gap-2">
        <span className="text-[#5D5D5D] text-xs">{dataMentoree.prenom}</span>
        <div className="w-16 h-16 border border-[#34519D] rounded-full flex items-center justify-center">
          <img
            className="object-cover h-full w-full rounded-full"
            src={dataMentoree.avatar}
            alt="profil"
          />
        </div>

        <span className="text-[#5D5D5D] text-xs ">
          Completer a {pourcentageRemplissage.toFixed()}%
        </span>
        <div className="flex justify-between gap-2">
          <button className="rounded border  border-[#34519D] shadow-xl text-[#34519D] text-xs px-2 py-1">
            {"modifier"}
          </button>
          <button className="rounded border  border-[#34519D] shadow-xl text-[#34519D] text-xs px-2 py-1">
            {"consulter"}
          </button>
        </div>
      </div>
    </div>
  );
}
