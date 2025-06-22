"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { AiFillMobile, AiFillPropertySafety, AiFillTruck} from 'react-icons/ai';

const WhyData = [
  {
    text: 'Fast Delivery',
    icon: AiFillTruck,
  },
  {
    text: '24/7 Support',
    icon: AiFillMobile,
  },
  {
    text: 'Lab Tested Goods',
    icon: AiFillPropertySafety,
  },
];

const Whyfif = () => {
  return (
    <div className="p-4 bg-white">
      <h4 className="font-bold text-xl mb-4 font-orbitron">Why FiFtech?</h4>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 w-full sm:w-1/2">
          {WhyData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4"
                key={index} 
                >
                <Icon className="w-16 h-16 text-emerald-500"/>
                <p className="text-emerald-500 mt-2 font-orbitron">{item.text}</p>
              </motion.div>
            );
          })}
        

       
        <Image
          src="/images/whyfif.jpg"
          alt="fiftech_feature"
          width={200}
          height={200}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default Whyfif;
