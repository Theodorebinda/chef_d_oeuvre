export default function ListeRessource({ ressource }) {
  return (
    <div>
      <div className="flex flex-col   gap-6  border-x p-3 rounded-md ">
        <span> Ressources:{ressource.ressources.lingth}</span>
        <ul className="text-xs flex flex-col">
          <li>{ressource.ressources[0]}</li>
          <li>{ressource.ressources[1]}</li>
          <li>{ressource.ressources[5]}</li>
          <li>{ressource.ressources[2]}</li>
          <li>{ressource.ressources[3]}</li>
          <li>{ressource.ressources[4]}</li>
          <li>{ressource.ressources[5]}</li>
          <li>{ressource.ressources[6]}</li>
          <li>{ressource.ressources[7]}</li>
        </ul>
      </div>
    </div>
  );
}
