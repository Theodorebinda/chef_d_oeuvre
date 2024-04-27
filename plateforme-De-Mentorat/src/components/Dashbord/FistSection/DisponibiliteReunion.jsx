import { useContext, useState } from "react";
import Modal from "../ThirdSection/Modal";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/fr";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ContextGlobal } from "../../ContexGlobal";

const localizer = momentLocalizer(moment);

export default function DisponibiliteReunion() {
  const { dataMentoree } = useContext(ContextGlobal);
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = "Disponible"; // Titre de l'événement
    const newEvent = { start, end, title };
    setEvents([...events, newEvent]);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  const localisatioContry = dataMentoree.map((contry) => contry.pays);

  return (
    <div className="w-auto p-3 flex flex-col items-center border-l py-3 px-6  rounded-md">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-[#5D5D5D] ">
          Disponibilite pour les reunions
        </span>{" "}
        <ul className="">
          {events.map((event, index) => (
            <div className="flex flex-col items-center text-xs text-[#5D5D5D] ">
              <span>{moment(event.start).format("dddd")}</span>
              <li key={index}>
                {moment(event.start).format("HH:mm A")}
                {moment(event.end).format("HH:mm A")}
                <button onClick={() => handleDeleteEvent(index)}>
                  <img src="src\assets\img\Logos\Vector (3).png" alt="" />
                </button>
              </li>
            </div>
          ))}
        </ul>
        <span className="text-[#cacaca] text-xs">{localisatioContry}</span>
        <button className="rounded border border-[#34519D] shadow-xl text-[#34519D] px-2 py-1 text-xs">
          Synchronisation du calendrier
        </button>
        <div className="text-xs">
          <button
            className="rounded border border-[#34519D] shadow-xl text-[#34519D] px-2 py-1"
            onClick={handleOpenModal}
          >
            Modifier
          </button>
        </div>
        {showModal && (
          <Modal>
            <div style={{ height: 500, padding: 20 }}>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSelectSlot}
                defaultView="week"
                views={["week"]}
                step={15}
                timeslots={8}
              />
            </div>

            <button onClick={handleCloseModal}>X</button>
          </Modal>
        )}
      </div>
    </div>
  );
}
