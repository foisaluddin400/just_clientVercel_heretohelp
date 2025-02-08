import React from 'react'
import { ConsultaionCover } from '../../Components/consultations/ConsultaionCover'
import { ConsultationsSection } from '../../Components/consultations/ConsultationsSection'

export const ConsultationsPage = () => {
  return (
    <div className='bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95'>
        <ConsultaionCover></ConsultaionCover>
        <ConsultationsSection></ConsultationsSection>
    </div>
  )
}
