"use client"
import Image from 'next/image'
import React from 'react'
import {  FaStar } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import {motion} from 'framer-motion'
import Link from 'next/link'
export interface ProductCardProps {
  id:number,
  name: string;
  price: number;
  description?: string;
  rating: number;
  image: string;
  time : string;
  totalDelivered: number;
  components: [],

 
  
}

const ProjectCard = ({name, price, rating,  image, time , totalDelivered, components}: ProductCardProps) => {
  return (
    <motion.div 
    className='flex flex-col items-start rounded-lg text-neutral-900 bg-white w-full sm:w-[300px] '
    initial={{opacity:0 , y:50}}
    whileInView={{opacity:1 , y:0}}
    transition={{duration:0.3}}
    viewport={{once:true}}
    >
      
       <div className='flex flex-row justify-between items-center w-full bg-white px-2 py-3'>
            
            
            <AiOutlineHeart size={18} className='mx-2 cursor-pointer' onClick={()=>(
              alert('Added to favourites')
            )}/>
       </div>
      <Image 
        src={image}
        alt='product_image'
        width={100}
        height={100}
        className='object-contain w-[300px] h-[280px] p-4 bg-white'
      />
        <p className='font-semibold mt-2'>{name}</p>
        <div className='flex flex-row items-center'>
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={14} className='text-emerald-500'/>
        ))}
            <p className='text-xs px-1'>({rating})</p>
        </div>
        
        <div className='flex flex-row items-center gap-4 mt-2'>
          <p className='font-bold text-start text-lg '>{price} Tk</p>
          
        </div>
       
      
    </motion.div>
  )
}

export default ProjectCard