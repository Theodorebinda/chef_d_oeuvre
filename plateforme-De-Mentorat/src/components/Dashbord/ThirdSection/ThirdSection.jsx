import { useContext } from "react";
import { ContextGlobal } from "../../ContexGlobal";
import Ressources from "./Ressources";
import Reunions from "./ProchaineReunion";
import Objectif from "./Objectif";

export default function ThirdSection() {
  const { dataSessions } = useContext(ContextGlobal);
  return (
    <div className="flex justify-between items-center">
      <Ressources />
      <Reunions />
      <Objectif />
    </div>
  );
}
