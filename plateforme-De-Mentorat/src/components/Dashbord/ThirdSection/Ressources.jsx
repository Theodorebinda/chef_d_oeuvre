import { useContext } from "react";
import { ContextGlobal } from "../../ContexGlobal";
import ListeRessource from "./ListeRessource";

export default function Ressources() {
  const { dataSessions } = useContext(ContextGlobal);
  const ressourceSessions = dataSessions
    ?.slice(0, 1)
    .map((ressource, index) => (
      <ListeRessource key={index} ressource={ressource} />
    ));
  return (
    <>
      <span className="w-1/4">{ressourceSessions}</span>
    </>
  );
}
