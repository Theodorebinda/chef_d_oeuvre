function AboutSection() {
  return (
    <>
      <div className="flex flex-col gap-y-6 w-full">
        <div className="flex">
          <div className="flex flex-col justify-center text-left md:text-center gap-[20px] m-4 md:w-[60%] md:m-auto">
            <h4 className="text-xl md:text-3xl font-bold ">
              MENTOR CONNECT C’EST QUOI?
            </h4>
            <p>
              Une plateforme gratuite de mentorat pour que les jeunes soient
              accompagnés par des professionnels dans la réussite de leurs
              études et leur insertion dans le monde du travail.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center  text-center  gap-[20px] items-center">
            <span className="font-bold text-xl">
              Découvrez le parcours de nos binômes
            </span>
            <div className="flex w-full md:justify-between justify-center items-center">
              <img
                className="w-[130px] ml-6 hidden md:block"
                src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1714834668/1A1_controlrocks-29_dh63lc.svg"
                alt=""
              />
              <iframe
                className="w-[70%] md:h-[300px] md:w-[50%]"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
              ></iframe>
              <img
                className="w-[150px] mr-6 hidden md:block"
                src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1714834665/1A1_controlrocks-91_1_uqe4zl.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-end md:justify-center gap-[30%]">
            <img
              className="max-w-40"
              src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1714834663/1A1_controlrocks_jeune-pro_cvczq2.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutSection;
