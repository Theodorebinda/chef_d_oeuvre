import DisponibiliteReunion from "./DisponibiliteReunion";
import Parrains from "./Parrains";
import ProfileSection from "./ProfilSection";
import ProgrammerReunion from "./ProgrammerReunion";

export default function FistSection() {
  return (
    <div className="flex justify-between ">
      <div className="">
        <ProfileSection />
      </div>
      <div>
        <ProgrammerReunion />
      </div>
      <div>
        <DisponibiliteReunion />
      </div>
      <div>
        <Parrains />
      </div>
    </div>
  );
}
