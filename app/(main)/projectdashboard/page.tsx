import Toolbar from '@/components/Toolbar'
import React from 'react'

const page = () => {
  return (
    <div className='px-10 sm:px-20 pt-5 pb-10'>
        <h4 className='bg-white font-orbitron w-full py-4 text-center font-semibold mb-4 text-xl  shadow-md'>Welcome to <span className='text-emerald-500'>FiFtech</span> Dashboard</h4>
        <div className='flex flex-col sm:flex-row gap-4'>
            <div className=' w-full sm:w-1/4 border shadow-md mx-auto'>
                <Toolbar />
            </div>
            <div className='bg-white w-full sm:w-3/4 border p-6 shadow-md mx-auto'>
                <h4 className='font-orbitron font-bold text-orange-500 mb-4'>Data</h4>
            </div>

        </div>

    </div>
  )
}

export default page
