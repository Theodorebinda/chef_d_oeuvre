import React, { useState } from "react";
import Modal from "./Modal"; // Assurez-vous d'avoir un composant Modal

function Objectif() {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [objectifs, setObjectifs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleTitreChange = (e) => {
    setTitre(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titre.trim() || !description.trim()) return;

    const nouvelObjectif = {
      id: Date.now(),
      titre,
      description,
    };

    setObjectifs([...objectifs, nouvelObjectif]);
    setTitre("");
    setDescription("");
    {
      handleCloseModal;
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>Objectif (2)</h2>
      <span>Fixe un nouvel objectif</span>
      <button type="button" onClick={handleOpenModal}>
        +
      </button>
      {showModal && (
        <Modal>
          <h2>Ajouter un Objectif</h2>
          <button type="button" onClick={handleCloseModal}>
            {" "}
            X
          </button>
          <form onSubmit={handleSubmit}>
            <label>
              Titre:
              <input type="text" value={titre} onChange={handleTitreChange} />
            </label>
            <label>
              Description:
              <textarea
                value={description}
                onChange={handleDescriptionChange}
              />
            </label>
            <button type="submit">Ajouter</button>
          </form>
        </Modal>
      )}
      <ul>
        {objectifs.map((objectif) => (
          <li key={objectif.id}>
            <strong>{objectif.titre}:</strong> {objectif.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Objectif;
