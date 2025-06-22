'use client';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  description?: string;
  rating: number;
  image: string;
  time: number;
  totalDelivered: number;
  components: string[];
}

const ProjectCard = ({
  name,
  price,
  rating,
  image,
  time,
  totalDelivered,
  components,
}: ProductCardProps) => {
  return (
    <motion.div
      className="flex flex-col sm:items-start items-center text-neutral-900 bg-white shadow-md font-orbitron border border-emerald-500 rounded-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Image
        src={image}
        alt="product_image"
        width={100}
        height={100}
        className="object-cover w-[300px] h-[220px] bg-white rounded-md"
      />
      <div className="px-4 py-4">
        <p className="font-semibold font-orbitron">{name}</p>
        <div className="flex flex-row items-center">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={14} className="text-emerald-500" />
          ))}
          <p className="text-sm px-1 font-bold">
            ({rating} <span className="text-lg">+</span>)
          </p>
        </div>
        <div className="flex flex-row items-center gap-4 ">
          <p className="font-bold text-start ">{price} Tk</p>
          {/* <p>{time}</p>
          <p>{totalDelivered}</p>
          <p>{components}</p> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
