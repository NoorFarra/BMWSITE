
"use client"
import React, {useEffect, useRef} from 'react';
import Header from './comps/Header';
import Footer from './comps/Footer';
import Link from 'next/link';
import { motion, useInView, useAnimation } from "framer-motion";



const Home = () => {

 

    return (
          <>
        
          
          <div className='w-full h-screen flex-col flex items-center justify-start bg-black bg-bmwface  bg-cover bg-center '>
         <Header />
          
          <div className='w-full h-full flex justify-center items-center   '>
            <div className='w-full h-full flex flex-col justify-center ml-12 items-center sm:items-start max-w-screen-md:flex-col pl-12' >
                <h1 className='font-thin text-7xl text-white'>Realize your dreams<br/> <span className='relative  left-1.5'>with BMW</span>  </h1>
                <p className='font-thin text-xl pt-6 relative  sm:left-8  text-white'>Travel the world with a combination of comfort, luxury and safety</p>
                <Link target="_blank" href="https://www.bmwusa.com/build-your-own.html#/series">   <button className= ' sm:left-36 rounded-sm bg-blue-800 text-white font-thin text-xl relative right-12 top-20 sm:top-10 w-[300px] h-[50px] hover:scale-105 hover:text-shadow-lg hover:brightness-100 brightness-75  font-serif transition-transform transform  '>  Build your car </button></Link>
                <Link target="_blank" href="https://www.bmw-abudhabi.com/new-models/the-new-x7-test-drive/"> <button className= ' sm:left-36 rounded-sm bg-white text-blue-800 font-thin text-xl relative right-12 top-24 sm:top-14 w-[300px] h-[50px] hover:scale-105 hover:text-shadow-lg hover:brightness-100 brightness-75 font-serif transition-transform transform  '>  Book a test drive</button></Link> 

            </div>


          </div>
          
          
          </div>









          <div className='w-full min-h-[40vh] flex-col sm:flex-row flex items-center gap-10 justify-center max-w-screen-md:flex-col bg-black'>
  <Link target="_blank" href="https://www.bmw-m.com/en/index.html">
    <div className='w-[40vh] sm:w-[55vh] hover:brightness-125 cursor-pointer hover:scale-105 transition-transform transform m-4 rounded-xl flex justify-center flex-co items-center bg-cover bg-center h-[30vh] bg-labelred'>
      <h1 className='text-slate-300 font-extrabold text-4xl sm:text-6xl'>Mpower</h1>
    </div>
  </Link>
  <Link target="_blank" href="https://www.bmwmotorcycles.com/en/home.html#/filter-all">
    <div className='w-[40vh] sm:w-[55vh] hover:brightness-125 cursor-pointer hover:scale-105 transition-transform transform m-4 rounded-xl flex justify-center flex-co items-center bg-cover bg-center h-[30vh] bg-bmwmotor'>
      <h1 className='text-slate-300 font-extrabold text-4xl sm:text-6xl'>Motorcycles</h1>
    </div>
  </Link>
  <Link target="_blank" href="https://www.bmwusa.com/all-electric.html">
    <div className='w-[40vh] sm:w-[55vh] hover:brightness-125 cursor-pointer hover:scale-105 transition-transform transform m-4 rounded-xl flex justify-center flex-co items-center bg-cover bg-center h-[30vh] bg-bmwi4'>
      <h1 className='text-slate-300 font-extrabold text-4xl sm:text-6xl'>M-electric</h1>
    </div>
  </Link>
</div>


<div className='w-full h-[50vh] flex-col flex items-center gap-10 justify-center bg-slate-200'>
  <div className='w-[48vh]  sm:w-[150vh] hover:brightness-90 brightness-90 cursor-pointer transition-transform transform m-4 flex justify-center flex-col items-center bg-cover bg-center rounded-xl sm:rounded-lg bg-showroom h-[60vh] shadow-blue-400 shadow-lg'>
    <Link href='/ShowRoom'>
      <button className='rounded-sm bg-none border hover:bg-slate-200 hover:text-blue-800 hover:border-blue-800 text-white font-thin text-xl relative top-[11vh] w-[40vh] sm:w-[400px] h-[70px] hover:text-shadow-lg hover:brightness-100 brightness-75 font-serif backdrop-blur-sm transition duration-200 ease-in-out'>
        ShowRoom
      </button>
    </Link>
  </div>
</div>



<Footer />



         
    

      </>
    );
};

export default Home;