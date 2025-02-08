
import cover from '../../assets/consultation/cover.png'
export const SurvicesBundleCover = () => {
  return (
    <div
      className="relative bg-cover bg-center py-9 text-white px-4 lg:px-0"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-60"></div>

      <div className="max-w-7xl m-auto relative z-10  h-full  ">
        <h1 className=" md:text-6xl font-semibold leading-tight">
          <span className="text-3xl">Comprehensive Service Bundles and Maintenance Plans</span>
        </h1>
        <p>Customized Solutions to Keep Your Technology Running Smoothly</p>
        <p className="mt-9 ">
          <li>
          Proactive Monitoring and Maintenance to Prevent Downtime
          </li>
          <li>Tailored Service Packages to Fit Your Business Needs</li>
          <li>Reliable Support for Networks, Software, and Hardware</li>
        </p>
        <p className="pt-7">
          <span className="font-bold pr-3">Description :</span> Opt for our tailored service bundles to keep your systems optimal and disruption-free. <br /> 
          Each package is designed to meet your specific business needs, ensuring your technology operates smoothly.

        </p>
        <p className="py-3">
          <span className="font-bold pr-3">BETS Advantage : </span> Fast response times with flexible service packages.
        </p>
      </div>
    </div>
  )
}
