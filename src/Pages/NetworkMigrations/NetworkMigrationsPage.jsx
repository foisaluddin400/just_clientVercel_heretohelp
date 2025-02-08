import React from 'react'
import { NetworkCover } from '../../Components/NetworkMigrationsCom/NetworkCover'
import { NetworkMigrationsOnePage } from '../../Components/NetworkMigrationsCom/NetworkMigrationsOnePage'
import { NetworkPricing } from '../../Components/NetworkMigrationsCom/NetworkPricing'

export const NetworkMigrationsPage = () => {
  return (
    <div className='bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95'>
        <NetworkCover></NetworkCover>
        <NetworkMigrationsOnePage></NetworkMigrationsOnePage>
        <NetworkPricing></NetworkPricing>
    </div>
  )
}
