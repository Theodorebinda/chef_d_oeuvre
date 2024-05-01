const MenuHumburger = () => {
  return (
    <div>
      <div className="fixed top-0 right-0 bottom-0 w-[250px] bg-white shadow-lg z-50">
        <div className="p-5">
          <button onClick={toggleMenu} className="mb-5">
            Fermer
          </button>
          <ul>
            <li className="my-2">Accueil</li>
            <li className="my-2">Services</li>
            <li className="my-2">À propos</li>
            <li className="my-2">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MenuHumburger;
