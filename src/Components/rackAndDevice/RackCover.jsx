import React from 'react'
import img from '../../assets/rack/back.jpg'
import { ChooseBets } from './ChooseBets'
import { PricingRack } from './PricingRack'
export const RackCover = () => {
  return (
    <div>
          <div
            className="relative bg-cover bg-center py-9 px-4 lg:px-0 text-white"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-60"></div>
    
            <div className="max-w-7xl m-auto relative z-10  h-full  ">
              <h1 className=" md:text-6xl font-semibold leading-tight">
                <span className="text-3xl">
                Rack and Device Installation
                </span>
              </h1>
              <p className="mt-9 ">
                <li>
                Installation of servers, switches, routers, and wireless access points.
                </li>
                <li>
                Cable management and optimization for streamlined operations.
                </li>
              </p>
              <p className="pt-7"><span className="font-bold pr-3">Description :</span> Installation of racks, servers, switches, routers, and wireless access points, along with professional cable management to ensure an organized network environment.</p>
              <p className="py-3"><span className="font-bold pr-3">BETS Advantage :  </span> Detailed setup and configuration with a focus on long-term network performance and scalability.</p>
              
            </div>
          </div>
          <ChooseBets></ChooseBets>
          
        </div>
  )
}
