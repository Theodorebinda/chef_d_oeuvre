import { useForm } from "react-hook-form";

function MentoréForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <div className="max-w-md mx-auto p-20 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold m-4">Formulaire Mentor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-medium">
            {"Prénom"}
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: true })}
            className="w-full p-2 border rounded"
          />
          {errors.firstName && (
            <p className="text-red-500">Le prénom est requis.</p>
          )}
        </div>

        {/* ... Autres champs (nom, email, mot de passe, etc.) ... */}

        <div className="mb-4">
          <label className="block font-medium">
            {"Thématiques d'accompagnement"}
          </label>
          <div className="space-y-2">
            <label>
              <input type="checkbox" {...register("discoverSector")} />
              {"Faire découvrir mon secteur d'activité"}
            </label>
            <label>
              <input type="checkbox" {...register("discoverSector")} />
              {"Faire découvrir mon secteur d'activité"}
            </label>
            <label>
              <input type="checkbox" {...register("discoverSector")} />
              {"Faire découvrir mon secteur d'activité"}
            </label>
            <label>
              <input type="checkbox" {...register("discoverSector")} />
              {"Faire découvrir mon secteur d'activité"}
            </label>
            <label>
              <input type="checkbox" {...register("discoverSector")} />
              {"Faire découvrir mon secteur d'activité"}
            </label>
            {/* ... Autres cases à cocher ... */}
          </div>
        </div>

        {/* ... Autres champs (langue, pays, etc.) ... */}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Soumettre
        </button>
      </form>
    </div>
  );
}

export default MentoréForm;
