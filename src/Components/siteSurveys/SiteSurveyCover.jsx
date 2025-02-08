import React from 'react'
import cover from '../../assets/siteSurvey/aa.png'
export const SiteSurveyCover = () => {
  return (
   <div>
         <div
           className="relative bg-cover bg-center py-16 text-white"
           style={{ backgroundImage: `url(${cover})` }}
         >
           <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-40"></div>
   
           <div className="relative z-10 max-w-7xl text-xl m-auto items-center h-full  px-6">
             <h1 className=" md:text-6xl font-bold leading-tight">
             Precision Planning for Optimal Network Implementation
             </h1>
             <p className="mt-1 text-lg font-bold md:text-xl">
             Maximize Your Tech Readiness
             </p>
             <div className="space-y-2 mt-7">
             <li>
             Site Analysis: Comprehensive evaluation of space and infrastructure.
             </li>
             <li>
             Needs Assessment: Custom solutions tailored to your business goals.
             </li>
             <li>
             Setup Optimization: Preparing all conditions for efficient network implementation.
             </li>
             </div>
             <div className="flex flex-row gap-5 items-center pt-7">
               <h3 className="font-semibold ">Description : </h3>
               <p>
               Through our site surveys, we align your environment with the latest network technology, ensuring seamless integration and optimized performance.
               </p>
             </div>
             <div className="flex flex-row gap-5 items-center pt-7">
               <h3 className="font-semibold ">BETS Advantage: </h3>
               <p>
               Efficient Installations, Minimal Disruption: We prepare your site to ensure quick and smooth network setup.
               </p>
             </div>
             
           </div>
         </div>
       </div>
  )
}
