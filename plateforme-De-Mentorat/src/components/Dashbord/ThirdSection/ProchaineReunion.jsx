import React, { useContext } from "react";
import { ContextGlobal } from "../../ContexGlobal";
import moment from "moment";

const Reunions = () => {
  const { dataReunion } = useContext(ContextGlobal);
  console.log({ dataReunion });
  const reunions = [
    { titre: "Réunion 1", date: new Date("2024-05-01T09:00:00Z") },
    { titre: "Réunion 2", date: new Date("2024-05-03T14:00:00Z") },
    { titre: "Réunion 3", date: new Date("2024-05-10T11:00:00Z") },
  ];
  // Vérifier si dataReunion est un tableau
  if (!Array.isArray(reunions)) {
    console.error("dataReunion n'est pas un tableau.");
    return null; //
  }
  const meetingCount = dataReunion.length;

  // Filtrer les réunions à venir pour obtenir la prochaine réunion
  const prochaineReunion = dataReunion?.filter(
    (reunion) => moment(reunion.date).format("LLL") > new Date()
  )[0];
  console.log(prochaineReunion);

  return (
    <div className="flex flex-col justify-normal gap-6  border-x  py-3 rounded-md  w-1/4 px-2">
      <div className="flex justify-start gap-2">
        <h2>Prochaine Réunion</h2>
        <span>({meetingCount})</span>
      </div>
      {prochaineReunion ? (
        <ul className="text-xs">
          <li>
            <span className="font-semibold">Titre :</span>{" "}
            {prochaineReunion.titre}
          </li>
          <li>
            <span className="font-semibold">Date :</span>{" "}
            {moment(prochaineReunion.date).format("LLL")}
          </li>
        </ul>
      ) : (
        <p>Il n'y a pas de réunion programmée.</p>
      )}
    </div>
  );
};

export default Reunions;
