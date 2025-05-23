import React from 'react'
import { AiOutlineRadiusSetting, AiOutlineRollback, AiOutlineSafetyCertificate, AiOutlineSecurityScan, AiOutlineSetting, AiOutlineTruck } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className=' bg-neutral-900'>
      
      {/* top four options */}
      <div className='flex flex-row justify-between items-center text-white py-10 px-20'>
        <li className='flex flex-col items-center justify-center gap-2 '>
            <AiOutlineSecurityScan size={36} className='text-emerald-500'/>
            <h4 className='text-emerald-500'>Smart Security</h4>
        </li>

        <li className='flex flex-col items-center justify-center gap-2 '>
            <AiOutlineRollback size={36} className='text-emerald-500'/>
            <h4 className='text-emerald-500'>Easy Return</h4>
        </li>

        <li className='flex flex-col items-center justify-center gap-2 '>
            <AiOutlineSetting size={36} className='text-emerald-500'/>
            <h4 className='text-emerald-500'>Simple Access</h4>
        </li>

        <li className='flex flex-col items-center justify-center gap-2 '>
            <AiOutlineTruck size={36} className='text-emerald-500'/>
            <h4 className='text-emerald-500'>Fast Delivery</h4>
        </li>
      </div>

      {/* bottom links */}
      <div>

      </div>

      <div className='bg-neutral-800 flex flex-row justify-center py-2'>
        <p className='text-neutral-400 text-center'>Copyright - FiFTech 2025 | Developed by - Shiku</p>
      </div>
    </div>
  )
}

export default Footer
