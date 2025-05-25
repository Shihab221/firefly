'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { ProjectsData } from '@/lib/Constant';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const Page = () => {
  const params = useParams();
  const id = params?.id;
  const productId = Array.isArray(id) ? id[0] : id;

  if (!productId || isNaN(parseInt(productId, 10))) {
    return <p className="text-red-500 text-center mt-10">Invalid product ID</p>;
  }

  const product = ProjectsData.find(
    (item) => item.id === parseInt(productId, 10)
  );
  if (!product) {
    return <p className="text-red-500 text-center mt-10">Product not found</p>;
  }

  return (
    <div className="px-10 py-10 sm:px-20 min-h-screen flex-col">
      <div className="flex flex-col sm:flex-row gap-10 ">
        {/* Image Section */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 w-full sm:w-2/3">
          <div className="flex flex-row sm:flex-col gap-3">
            <Image
              src={product.image}
              alt="product_image"
              width={100}
              height={100}
              className="w-40 object-contain"
              unoptimized
            />
            <Image
              src={product.image}
              alt="product_image"
              width={100}
              height={100}
              className="w-40 object-contain"
              unoptimized
            />
            
          </div>
          <Image
            src={product.image}
            alt="product_image"
            width={640}
            height={500}
            className="w-full object-contain"
            unoptimized
          />
        </div>

        {/* Details Section */}
        <div className="text-neutral-900 flex flex-col justify-between gap-4 w-full sm:w-1/3 font-orbitron">
          <h2 className="font-semibold text-2xl">{product.name}</h2>

          <div className="flex flex-row gap-2 items-center text-xl border-b border-neutral-400 pb-4">
            <p className="font-semibold">{product.price} Tk</p>
          </div>

          {/* Rating Section */}
          <div className="pb-4 border-b border-neutral-400 flex flex-col gap-2">
            <div className="flex flex-row items-center gap-1">
              Rating:
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} className="text-emerald-500" />
              ))}
              <span className="text-sm text-neutral-600 ml-2">
                ({product.rating} +)
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-neutral-800 text-justify font-roboto">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-2 items-center">
            <div className="flex flex-row gap-2 items-center justify-between mt-4 w-full">
              <button className="bg-emerald-500 text-white px-4 py-2 hover:bg-emerald-600 transition duration-200 w-full">
                Add To Cart
              </button>
              <button className="bg-emerald-500 text-white px-4 py-2 hover:bg-emerald-600 transition duration-200">
                <AiOutlineHeart size={24} />
              </button>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 transition duration-200 w-full">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="flex flex-col gap-4 mt-10 ">
        <h4 className="font-semibold text-xl text-neutral-900">Details:</h4>
        <p className="text-md text-neutral-800 text-justify leading-relaxed">
          {Array(3).fill(product.description).join('\n\n')}
        </p>
      </div>
    </div>
  );
};

export default Page;
