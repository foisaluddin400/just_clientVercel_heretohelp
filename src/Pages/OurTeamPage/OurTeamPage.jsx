import React from 'react'
import { OurTeamCover } from '../../Components/OurTeam/OurTeamCover'
import { ForgingFuture } from '../../Components/OurTeam/ForgingFuture'
import { MeetTheVision } from '../../Components/OurTeam/MeetTheVision'
import { ExploreOurTeam } from '../../Components/OurTeam/ExploreOurTeam'

export const OurTeamPage = () => {
  return (
    <div className='bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95'>
        <OurTeamCover></OurTeamCover>
        <ForgingFuture></ForgingFuture>
        <MeetTheVision></MeetTheVision>
        <ExploreOurTeam></ExploreOurTeam>
    </div>
  )
}
