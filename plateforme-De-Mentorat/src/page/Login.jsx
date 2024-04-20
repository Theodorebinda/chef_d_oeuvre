import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className=" flex max-h-full flex-col pt-20 bg-[#F5F5F5]">
      <div className="flex justify-end items-center pb-20">
        <div className="w-[40%]  ">
          <LoginForm />
        </div>
        <div className="w-[30%]">
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
