"use client"

import React from "react";
import Slider from "react-slick";
import Header from '../comps/Header';
import Image from 'next/image';
import Footer from "../comps/Footer";
import Link from "next/link";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const show = () => {
  


  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true
  };

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
   <div className='w-full h-screen flex-col flex items-center justify-start bg-black bg-bmwface3  bg-cover bg-center '>
          <Header />


          <div className='w-full h-full m-auto     relative  backdrop-blur-sm flex justify-center items-center flex-col' >

          <div className='w-4/5 m-auto    relative  backdrop-blur-sm '>
            <div >
            <Slider {...settings} >
              {Data.map((d) => (
                <div className='border transition-transform transform hover:scale-95 flex justify-between items-center  h-[350px] text-white rounded-xl'>
                  <div className=' rounded-t-xl bg-none flex items-center justify-center '>
                  <img src={d.img} className=' h-[13vh] sm:h-36 w-50 pt-3 rounded--full' alt="" />
                  </div>
                  
                  <div className='flex flex-col justify-center items-center gap-4 p-4 '>
                    <h1 className='text-xl text-center font-thin'>{d.name}</h1>
                    <p className='text-xl text-center font-thin'>{d.price}</p>
                  </div>

               <div className='flex  justify-center items-center '> 
                <button 
                className="rounded-sm bg-none border hover:bg-slate-200 hover:text-black hover:border-black  text-white font-thin text-xl  w-[15vh] sm:w-[200px] h-[50px]  hover:text-shadow-lg hover:brightness-100 brightness-75  font-serif  backdrop-blur-sm  transition duration-200 ease-in-out ">ViewMore
                </button>
               </div> 
                </div>
              ))}
              </Slider>
              
            </div>
          </div>


 <div className='w-4/5 m-auto    relative  backdrop-blur-sm '>
            <div >
            <Slider {...settings} >
              {Data.map((d) => (
                <div className='border transition-transform transform hover:scale-95  flex justify-between items-center h-[350px] text-white rounded-xl'>
                  <div className=' rounded-t-xl bg-none flex items-start justify-center '>
                  <img src={d.img} className='h-[13vh] sm:h-36 w-50 pt-3 rounded--full' alt="" />
                  </div>
                  
                  <div className='flex flex-col justify-center items-center gap-4 p-4 '>
                    <h1 className='text-xl text-center font-thin'>{d.name}</h1>
                    <p className='text-xl text-center font-thin'>{d.price}</p>
                  </div>

               <div className='flex  justify-center items-center '> 
                <button 
                className="rounded-sm bg-none border hover:bg-slate-200 hover:text-black hover:border-black  text-white font-thin text-xl  w-[15vh] sm:w-[200px] h-[50px]  hover:text-shadow-lg hover:brightness-100 brightness-75  font-serif  backdrop-blur-sm  transition duration-200 ease-in-out ">ViewMore
                </button>
               </div> 
                </div>
              ))}
              </Slider>
              
            </div>
          </div>

          </div>
       

         
         

          </div></motion.div>

          
<Footer />



  </>
  )
}


const Data = [
  {
    img:"https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png",
    name: `BWM-4SERIES`,
    price: `Starting At 43,800$`
  },
  {
    img:"https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png",
    name: `BWM-2SERIES`,
    price: `Starting At 38,000$`
  },
  {
    img:"https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png",
    name: `BWM-M8`,
    price: `Starting At 108,000$`
  },
  {
    img:"https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png",
    name: `BWM-7SERIES`,
    price: `Starting At 95,700$`
  },
  {
    img:"https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png",
    name: `BWM-X3`,
    price: `Starting At 45,000$`
  },
  {
    img:"https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png",
    name: `BWM-X5M`,
    price: `Starting At 107,000$`
  },
]

export default show
