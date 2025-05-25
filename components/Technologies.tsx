import Image from 'next/image';
import React from 'react';

const Technologies = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="sm:w-1/2 flex flex-col ">
        <Image
          src={'/images/xiao.webp'}
          alt="technology_picture"
          width={100}
          height={100}
          className="w-full px-3 py-3"
          unoptimized
        />
        <div className="flex flex-row items-center ">
          <Image
            src={'/images/meshtastic.webp'}
            alt="technology_picture"
            width={100}
            height={100}
            className="w-1/2 px-3 py-3"
            unoptimized
          />
          <Image
            src={'/images/raspberry-pi.webp'}
            alt="technology_picture"
            width={100}
            height={100}
            className="w-1/2 px-3 py-3"
            unoptimized
          />
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-wrap sm:w-1/2 ">
        <Image
          src={'/images/home_assistant.webp'}
          alt="technology_picture"
          width={100}
          height={100}
          className="w-1/2 px-3 py-3"
          unoptimized
        />
        <Image
          src={'/images/great_deals.png'}
          alt="technology_picture"
          width={100}
          height={100}
          className="w-1/2 px-3 py-3"
          unoptimized
        />
        <Image
          src={'/images/nvidia.png'}
          alt="technology_picture"
          width={100}
          height={100}
          className="w-1/2 px-3 py-3"
          unoptimized
        />
        <Image
          src={'/images/tariff.webp'}
          alt="technology_picture"
          width={100}
          height={100}
          className="w-1/2 px-3 py-3"
          unoptimized
        />
      </div>
    </div>
  );
};

export default Technologies;
