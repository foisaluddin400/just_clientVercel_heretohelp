import React from 'react'
import img from '../../assets/siteSurvey/aaa.png'
import img2 from '../../assets/siteSurvey/bbb.png'
import img3 from '../../assets/siteSurvey/ccc.png'
import img4 from '../../assets/siteSurvey/ddd.png'


export const LeaderShip = () => {
  return (
    <div>
        <div className="bg-[#DBE3EA] py-5 px-4 lg:px-0">
        <div className="max-w-7xl m-auto text-xl font-bold">Leaderships</div>
      </div>
      <div className='inset-0 bg-gradient-to-r  from-[#06083f] via-[#000d74] to-[#06083f] opacity-95 text-white'>
        <div className='mx-4 lg:mx-0'>
        <h1 className='text-3xl text-center py-7'>introduce the BETS team</h1>
        <div className='max-w-7xl m-auto space-y-4 md:space-y-0  md:grid md:grid-cols-2 gap-8'>
            <img src={img} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        <h1 className='text-3xl text-center pt-11 pb-32'>The Culture <br />
        & Values  at BETS</h1>
        </div>
      </div>
    </div>
  )
}
