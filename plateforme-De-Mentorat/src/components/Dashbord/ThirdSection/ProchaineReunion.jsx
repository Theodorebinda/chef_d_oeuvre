import React, { useContext } from "react";
import { ContextGlobal } from "../../ContexGlobal";

const Reunions = () => {
  const { dataReunion } = useContext(ContextGlobal);
  const reunions = [
    { titre: "Réunion 1", date: new Date("2024-05-01T09:00:00Z") },
    { titre: "Réunion 2", date: new Date("2024-05-03T14:00:00Z") },
    { titre: "Réunion 3", date: new Date("2024-05-10T11:00:00Z") },
  ];

  // Filtrer les réunions à venir pour obtenir la prochaine réunion
  const prochaineReunion = reunions?.filter(
    (reunion) => reunion.date > new Date()
  )[0];
  console.log(prochaineReunion);
  return (
    <div>
      <h2>Prochaine Réunion :</h2>
      {prochaineReunion ? (
        <ul>
          <li>
            <strong>Titre :</strong> {prochaineReunion.titre}
          </li>
          <li>
            <strong>Date :</strong> {prochaineReunion.date.toLocaleString()}
          </li>
        </ul>
      ) : (
        <p>Il n'y a pas de réunion programmée.</p>
      )}
    </div>
  );
};

export default Reunions;
