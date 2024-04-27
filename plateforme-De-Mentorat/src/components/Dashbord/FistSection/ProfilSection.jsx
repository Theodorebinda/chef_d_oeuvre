import { useContext } from "react";

import { ContextGlobal } from "../../ContexGlobal";
export default function ProfileSection() {
  const { dataMentoree } = useContext(ContextGlobal);

  // Fonction pour calculer le pourcentage de remplissage du profil
  function calculerPourcentageRemplissage(mentoré) {
    const totalChamps = Object.keys(dataMentoree).length;
    let champsRemplis = 0;

    // Parcourir le profil du mentoré
    for (const champ in mentoré) {
      if (
        mentoré[champ] !== null &&
        mentoré[champ] !== "" &&
        mentoré[champ].length !== 0
      ) {
        champsRemplis++;
      }
    }

    // Calcul du pourcentage de remplissage
    const pourcentageRemplissage = (champsRemplis / totalChamps) * 10;
    return pourcentageRemplissage;
  }

  // Calcul du pourcentage de remplissage du profil du mentoré
  const pourcentageRemplissage = calculerPourcentageRemplissage(
    dataMentoree[0]
  );
  return (
    <div className="w-auto p-3">
      {dataMentoree?.map((mentee, index) => (
        <div
          key={index}
          className=" flex flex-col items-center border py-3 px-6 gap-2 rounded-md"
        >
          <span>{mentee.prenom}</span>
          <div className="w-[70px] h-[70px] bg-slate-600 rounded-3xl"></div>

          <span>Completer a {pourcentageRemplissage.toFixed(2)}%</span>
          <div className="flex justify-between gap-2">
            <button className="rounded border border-[#000] px-2 py-1">
              {"modifier"}
            </button>
            <button className="rounded border border-[#000] px-2 py-1">
              {"consulter"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
