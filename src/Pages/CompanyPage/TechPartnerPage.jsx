import React from 'react'
import { BetsTechSection } from '../../Components/TechPartner/BetsTechSection'
import { BusinessCover } from '../../Components/TechPartner/BusinessCover'
import { Partnering } from '../../Components/TechPartner/Partnering'
import { MeetsSome } from '../../Components/TechPartner/MeetsSome'
import { WhoPartner } from '../../Components/TechPartner/WhoPartner'
import { HowBecome } from '../../Components/TechPartner/HowBecome'

export const TechPartnerPage = () => {
  return (
    <div className='bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95'>
      <BusinessCover></BusinessCover>
      <Partnering></Partnering>
      <MeetsSome></MeetsSome>
      <WhoPartner></WhoPartner>
      <HowBecome></HowBecome>
      <BetsTechSection></BetsTechSection>
      
    </div>
  )
}
