import React, { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      setValue(JSON.parse(storedValue));
    }
  }, [key]);

  const setLocalStorageValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setLocalStorageValue];
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);

  // Fonction de connexion
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Fonction de déconnexion
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Affichage conditionnel de la barre de navigation
  return (
    <div>
      {isLoggedIn ? (
        <Navigation loggedIn={true} onLogout={handleLogout} />
      ) : (
        <Navigation loggedIn={false} onLogin={handleLogin} />
      )}
    </div>
  );
};

const Navigation = ({ loggedIn, onLogout, onLogin }) => {
  return (
    <nav>
      {loggedIn ? (
        <>
          <a href="/profile">Profil</a>
          <button onClick={onLogout}>Déconnexion</button>
        </>
      ) : (
        <>
          <button onClick={onLogin}>Se connecter</button>
          <a href="/signup">S'inscrire</a>
        </>
      )}
    </nav>
  );
};

export default App;
