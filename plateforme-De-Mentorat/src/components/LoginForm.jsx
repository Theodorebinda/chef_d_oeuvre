import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/", data);
      console.log("Login successful:", response.data);
      localStorage.setItem("token", response.data.token);
      // Redirection ou mise à jour de l'état de l'application pour refléter que l'utilisateur est connecté
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : "Server error"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center p-4 max-w-md mx-auto mt-8 bg-white rounded-3xl shadow-2xl"
    >
      <div className="flex flex-col justify-center gap-6 mb-7 items-center ">
        <h2 className="text-2xl font-bold  text-center">Connexion</h2>
        <span className="text-sm">
          {"Besoin d'un compte Mentor Connect ? "}
          <Link className="text-blue-500 font-bold" to="/singUpAll">
            {" "}
            Créer un compte
          </Link>
        </span>
        <div className="w-[80%] h-[8px] rounded-full bg-gradient-to-r from-[#FF0000]  via-[#F2CF01] to-[#0000FF] "></div>
      </div>
      <div className="flex   flex-col ">
        <div className=" mb-5">
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-600"
          >
            {"Nom d'utilisateur"}
          </label>
          <input
            type="text"
            {...register("username", { required: true })}
            className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-400 focus:border-[#34519D]"
          />
          {errors.username && (
            <p className="text-red-500 text-xs italic">
              {" Le nom d'utilisateur est requis."}
            </p>
          )}
        </div>

        <div className="mb-8">
          <label
            htmlFor="password"
            className=" text-sm font-medium text-gray-600"
          >
            Mot de passe
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#34519D]"
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              Le mot de passe est requis.
            </p>
          )}
        </div>
        <button
          type="submit"
          className="mb-8 w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Se connecter
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
