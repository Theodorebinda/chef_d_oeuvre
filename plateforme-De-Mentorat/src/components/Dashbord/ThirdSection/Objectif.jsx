import React, { useState } from "react";
import Modal from "./Modal"; // Assurez-vous d'avoir un composant Modal

function Objectif() {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [objectifs, setObjectifs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="flex flex-col justify-normal   border-x  py-3 rounded-md  w-1/2 px-2">
      <div className="sticky top-0 ">
        <h2>Objectif ({objectifs.length})</h2>
        <span className="flex justify-between items-center border-b-2 py-2 pr-4 text-xs">
          <span>Fixe un nouvel objectif</span>
          <button
            className="bg-[#848484] py-1 px-2  rounded-md shadow-md"
            type="button"
            onClick={handleOpenModal}
          >
            +
          </button>
        </span>
      </div>
      {showModal && (
        <Modal>
          <h2>Ajouter un Objectif</h2>
          <button type="button" onClick={handleCloseModal}>
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
            {handleCloseModal}
          </form>
        </Modal>
      )}
      <ul>
        {objectifs.map((objectif) => (
          <li className=" flex justify-between text-xs" key={objectif.id}>
            <label className="flex gap-3">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <strong>{objectif.titre}:</strong> {objectif.description}
            </label>
            {isChecked && <p>Objectif Atteint!</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Objectif;
