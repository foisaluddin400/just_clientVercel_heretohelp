import React from 'react'
import { DeploymentCover } from '../../Components/NewDeployment/DeploymentCover'
import { DeploymentofNew } from '../../Components/NewDeployment/DeploymentofNew'

export const NewDeployment = () => {
  return (
    <div className='bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95'>
        <DeploymentCover></DeploymentCover>
        <DeploymentofNew></DeploymentofNew>
    </div>
  )
}
