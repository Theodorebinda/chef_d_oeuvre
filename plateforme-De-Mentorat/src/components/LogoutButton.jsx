import React from "react";

const LogoutButton = () => {
  // Fonction pour gérer la déconnexion
  const handleLogout = async () => {
    try {
      // Effectuer une requête POST vers votre backend pour déconnecter l'utilisateur
      const response = await fetch("http://localhost:3001/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("La déconnexion a échoué");
      }
      // Rediriger l'utilisateur vers la page de connexion après la déconnexion
      alert("vous etes deconnecté");
      window.location.href = "/login";
    } catch (error) {
      console.error("La déconnexion a échoué:", error.message);
    }
  };
  return (
    <button
      className=" border-blue-500 rounded-sm px-[25px] py-[3px] text-blue-600  hover:bg-[#fef5bd] hover:text-black bg-[#FFDF00]"
      onClick={handleLogout}
    >
      {"Déconnexion"}
    </button>
  );
};

export default LogoutButton;
