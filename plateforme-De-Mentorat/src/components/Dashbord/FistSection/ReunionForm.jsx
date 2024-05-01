import React, { useContext, useState } from "react";
import { ContextGlobal } from "../../ContexGlobal";

export default function ReunionForm() {
  //   const { dataReunion, setDataReunion} = useContext(ContextGlobal);
  const [dataReunion, setDataReunion] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
  });

  // State pour gérer le tableau de réunions
  const [reunions, setReunions] = useState([]);

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataReunion({ ...dataReunion, [name]: value });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajouter les données de la réunion au tableau de réunions
    setReunions([...reunions, dataReunion]);
    // Réinitialiser les données de la réunion pour vider le formulaire
    setDataReunion({ title: "", date: "", time: "", location: "" });
  };

  return (
    <div className="pt-[30px]">
      <div className="flex justify-between">
        <h2>Programmer une Réunion</h2>{" "}
        <button onClick={handleCloseModal}>X</button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Titre:
          <input
            type="text"
            name="title"
            value={dataReunion.title}
            onChange={handleChange}
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={dataReunion.date}
            onChange={handleChange}
          />
        </label>

        <label>
          Heure:
          <input
            type="time"
            name="time"
            value={dataReunion.time}
            onChange={handleChange}
          />
        </label>

        <label>
          Lieu:{" "}
          <input
            type="text"
            name="location"
            value={dataReunion.location}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Planifier la Réunion</button>
      </form>

      {/* Afficher la liste des réunions programmées */}
      <div>
        <h3>Réunions programmées</h3>
        <ul>
          {reunions.map((reunion, index) => (
            <li key={index}>
              {reunion.title} - {reunion.date} {reunion.time} -{" "}
              {reunion.location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
