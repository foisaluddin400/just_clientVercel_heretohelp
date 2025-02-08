
import cover from '../../assets/pricingstrategy/cover.png'
export const PricingCoverSection = () => {
  return (
    <div
      className="relative bg-cover bg-center py-9 px-4 lg:px-0 text-white"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-60"></div>

      <div className="max-w-7xl m-auto relative z-10  h-full  ">
        <h1 className=" md:text-6xl font-semibold leading-tight">
          <span className="text-3xl">Transparent Pricing, No Surprises</span>
        </h1>
        <p>Clear Pricing for Every Service Level</p>
        <p className="mt-9 ">
          <li>
          Detailed Breakdowns: Understand every cost component.
          </li>
          <li>Scalable Plans: Options for startups to enterprises.</li>
          <li>Visible Value: See the ROI before you commit.</li>
        </p>
        <p className="pt-7">
          <span className="font-bold pr-3">Description :</span> Explore our transparent pricing models designed to fit your business scale and budget.
          

        </p>
        <p className="py-3">
          <span className="font-bold pr-3">BETS Advantage : </span> Predictable Spending with Transparent Terms
        </p>
      </div>
    </div>
  )
}
