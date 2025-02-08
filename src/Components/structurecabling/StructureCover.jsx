import backImg from "../../assets/structurecabling/backimg.jpg";
export const StructureCover = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center py-9 text-white px-4 lg:px-0"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-60"></div>

        <div className="max-w-7xl m-auto relative z-10  h-full  ">
          <h1 className=" md:text-6xl font-semibold leading-tight">
            <span className="text-3xl">
              Structured Cabling (Copper and Fiber)
            </span>
          </h1>
          <p className="mt-9 ">
            <li>
              Design, installation, and certification of structured cabling for
              reliable data transfer.
            </li>
            <li>
              Applications include office networks, data centers, and industrial
              environments.
            </li>
          </p>
          <p className="pt-7">
            <span className="font-bold pr-3">Installation :</span> Professional
            setup of copper and fiber cables for data networks
          </p>
          <p className="py-3">
            <span className="font-bold pr-3">Testing & Maintenance : </span>{" "}
            Ensuring cables work properly and providing regular maintenance to
            maximize network performance.
          </p>
          <p>
            <span className="font-bold pr-3 ">Cable Management : </span>{" "}
            Organized arrangement of cables (e.g., labeling, proper routing) for
            easier troubleshooting and scalability.
          </p>
          <p className="py-3">
            <span className="font-bold pr-3">Network Optimization: </span>{" "}
            Enhancing network speed and reliability through proper cabling.
          </p>
        </div>
      </div>
    </div>
  );
};
