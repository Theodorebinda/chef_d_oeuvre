import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex justify-between  bg-white px-5 border-t-slate-400">
        <div className="flex justify-start items-center">
          <Link>
            <img
              className="w-32"
              src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1714908826/logo/bsyyh03icd1ryzywupsg.png"
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
              src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1714910847/dashbord/gonstjiiaihlxnl2e8cm.svg"
              alt=""
            />
          </li>
        </ul>
      </div>
    </>
  );
}
export default Footer;
