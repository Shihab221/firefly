import Graph from '@/components/Graph'
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
            <div className='bg-white w-full sm:w-3/4 border p-6 shadow-md mx-auto flex flex-col '>
                <h4 className='font-orbitron font-bold text-orange-500 mb-4 text-xl text-center'>Data</h4>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <div className='w-full sm:w-1/2'>
                        <Graph />
                    </div>
                    <div>
                        <h4 className='font-orbitron font-bold text-emerald-500 text-xl mb-4'>Numerical Data</h4>
                        <p>Temperature:{}</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default page
