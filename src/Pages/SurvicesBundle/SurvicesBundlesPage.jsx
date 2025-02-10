import React from 'react'
import { SurvicesBundleCover } from '../../Components/SurvicesBundle/SurvicesBundleCover'
import { ServiceBundlePackegSection } from '../../Components/SurvicesBundle/serviceBundlePackegSection'

export const SurvicesBundlesPage = () => {
  return (
    <div className='bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95'>
        <SurvicesBundleCover></SurvicesBundleCover>
        <ServiceBundlePackegSection></ServiceBundlePackegSection>
    
    </div>
  )
}
