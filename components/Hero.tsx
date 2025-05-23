import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <Image 
        src={"/images/banner1.png"}
        alt='hero_image'
        width={100}
        height={100}
        className='w-full '
        unoptimized
      />
    </div>
  )
}

export default Hero
