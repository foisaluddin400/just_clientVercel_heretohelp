import React from 'react'
import { PricingCoverSection } from '../../Components/pricingStrategy/PricingCoverSection'
import { PricingStrategyTransSection } from '../../Components/pricingStrategy/PricingStrategyTransSection'

export const PricingStrategyPage = () => {
  return (
    <div className='bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95'><PricingCoverSection></PricingCoverSection>
    <PricingStrategyTransSection></PricingStrategyTransSection>
    
    </div>
  )
}
