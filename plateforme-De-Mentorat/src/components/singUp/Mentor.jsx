import axios from "axios";
import { useForm } from "react-hook-form";

const MentorForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      // Envoyer les données du formulaire à votre serveur
      const response = await axios.post("http://localhost:3001/users", data);

      // Afficher la réponse du serveur
      console.log(response.data);
    } catch (error) {
      // Gérer les erreurs
      console.error(error);
    }
  };
  console.log(onSubmit());

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2 ">
        <h1 className="text-2xl font-bold  text-center">Créer un compte</h1>
        <span className="text-sm text-[#5D5D5D] font-semibold">
          {"Créer votre compte comme mentor"}
        </span>
        <div className="w-[44%] h-[8px] rounded-full bg-gradient-to-r from-[#FF0000]  via-[#F2CF01] to-[#0000FF] "></div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  max-w-lg mx-auto mt-8  bg-white rounded-3xl drop-shadow-2xl shadow-2xl p-4"
      >
        <div className="flex justify-between gap-3 mb-2 ">
          <div className="flex flex-col w-full">
            <label htmlFor="firstName" className="text-xs font-medium">
              {"Prénom"}
            </label>
            <input
              type="text"
              id="prenom"
              {...register("prenom", { required: true })}
              className="shadow appearance-none border border-[#D9D9D9] rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Entrez votre prenom"
            />
            {errors.prenom && (
              <p className="text-red-500 text-xs italic">
                {"Le prénom est requis."}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full ">
            <label className=" text-xs font-medium " htmlFor="name">
              {"Name de famille"}
            </label>
            <input
              {...register("nom", { required: "Nom is required" })}
              className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3  text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nom"
              type="text"
              placeholder="Entrez voter nom"
            />
            {errors.nom && (
              <p className="text-red-500 text-xs italic">Le nom est requis.</p>
            )}
          </div>
        </div>
        <div className="mb-2">
          <label className="text-xs font-medium" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="shadow appearance-none border border-[#D9D9D9]   text-xs rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Entrez votre email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">Email est requis.</p>
          )}
        </div>
        <div className="flex justify-between gap-3">
          <div className=" flex flex-col w-full mb-4">
            <label className="text-xs font-medium w-full" htmlFor="password">
              Mot de passe
            </label>
            <input
              {...register("password")}
              className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3  text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Entrez votre mot de passe"
            />
          </div>{" "}
          <div className="flex flex-col w-full mb-4">
            <label className="text-xs font-medium " htmlFor="password">
              Confirmation de mot de passe
            </label>
            <input
              {...register("password")}
              className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3  text-xs text-gray-700  focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Entrez votre mot de passe"
            />
          </div>
        </div>
        <div className="flex flex-col my-4  ">
          <label className="text-xs font-medium mb-4">
            {"Sur quelle thematiques souhaitez vous accompagner un etudiant ?"}
          </label>
          <div className=" flex flex-col gap-1   space-y-2">
            <label className=" flex items-center text-[11px] font-medium text-gray-600">
              <input type="checkbox" {...register("discoverSector")} />
              <span className="ml-2">
                {"Faire decouvrir mon secteur d’activité"}
              </span>
            </label>
            <label className="text-[11px] font-medium text-gray-600">
              <input type="checkbox" {...register("discoverSector")} />
              <span className="ml-2">
                {
                  "Aider dans la recherche d’un stage, d’une alternance, d’un premier emploi"
                }
              </span>
            </label>
            <label className="text-[11px] font-medium text-gray-600">
              <input type="checkbox" {...register("discoverSector")} />
              <span className="ml-1">
                {"Contribuer a la motivation de l’etudiant"}
              </span>
            </label>
            <label className="text-[11px] font-medium text-gray-600">
              <input type="checkbox" {...register("discoverSector")} />
              <span className="ml-1 text-left ">
                {
                  "Outiller  et conseiller dans l’atteinte des objectif, accompagner dans la methodologie de travail"
                }
              </span>
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="">
            <label className=" text-xs ">{"Langue"}</label>
            <div className=" flex flex-col mt-1 space-y-2 text-xs">
              <label>
                <input className="" type="checkbox" {...register("langue")} />
                <span className="ml-1"> {"Francais"}</span>
              </label>
              <label>
                <input type="checkbox" {...register("langue")} />
                <span className="ml-2">{"Anglais"}</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className=" text-xs font-medium" htmlFor="position">
              {"Dans quel pays etes vous"}
            </label>
            <input
              {...register("pays")}
              className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pays"
              type="pays"
              placeholder="Entrez votre pays"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="font-medium text-xs " htmlFor="province">
            {"ville"}
          </label>
          <input
            {...register("ville")}
            className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ville"
            type="text"
            placeholder="Entrez votre province"
          />
        </div>
        <div className="flex justify-between gap-3">
          <div className="flex flex-col w-full">
            <label className="text-xs " htmlFor="cursus">
              Cursus
            </label>
            <input
              {...register("cursus")}
              className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cursus"
              type="text"
              placeholder="Entrez votre cursus"
            />
          </div>
          <div className="flex flex-col w-full mb-4">
            <label className="font-medium text-xs " htmlFor="nomDiplome:">
              {" Nom de diplome"}
            </label>
            <input
              {...register("nomDiplome")}
              className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="province"
              type="text"
              placeholder="Nom de votre diplome"
            />
          </div>
        </div>
        <div className="flex justify-between gap-3 ">
          <div className="flex flex-col w-full">
            <label className="text-xs" htmlFor="anneeDiplome">
              {"Année d'obtention"}
            </label>
            <input
              {...register("anneeDiplome")}
              className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="obtention"
              type="number"
              placeholder="Entrez votre année d'obtention"
            />
          </div>
          <div className="flex flex-col w-full mb-4">
            <label className="text-xs " htmlFor="etablissement">
              {"Etablissement d'obtention de diplome"}
            </label>
            <input
              {...register("etablissementDobtention:")}
              className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="etablissement"
              type="text"
              placeholder="Entrez le nom d'etablissement"
            />
          </div>
        </div>{" "}
        <div className="flex justify-between gap-3">
          <div className="flex flex-col w-full mb-4">
            <label className="text-xs" htmlFor="filiere">
              Filiere
            </label>
            <input
              {...register("filiere")}
              className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="filiere"
              type="text"
              placeholder="Entrez votre filiere"
            />
          </div>
          <div className="flex flex-col w-full mb-4">
            <label className="text-xs " htmlFor="experience">
              {"Secteur d'activité de votre metier"}
            </label>
            <input
              {...register("secteurDactivite")}
              className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="secteurDactivite"
              type="text"
              placeholder="Entrez votre secteur d'activité"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between gap-2">
            <div className="flex flex-col w-full mb-4">
              <label className=" text-xs " htmlFor="poste">
                Intiluler de poste
              </label>
              <input
                {...register("intitulerDePoste")}
                className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="intitulerDePoste"
                type="text"
                placeholder="Entrez votre poste"
              />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label className=" text-xs" htmlFor="entreprise">
                {"Votre entreprise"}
              </label>
              <input
                {...register("entreprise")}
                className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="experience"
                type="text"
                placeholder="Votre entreprise"
              />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label className="text-xs" htmlFor="objectifProfessionelle:">
                {"Son secteur d’activité"}
              </label>
              <input
                {...register("objectifProfessionelle:")}
                className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3  text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="objectifProfessionelle:"
                type="text"
                placeholder="votre objectif Professionelle:"
              />
            </div>
          </div>
        </div>
        <div className="m-auto w-1/2">
          <button
            className="bg-[#FFDF00] hover:bg-[#fef5bd] w-full text-blue-600 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};

export default MentorForm;
