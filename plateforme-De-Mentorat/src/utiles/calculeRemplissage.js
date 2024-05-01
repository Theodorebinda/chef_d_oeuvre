import { useContext } from "react";
import { ContextGlobal } from "../components/ContexGlobal";

  // Fonction pour calculer le pourcentage de remplissage du profil
 export function calculerPourcentageRemplissage(Mentoree) {
    const {dataMentoree} = useContext(ContextGlobal)
    
    const totalChamps = Object.keys(dataMentoree).length;
    let champsRemplis = 0;

    // Parcourir le profil du mentoré
    for (const champ in Mentoree) {
      if (
        Mentoree[champ] !== null &&
        Mentoree[champ] !== "" &&
        Mentoree[champ].length !== 0
      ) {
        champsRemplis++;
      }
    }

    // Calcul du pourcentage de remplissage
    const pourcentageRemplissage = (champsRemplis / totalChamps) * 100;
    return pourcentageRemplissage;
  }