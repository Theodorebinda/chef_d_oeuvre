import Data from "../../../data/initial-data.json";
export default function DisponibiliteReunion() {
  return (
    <div className="w-auto p-3">
      {Data?.mentoree.map((mentee, index) => (
        <div
          key={index}
          className=" flex flex-col items-center border py-3 px-6 gap-2 rounded-md"
        >
          <span>Programmer des reunion</span>
          <div className="w-[70px] h-[70px] bg-slate-600 rounded-3xl"></div>

          <span>{}</span>
          <div className="flex justify-between gap-2">
            <button className="rounded border border-[#000] px-2 py-1">
              modifier
            </button>
            <button className="rounded border border-[#000] px-2 py-1">
              consulter
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
