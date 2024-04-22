import { useForm } from "react-hook-form";

const MentorForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl font-bold  text-center">Créer un compte</h1>
        <span className="text-sm">{"Créer votre compte comme mentor"}</span>
        <div className="w-[44%] h-[8px] rounded-full bg-gradient-to-r from-[#FF0000]  via-[#F2CF01] to-[#0000FF] "></div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  max-w-lg mx-auto mt-8  bg-white rounded-3xl drop-shadow-2xl shadow-2xl p-4"
      >
        <div className="flex justify-between mb-2">
          <div className="">
            <label htmlFor="firstName" className="text-xs font-medium">
              {"Prénom"}
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: true })}
              className="shadow appearance-none border border-[#D9D9D9] rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Entrez votre prenom"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs italic">
                {"Le prénom est requis."}
              </p>
            )}
          </div>
          <div className="">
            <label className="text-xs font-medium " htmlFor="name">
              {"Name de famille"}
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3  text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Entrez voter nom"
            />
            {errors.name && (
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
          <div className="mb-4">
            <label className="text-xs font-medium" htmlFor="password">
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
          <div className="mb-4">
            <label className="text-xs font-medium" htmlFor="password">
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
        <div className="flex flex-col my-4 ">
          <label className="text-xs font-medium mb-4">
            {"Sur quelle thematiques souhaitez vous accompagner un etudiant ?"}
          </label>
          <div className=" flex flex-col gap-1   space-y-2">
            <label className=" flex items-center text-xs font-medium text-gray-600">
              <input type="checkbox" {...register("discoverSector")} />
              <span className="ml-2">
                {"Faire decouvrir mon secteur d’activité"}
              </span>
            </label>
            <label className="text-xs font-medium text-gray-600">
              <input type="checkbox" {...register("discoverSector")} />
              <span className="ml-2">
                {
                  "Aider dans la recherche d’un stage, d’une alternance, d’un premier emploi"
                }
              </span>
            </label>
            <label className="text-xs font-medium text-gray-600">
              <input type="checkbox" {...register("discoverSector")} />
              <span className="ml-1">
                {"Contribuer a la motivation de l’etudiant"}
              </span>
            </label>
            <label className="text-xs font-medium text-gray-600">
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
                <input
                  className=""
                  type="checkbox"
                  {...register("discoverSector")}
                />
                <span className="ml-1"> {"Francais"}</span>
              </label>
              <label>
                <input type="checkbox" {...register("discoverSector")} />
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
              type="contries"
              placeholder="Entrez votre pays"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="font-medium text-xs " htmlFor="province">
            {"Province ou territoire"}
          </label>
          <input
            {...register("province")}
            className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="province"
            type="text"
            placeholder="Entrez votre province"
          />
        </div>
        <div className="flex">
          <div className="">
            <label className="text-xs " htmlFor="Cursus">
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
          <div className="mb-4">
            <label className="font-medium text-xs " htmlFor="province">
              {" Nom de diplome"}
            </label>
            <input
              {...register("province")}
              className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="experience"
              type="text"
              placeholder="Veillez entrez votre province"
            />
          </div>
        </div>
        <div className="flex">
          <div className="mb-4">
            <label className="text-xs" htmlFor="experience">
              {"Année d'obtention"}
            </label>
            <input
              {...register("experience")}
              className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="experience"
              type="text"
              placeholder="Entrez votre année d'obtention"
            />
          </div>
          <div className="mb-4">
            <label className="text-xs " htmlFor="experience">
              {"Etablissement d'obtention de diplome"}
            </label>
            <input
              {...register("experience")}
              className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="experience"
              type="text"
              placeholder="Entrez le nom d'etablissement"
            />
          </div>
        </div>{" "}
        <div className="flex">
          <div className="mb-4">
            <label className="text-xs" htmlFor="experience">
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
          <div className="mb-4">
            <label className="text-xs " htmlFor="experience">
              {"Secteur d'activité de votre metier"}
            </label>
            <input
              {...register("activite")}
              className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="experience"
              type="text"
              placeholder="Entrez votre secteur d'activité"
            />
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="mb-4">
              <label className=" text-xs " htmlFor="poste">
                Intiluler de poste
              </label>
              <input
                {...register("poste")}
                className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="experience"
                type="text"
                placeholder="Entrez votre poste"
              />
            </div>
            <div className="mb-4">
              <label className=" text-xs" htmlFor="entreprise">
                {"Votre entreprise"}
              </label>
              <input
                {...register("entreprise")}
                className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3 text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="experience"
                type="text"
                placeholder="Le nom de votre entreprise"
              />
            </div>
            <div className="mb-4">
              <label className="text-xs" htmlFor="secteur d'activité">
                {"Son secteur d’activité"}
              </label>
              <input
                {...register("experience")}
                className="shadow appearance-none border border-[#D9D9D9]  rounded w-full py-1 px-3  text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="activité"
                type="text"
                placeholder="L'activité de votre entreprise"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#34519D] hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
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
