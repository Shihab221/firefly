"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import { FaSearch, FaBars, FaCross } from "react-icons/fa"
import { BiArrowFromTop } from 'react-icons/bi'
import Sidebar from './Sidebar'
import { IoClose, IoMenu } from 'react-icons/io5'
import {motion, AnimatePresence} from 'framer-motion'
import Link from 'next/link'


const navbarData = [
    {title:"Home", url:"#" },
    {title:"Best Sellers", url:"#" },
    {title:"New Arrival", url:"#" },
    {title:"Big sale", url:"#" },
    {title:"Clearance Sale", url:"#" },
    {title:"Discover", url:"#" },
    {title:"About Fiftech", url:"#" },
]
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full px-5 sm:px-20 font-orbitron'>
      {/* search bar */}
      <div className='flex flex-row items-center justify-between py-2'>
        <Image 
        src="/images/logo.jpg"
        alt='logo'
        width={100}
        height={100}
        className='sm:block hidden'
        />
        <motion.button
        whileTap={{ scale: 0.9 }}
          
        >
        {
          isOpen ? (
            <IoClose className='sm:hidden block mx-2' size={32} color='black' onClick={()=> setIsOpen(false)}/>
          ) : (
            <IoMenu className='sm:hidden block mx-2' size={32} color='black' onClick={()=> setIsOpen(true)}/>
          )
        }
        </motion.button>
        

        <div className="relative w-2xl">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full px-6 py-2 w-full pl-10 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500 " size={20} />
        </div>
        <Link href="/cart">
          
        </Link>

        

        <Link href="/userLogin" className='hidden sm:block'>
        <button className='bg-gradient-to-r from-violet-300 to-blue-300 text-white px-2 sm:px-6 py-2 rounded-full cursor-pointer text-sm sm:text-md sm:block hidden'>Sign In</button></Link>
        
      </div>

      {/* mobile navbar */}
      {/* <AnimatePresence> */}
        {
          isOpen && (
            <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="h-full "
            >
              <Sidebar />
            </motion.div>
            
          )
        }
      {/* </AnimatePresence> */}

     

      {/* navbar */}
      <div className='hidden sm:block '>
        <div className='flex flex-row '>

        
        

        <div className='flex flex-row justify-between w-full sm:pl-20'>
          {navbarData.map((item, index) => (
            <div key={index} className='flex flex-row items-center  justify-between py-2 hover:font-bold cursor-pointer'>
                <p className='text-neutral-900 text-md'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar