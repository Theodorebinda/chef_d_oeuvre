import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex justify-between  bg-white px-5 border-t-slate-400">
        <div className="flex justify-start items-center">
          <Link>
            <img
              className="w-32"
              src="src\assets\img\Logos\ingoude.png"
              alt=""
            />
          </Link>

          <span className="text-[#848484]">
            Un projet porter par <span className="text-[#000]">Theodore</span>
          </span>
        </div>
        <ul className="flex justify-end items-center gap-8">
          <li>Nous Contacter</li>
          <li>Mention Legale</li>
          <li>
            <img
              className="w-[60px]"
              src="src\assets\img\Logos\1A1_controlrocks-90.svg"
              alt=""
            />
          </li>
        </ul>
      </div>
    </>
  );
}
export default Footer;