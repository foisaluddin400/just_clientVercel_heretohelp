import React from 'react'
import { ExploreServicesSection } from '../../Components/exploreOurServices/ExploreServicesSection'
import { AllServicesExplore } from '../../Components/exploreOurServices/AllServicesExplore'

export const ExploreOurServices = () => {
  return (
    <div className='bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95'>
        <ExploreServicesSection></ExploreServicesSection>
        <AllServicesExplore></AllServicesExplore>
        </div>
  )
}
