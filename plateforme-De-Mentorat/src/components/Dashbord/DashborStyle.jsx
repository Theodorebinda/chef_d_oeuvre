import NavDashBord from "./NavDashBor";
import Main from "./main";

function DashbordStyle() {
  return (
    <div className=" bg-white">
      <div className=" flex justify-center">
        <div className="w-1/4">
          <NavDashBord />
        </div>
        <div className="w-full">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default DashbordStyle;
