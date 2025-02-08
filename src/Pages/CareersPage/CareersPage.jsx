import React from 'react'
import { CareerCover } from '../../Components/Careers/CareerCover'
import { BuildFuture } from '../../Components/Careers/BuildFuture'
import { Innovate } from '../../Components/Careers/Innovate'

export const CareersPage = () => {
  return (
    <div className='bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95'>
        <CareerCover></CareerCover>
        <BuildFuture></BuildFuture>
        <Innovate></Innovate>
    </div>
  )
}
