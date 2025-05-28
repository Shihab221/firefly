import React from 'react'
import {  AiOutlineAreaChart, AiOutlineBarChart, AiOutlineDotChart, AiOutlineDownCircle, AiOutlinePoweroff, AiOutlineSliders,  } from 'react-icons/ai';

const Tools = [
    {
        name: 'Switch',
        icon: AiOutlinePoweroff ,
    },
    {
        name: 'Slider',
        icon: AiOutlineSliders,
    },
    {
        name: 'Graph',
        icon: AiOutlineAreaChart,
    },
    {
        name: 'Chart',
        icon: AiOutlineBarChart,
    },
    {
        name: 'Gauge',
        icon: AiOutlineDownCircle,
    },
    
]
const Toolbar = () => {
  return (
    <div className='bg-white p-4 shadow-md'>
      <h4 className='font-orbitron font-bold text-orange-500 mb-4'>Toolbar</h4>
      <div >
        <ul className='flex flex-wrap gap-4 justify-center items-center'>
            {Tools.map((tool,index)=>(
                <li key={index} className='p-2 border shadow-sm flex flex-col items-center'>
                    <span className='text-sm font-orbitron'>{tool.name}</span>
                    <tool.icon className='text-2xl text-emerald-500 py-4' size={64}/>
                    <button key={index} className='text-emerald-500 border-2 font-semibold w-full px-2 font-orbitron hover:bg-emerald-500 hover:text-white transition-all duration-200 text-xl text-center pb-1'>
                        +    
                    </button>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Toolbar
