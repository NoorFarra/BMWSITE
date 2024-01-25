"use client"

import React from "react";
import Slider from "react-slick";
import Header from '../comps/Header';
import Image from 'next/image';
import Link from "next/link";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Footer from "../comps/Footer";


const page = () => {
    

  return (
    
  
    <>
  <motion.div
  variants={{
    hidden: {opacity:0, y:100},
    shown: {opacity:100, y:0},
  }}
  initial="hidden"
  animate="shown"
  transition={{duration: 0.35, delay: 0.15}}

  >
    <div className='w-full h-screen flex-col flex items-center justify-start bg-black bg-bmwface2  bg-cover bg-center '>
          <Header />

           

          <div className=" w-3/5 h-full  gap-8  flex justify-center flex-col items-center">
            <div className=" w-11/12 gap-5 h-2/6 mt-12 flex justify-center  items-center">
              
            <div className=" w-full h-full border-2 rounded-lg transition-transform bg-Periodic bg-cover bg-center  transform hover:scale-105 " >
                <div className=" w-full h-full flex justify-center gap-10 items-center flex-col backdrop-blur-sm   cursor-pointer "  >
                        <h1 className="text-white font-mono text-4xl">Periodic maintenance</h1>
                        <button className="w-3/4 h-12 rounded-3xl font-mono text-white bg-blue-400 transition duration-100 ease-in-out hover:bg-blue-700">Book your appointment</button>
                </div>
            </div> 
            <div className=" w-full h-full border-2 rounded-lg transition-transform bg-parts bg-cover bg-center  transform hover:scale-105 " >
                <div className=" w-full h-full flex justify-center gap-10 items-center flex-col backdrop-blur-sm   cursor-pointer "  >
                        <h1 className="text-white font-mono text-4xl">BMW Parts</h1>
                        <button className="w-3/4 h-12 rounded-3xl font-mono text-white bg-blue-400 transition duration-100 ease-in-out hover:bg-blue-700">Book your appointment</button>
                </div>
            </div>
            
            </div>
            
            <div className=" w-11/12 h-2/6 border-2 rounded-lg backdrop-blur-sm   bg-cover bg-center"></div>
          </div>

          </div>




<Footer/>
</motion.div>

    </>
   
  )
}

export default page
