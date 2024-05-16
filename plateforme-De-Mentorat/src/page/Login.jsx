import Footer from "../components/landingPage/Footer";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className=" flex  justify-between  flex-col pt-20 bg-[#F5F5F5]">
      <div className="flex justify-end items-center h-screen pb-20">
        <div className="w-[40%] sm:w-full ">
          <LoginForm />
        </div>
        <div className="w-[30%] md:hidden">
          <img className="" src="src\assets\img\background\arrow2.svg" alt="" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
