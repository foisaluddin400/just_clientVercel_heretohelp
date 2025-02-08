import React from 'react'
import backImg from '../../assets/blog/back.png'
export const CoverImg = () => {
  return (
    <div>
        <div
              className="relative bg-cover bg-center py-16 text-white"
              style={{ backgroundImage: `url(${backImg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-50"></div>
        
              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
                <h1 className=" md:text-6xl font-bold leading-tight">
                   <span className='text-8xl'>BETS Insights:</span>
                </h1>
                <p className="mt-4 text-lg md:text-4xl font-bold">
                  Your Source for IT Expertise
                </p>
                
              </div>
            </div>
    </div>
  )
}
