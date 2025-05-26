import React from 'react'
import { AiFillSwitcher, AiOutlinePoweroff, AiOutlineSliders, AiOutlineSwitcher, AiOutlineUserSwitch } from 'react-icons/ai'

const Toolbar = () => {
  return (
    <div className='bg-white p-4 shadow-md'>
      <h4 className='font-orbitron font-bold text-orange-500 mb-4'>Toolbar</h4>
      <div >
        <ul className='flex flex-wrap gap-4 justify-center items-center'>
            <li className='p-2 border shadow-sm flex flex-col items-center'>
                <p className='font-orbitron'>Switch</p>
                <AiOutlinePoweroff className='text-2xl text-emerald-500 py-4' size={64}/>
                <button
                    className='text-emerald-500 border-2 font-semibold w-full px-2 font-orbitron hover:bg-emerald-500 hover:text-white transition-all duration-200 text-xl font-orbitron text-center pb-1'
                >
                 +
                </button>
            </li>
            <li className='p-2 border shadow-sm flex flex-col items-center'>
                <p className='font-orbitron'>Slider</p>
                <AiOutlineSliders className='text-2xl text-emerald-500 py-4' size={64}/>
                <button
                    className='text-emerald-500 border-2 font-semibold w-full px-2 font-orbitron hover:bg-emerald-500 hover:text-white transition-all duration-200 text-xl font-orbitron text-center pb-1'
                >
                 +
                </button>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Toolbar
