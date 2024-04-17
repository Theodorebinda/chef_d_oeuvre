function AboutSection() {
  return (
    <>
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
    </>
  );
}
export default AboutSection;
