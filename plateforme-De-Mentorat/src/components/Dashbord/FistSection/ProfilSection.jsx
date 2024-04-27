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
    <div className="w-full border-l py-3 px-6 rounded-md  ">
      {dataMentoree?.map((mentee, index) => (
        <div className="flex flex-col items-center gap-2" key={index}>
          <span className="text-[#5D5D5D] text-xs">{mentee.prenom}</span>
          <div className="w-16 h-16 border border-[#34519D] rounded-full flex items-center justify-center">
            <img
              className="object-cover h-full w-full rounded-full"
              src={mentee.avatar}
              alt="profil"
            />
          </div>

          <span className="text-[#5D5D5D] text-xs ">
            Completer a {pourcentageRemplissage.toFixed(2)}%
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
      ))}
    </div>
  );
}
