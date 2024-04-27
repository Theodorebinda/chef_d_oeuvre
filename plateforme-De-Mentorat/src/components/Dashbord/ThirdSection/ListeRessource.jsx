export default function ListeRessource({ ressource }) {
  return (
    <div>
      <div>
        <span> Ressources:{ressource.ressources.lingth}</span>
        <ul>
          <li className="">{ressource.ressources.slice(0, 3)}</li>
        </ul>
      </div>
    </div>
  );
}
