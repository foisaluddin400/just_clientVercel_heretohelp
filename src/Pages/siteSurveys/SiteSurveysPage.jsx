import React from 'react'
import { SiteSurveyCover } from '../../Components/siteSurveys/SiteSurveyCover'
import { SiteSurveySection } from '../../Components/siteSurveys/SiteSurveySection'
import { SitePricing } from '../../Components/siteSurveys/SitePricing'

export const SiteSurveysPage = () => {
  return (
    <div className='bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95'><SiteSurveyCover></SiteSurveyCover>
    <SiteSurveySection></SiteSurveySection>
    <SitePricing></SitePricing>
    </div>
  )
}
