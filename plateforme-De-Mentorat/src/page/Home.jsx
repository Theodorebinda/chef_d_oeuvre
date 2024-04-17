import Partenaires from "../components/Partenaire";

function Home() {
  return (
    <div>
      <div className="flex max-w-full max-h-full justify-between">
        <div className=" w-2/4">
          <div className="justify-end">
            <img
              className="w-[150px] "
              src="src\assets\img\background\1A1_controlrocks-14-2.svg"
              alt=""
            />
          </div>
          <div className="ml-[150px] text-center">
            <h4 className="text-3xl font-bold p-[20px]">
              Je suis étudiant et j ai besoin d accompagnement
            </h4>
            <button className="border border-black rounded-md px-[20px] py-[10px] bg-[#FFDF00]">
              Je m inscrit
            </button>
          </div>
          <img
            className="w-[200px]"
            src="src\assets\img\background\1A1_controlrocks-08(1).svg"
            alt=""
          />
        </div>
        <div className=" w-2/4 bg-fuchsia-50 text-center ">
          <div className="mt-[19%]">
            <h4 className="text-3xl font-bold  bg-gradient-to-r p-[20px]">
              Je suis un professionnel et je souhaite m engager
            </h4>
            <button className="border border-black rounded-md px-[20px] py-[10px] bg-[#FFDF00]">
              Devenir Mentor
            </button>
          </div>
          <img
            className="w-[200px] ml-[70%] mt-[5%]"
            src="src\assets\img\background\1A1_controlrocks-73.svg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-[50px]">
        <div className="flex">
          <img
            className="w-[80px]"
            src="src\assets\img\background\1A1_controlrocks-14-2.svg"
            alt=""
          />
          <div className="flex flex-col justify-center text-center gap-[20px] w-[90%] m-auto">
            <h4 className="text-3xl font-bold ">SAMBA.ORG C’EST QUOI?</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              ratione qui incidunt, similique, laboriosam quaerat consequuntur
              consectetur rerum vel ex culpa eveniet fuga velit, non deserunt
              enim rem aperiam reprehenderit placeat quidem tenetur. Voluptates
              neque ducimus nemo doloribus, ab.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center  text-center  gap-[20px] items-center">
            <h2 className="font-bold">Découvrez le parcours de nos binômes</h2>
            <div className="w-[800px] h-[500px] bg-[#f5f5f5]"></div>
          </div>
          <div className="flex justify-start gap-[30%]">
            <img
              className="w-[130px]"
              src="src\assets\img\background\1A1_controlrocks-29.svg"
              alt=""
            />
            <img
              className="w-[200px]"
              src="src\assets\img\background\1A1_controlrocks_jeune-pro.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#f6f6f6]">
        <div className="text-center mx-[20%] py-3">
          <h1 className="font-bold">NOS PARTENAIRES</h1>
          <p className="py-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eos
            ducimus dignissimos voluptas .
          </p>
        </div>
        <div className="py-6">
          <Partenaires />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div className="w-[250px]">
            <img
              src="src\assets\img\background\1A1_controlrocks-70 (1).svg"
              alt=""
            />
          </div>
          <div className="w-[50%] text-center py-3  font-bold">
            <h4>QUESTION COURANTES</h4>
            <ul className="text-start pt-3  leading-normal]">
              <li className=" py-5 border-b border-black">
                Est ce vraiment gratuit ?
              </li>
              <li className=" py-5 border-b border-black">
                Combien de temps ça dure ?
              </li>
              <li className=" py-5 border-b border-black">
                Tout est digitalisé ?
              </li>
            </ul>
          </div>
          <div className="w-[100px]">
            <img
              src="src\assets\img\background\1A1_controlrocks-03.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-start items-center">
          <img
            className="w-[200px]"
            src="src\assets\img\Logos\LOGO-DEMA1N-CARRE (1).png"
            alt=""
          />
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
    </div>
  );
}

export default Home;
