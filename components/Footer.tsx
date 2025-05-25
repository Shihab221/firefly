import React from 'react';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiOutlineRadiusSetting,
  AiOutlineRollback,
  AiOutlineSafetyCertificate,
  AiOutlineSecurityScan,
  AiOutlineSetting,
  AiOutlineTruck,
} from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=" bg-neutral-900">
      {/* top four options */}
      <div className="flex flex-row justify-between items-center text-white py-5 px-20 font-orbitron font-bold">
        <li className="flex flex-col items-center justify-center gap-2 ">
          <AiOutlineSecurityScan size={36} className="text-emerald-500" />
          <h4 className="text-emerald-500">Smart Security</h4>
        </li>

        <li className="flex flex-col items-center justify-center gap-2 ">
          <AiOutlineRollback size={36} className="text-emerald-500" />
          <h4 className="text-emerald-500">Easy Return</h4>
        </li>

        <li className="flex flex-col items-center justify-center gap-2 ">
          <AiOutlineSetting size={36} className="text-emerald-500" />
          <h4 className="text-emerald-500">Simple Access</h4>
        </li>

        <li className="flex flex-col items-center justify-center gap-2 ">
          <AiOutlineTruck size={36} className="text-emerald-500" />
          <h4 className="text-emerald-500">Fast Delivery</h4>
        </li>
      </div>

      {/* bottom links */}
      <div className='flex flex-row px-20 gap-20'>
        <div className="flex flex-row justify-between items-center text-white py-10  w-full font-orbitron">
          <ul className="flex flex-col gap-2">
            <h4 className="text-emerald-500 font-bold">Company</h4>
            <li className=''>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>

          <ul className="flex flex-col gap-2">
            <h4 className="text-emerald-500 font-bold">Support</h4>
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Returns & Exchanges</li>
            <li>Shipping Information</li>
          </ul>

          <ul className="flex flex-col gap-2">
            <h4 className="text-emerald-500 font-bold">Resources</h4>
            <li>Blog</li>
            <li>Community</li>
            <li>Affiliate Program</li>
            <li>Gift Cards</li>
          </ul>

          
        </div>
        <div className='w-fit font-orbitron text-white py-10 '>
          <h4 className="text-emerald-500 font-bold">Follow Us</h4>
          <ul className="flex flex-row gap-4 text-white py-2 font-orbitron">
            <li className='flex flex-col items-center '><AiFillFacebook size={32} className='text-emerald-500 mb-2' /> Facebook</li>
            <li className='flex flex-col items-center '><AiFillTwitterSquare size={32}  className='text-emerald-500 mb-2' /> Twitter</li>
            <li className='flex flex-col items-center '> <AiFillInstagram size={32} className='text-emerald-500 mb-2' /> Instagram</li>
            <li className='flex flex-col items-center '><AiFillYoutube size={32} className='text-emerald-500 mb-2' /> YouTube</li>
          </ul>
        </div>
      </div>

      <div className="bg-neutral-800 flex flex-row justify-center py-2 font-orbitron">
        <p className="text-neutral-500 text-center text-sm">
          Copyright - FiFTech 2025 | Developed by - Shiku
        </p>
      </div>
    </div>
  );
};

export default Footer;
