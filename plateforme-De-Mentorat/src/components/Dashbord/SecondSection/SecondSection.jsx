import Contacts from "./Contacs";
import Groupe from "./Group";
import Points from "./Points";
import Cours from "./cours";

export default function SecondSection() {
  return (
    <div>
      <div className="flex justify-between px-3 gap-3 w-full  flex-wrap">
        <Points />
        <Contacts />
        <Cours />
        <Groupe />
      </div>
    </div>
  );
}
