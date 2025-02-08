import React from 'react'
import cover from '../../assets/newDeployment/cover.png'
export const DeploymentCover = () => {
  return (
    <div>
             <div
               className="relative bg-cover bg-center py-16 text-white"
               style={{ backgroundImage: `url(${cover})` }}
             >
               <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-40"></div>
       
               <div className="relative z-10 max-w-7xl text-xl m-auto items-center h-full  px-6">
                 <h1 className=" md:text-6xl font-bold leading-tight">
                 Seamless Network Device Deployment
                 </h1>
                 <p className="mt-1 text-lg font-bold md:text-xl">
                 Ensuring Robust Performance and Compatibility
                 </p>
                 <div className="space-y-2 mt-7">
                 <li>
                 Expert Installation of Hardware and Software
                 </li>
                 <li>
                 Rigorous Testing for Optimal Network Performance
                 </li>
                 <li>
                 Seamless Integration with Existing IT Infrastructure
                 </li>
                 </div>
                
                 <div className="flex flex-row gap-5 items-center pt-7">
                   <h3 className="font-semibold ">Description : </h3>
                   <p>
                   From selection to setup, our comprehensive deployment services
                   ensure your network devices are integrated smoothly and perform at their best.
                   </p>
                 </div>
                 <div className="flex flex-row gap-5 items-center pt-7">
                   <h3 className="font-semibold ">BETS Advantage: </h3>
                   <p>
                   Efficient Deployment with Minimal Downtime
                   </p>
                 </div>
               </div>
             </div>
           </div>
  )
}
