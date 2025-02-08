import React from 'react'
import { AboutCover } from '../../Components/AboutUs/AboutCover'
import { Transforming } from '../../Components/AboutUs/Transforming'
import { OurPhilosophy } from '../../Components/AboutUs/OurPhilosophy'
import { ClientStories } from '../../Components/AboutUs/ClientStories'

export const AboutPage = () => {
  return (
    <div>
      <AboutCover></AboutCover>
      <Transforming></Transforming>
      <OurPhilosophy></OurPhilosophy>

      <ClientStories></ClientStories>
    </div>
  )
}
