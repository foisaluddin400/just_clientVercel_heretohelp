import React from 'react'
import { StructureCover } from '../../Components/structurecabling/StructureCover'
import { StructureChoose } from '../../Components/structurecabling/StructureChoose'

export const StructuredCabilingPage = () => {
  return (
    <div className='bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95'>
      <StructureCover></StructureCover>
      <StructureChoose></StructureChoose>
    </div>
  )
}
