import { useContext, useState } from "react";
import Data from "../../../data/initial-data.json";
import { ContextGlobal } from "../../ContexGlobal";
import Modal from "../ThirdSection/Modal";
export default function ProgrammerReunion() {
  const { dataReunion, setDataReunion } = useContext(ContextGlobal);
  const [showModal, setShowModal] = useState(false);
  const meetingCount = dataReunion.length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataReunion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Meeting Scheduled:", meeting);
    //logique restante pour envoyer les reunions dans le serveur.
    {
      handleCloseModal;
    }
  };

  return (
    <div className=" flex flex-col w-full rounded-md  border-r py-3 px-6 ">
      <div className="flex flex-col items-center text-[#5D5D5D] gap-2">
        <span className="text-xs">Programmer des reunion</span>
        <div className="bg-[#D9D9D9] w-16 h-16 border border-[#34519D] rounded-full flex items-center justify-center">
          <img
            className="object-cover  "
            src="src\assets\img\Logos\Vector (2).png"
            alt=""
          />
        </div>
        <div className="flex justify-between gap-1 text-[#34519D] text-xs font-semibold ">
          <span>{meetingCount}</span>
          <span>Reunion a venir</span>
        </div>
        <div className="flex justify-between gap-2">
          <button
            className="rounded-md border border-[#34519D] shadow-xl text-[#34519D] text-xs px-2 py-1"
            onClick={handleOpenModal}
          >
            modifier
          </button>

          <button className="rounded border border-[#34519D] text-[#34519D] text-xs shadow-xl px-2 py-1">
            consulter
          </button>
          {showModal && (
            <Modal>
              <div className="pt-[30px]">
                <div className="flex justify-between">
                  <h2>Programmer une Réunion</h2>{" "}
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
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}
