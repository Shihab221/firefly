'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const navbarData = [
  { title: 'Home', url: '/' },
  { title: 'View Projects', url: '/allprojects' },
  { title: 'New Arrival', url: '#' },
  { title: 'PCB Printing', url: '/pcbprinting' },
  { title: 'Project Booking', url: '/bookproject' },
  { title: 'Shop', url: '/https://shop-roboflybd.vercel.app/' },
  { title: 'About Fiftech', url: '/about' },
];
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      {isOpen && (
        <div className="flex flex-col justify-between w-full ">
          {navbarData.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between py-2 hover:font-semibold cursor-pointer"
            >
              <Link href={`${item.url}`}>
                  <p className="text-neutral-900 text-md">{item.title}</p>
                </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
