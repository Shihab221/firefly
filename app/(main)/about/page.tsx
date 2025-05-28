import Image from 'next/image'
import React from 'react'
const profiles = [
    {
        name: 'Rakibuzzaman Rabin',
        image: '/images/rabin.jpg',
        position: 'Founder',
        project_conducted : 40,
    },
    {
        name: 'Shihab Ahemed',
        image: '/images/shihab.jpg',
        position: 'CTO',
        project_conducted : 40,
    }
]
const page = () => {
  return (
    <div className='px-10 sm:px-20 py-10'>
        <h4 className='font-orbitron text-xl text-orange-500 text-center mb-4 font-bold'>FiFtech Management</h4>
        <div className='flex flex-row gap-4 items-center justify-evenly'>
        {profiles.map((item,index)=>(
            <div key={index} className='flex flex-row items-center bg-white shadow-md'>
                <Image
                    src={item.image}
                    alt='peofile_image'
                    width={100}
                    height={100}
                    className='w-32 h-36 object-cover'
                />
                <div className='px-4'>
                    <p className='text-sm font-orbitron'>{item.name}</p>
                    <p className='text-sm font-orbitron'>{item.position}</p>
                    <p className='text-sm font-orbitron'>Projects: {item.project_conducted} +</p>
                    <button className='bg-emerald-500 px-2 py-0 my-1 font-orbitron text-white text-sm'>
                        Porfolio
                    </button>
                </div>
                
            </div>
        ))}
        </div>

        <div className='mt-10'>
            <h4 className='font-orbitron text-xl text-orange-500 text-center mb-4 font-bold'>About FIftech</h4>
            <div className='flex flex-col sm:flex-row gap-6 items-center'>
                <p className='max-w-2xl text-justify '>
                Fire Fly High Tech is a cutting-edge Research & Development company dedicated to creating innovative electronic products and tailored technology solutions. With a strong focus on innovation and quality, we specialize in bringing ideas to life through comprehensive project making services, advanced PCB designing, and precise 3D printing capabilities.

                Our multidisciplinary team combines expertise in electronics engineering, product design, and prototyping to deliver end-to-end solutions that meet the unique needs of startups, businesses, and individual inventors alike. Whether you’re looking to develop a new electronic device, optimize your circuit design, or produce functional prototypes, Fire Fly High Tech provides a seamless experience from concept to creation.
                </p>

                <div className='flex flex-col'>
                    <h4 className='font-orbitron text-lg text-emerald-500 font-semibold'>
                        Services:
                    </h4>
                    <p className='text-justify'>
                        Custom Project Development: We collaborate closely with clients to understand their vision and transform concepts into fully functional electronic projects, ensuring innovation and practical usability at every stage.
                        <br/><br/>
                        PCB Design & Fabrication: Utilizing the latest CAD tools and industry standards, we design high-performance printed circuit boards tailored to your specific requirements, optimized for reliability and manufacturability.
                        <br/><br/>
                        3D Printing & Rapid Prototyping: Our state-of-the-art 3D printing technology allows for fast, precise prototype creation, helping you validate designs and accelerate product development cycles.
                        <br/><br/>
                        Product Testing & Validation: We rigorously test and refine prototypes to guarantee functionality, durability, and compliance with relevant standards.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
