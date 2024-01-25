import React from 'react'
"useclient"


import Header from '../comps/Header';
import Image from 'next/image';
import Link from "next/link";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <> 
      <div className='w-full sm:h-[40vh] flex flex-col sm:flex-row items-center gap-10 justify-center bg-black'>
        <div className='w-full sm:w-[55vh] hover:brightness-125 cursor-pointer flex-col gap-10 m-4 rounded-xl flex justify-center items-center bg-cover bg-center sm:h-[30vh]'>
          <Link target="_blank" href="https://www.bmw-abudhabi.com/site/enquiry/">
            <button className='rounded-sm bg-none border border-red-800 hover:scale-105 shadow-blue-500 shadow-md text-white font-thin text-xl relative w-[30vh] sm:w-[400px] h-[70px] hover:text-shadow-lg hover:brightness-100 brightness-75 font-serif backdrop-blur-sm transition duration-200 ease-in-out hover:scale-10k'>
              Quick Support
            </button>
          </Link>
          <Link target="_blank" href="https://www.bmw-abudhabi.com/connected-drive-old/">
            <button className='rounded-sm bg-none border border-red-800 hover:scale-105 shadow-blue-500 shadow-md text-white font-thin text-xl relative w-[30vh]  sm:w-[400px] h-[70px] hover:text-shadow-lg hover:brightness-100 brightness-75 font-serif backdrop-blur-sm transition duration-200 ease-in-out hover:scale-10k'>
              My BMW
            </button>
          </Link>
        </div>

        <div className='w-full sm:w-[55vh] hover:brightness-125 cursor-pointer flex-col gap-10 m-4 rounded-xl flex justify-center items-center bg-cover bg-center sm:h-[30vh]'>
          <Link target="_blank" href="https://service.bmw-abudhabi.com/">
            <button className='rounded-sm bg-none border border-red-800 hover:scale-105 shadow-blue-500 shadow-md text-white font-thin text-xl relative w-[30vh] sm:w-[400px] h-[70px] hover:text-shadow-lg hover:brightness-100 brightness-75 font-serif backdrop-blur-sm transition duration-200 ease-in-out hover:scale-10k'>
              Book A Service
            </button>
          </Link>
          <Link target="_blank" href="https://www.bmw-abudhabi.com/find-us/">
            <button className='rounded-sm bg-none border border-red-800 hover:scale-105 shadow-blue-500 shadow-md text-white font-thin text-xl relative w-[30vh] sm:w-[400px] h-[70px] hover:text-shadow-lg hover:brightness-100 brightness-75 font-serif backdrop-blur-sm transition duration-200 ease-in-out hover:scale-10k'>
              Our Location
            </button>
          </Link>
        </div>

        <div className='w-full sm:w-[55vh] hover:brightness-125 cursor-pointer flex-col gap-10 m-4 rounded-xl flex justify-center items-center bg-cover bg-center sm:h-[30vh]'>
          <Link target="_blank" href="https://www.bmw-abudhabi.com/stock/">
            <button className='rounded-sm bg-none border border-red-800 hover:scale-105 shadow-blue-500 shadow-md text-white font-thin text-xl relative w-[30vh] sm:w-[400px] h-[70px] hover:text-shadow-lg hover:brightness-100 brightness-75 font-serif backdrop-blur-sm transition duration-200 ease-in-out hover:scale-10k'>
              View Stock
            </button>
          </Link>
          <Link target="_blank" href="https://www.bmw-abudhabi.com/news-events/">
            <button className='rounded-sm bg-none border border-red-800 hover:scale-105 shadow-blue-500 shadow-md text-white font-thin text-xl relative w-[30vh] sm:w-[400px] h-[70px] hover:text-shadow-lg hover:brightness-100 brightness-75 font-serif backdrop-blur-sm transition duration-200 ease-in-out hover:scale-10k'>
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className='w-full h-[10vh] text-slate-400 gap-3 font-bold flex items-center justify-center bg-black'>
        <div className='w-[6vh] h-[6vh] brightness-75 bg-cover bg-center flex items-center gap-10 justify-center bg-footerlogo'></div>
        <h1> @CopyRights Are Saved For Bmw</h1>
      </div>
    </>
  );
};


export default Footer
