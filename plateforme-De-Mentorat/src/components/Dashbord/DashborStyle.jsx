import NavDashBord from "./NavDashBor";
import Main from "./main";

function DashbordStyle() {
  return (
    <div className=" bg-white py-5 px-3  rounded-lg">
      <div className=" flex ">
        <div className="w-1/6">
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
