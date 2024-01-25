import React, {useState} from 'react'
import Image from 'next/image';
import bmwlogo from '../Logo/bmw.png'
import phoneicon from '../Logo/phone.png'
import Link from 'next/link';
import { Menu, X } from 'lucide-react';




function Header() {

  const [isOpen, setisOpen] = useState(false)

  const toggleNavBar = () => {
    setisOpen(!isOpen)
  }





  return (
    <div className='flex items-center justify-between p-4  sm:w-full bg-none w-full'>
        <div>
         <Link href={'/'} >  <Image src={bmwlogo} alt="" className='w-28' /></Link> 
        </div>


        <div className='flex items-center justify-center gap-12 pl-16   bg-none'>
        <div className='sm:flex items-center justify-center gap-12 pl-16   bg-none hidden sm:shown ' >
        <Link href={'/'}>   <h1 className='text-white none hover:font-light font-thin cursor-pointer transition-transform transform hover:scale-110 hover:text-shadow-lg  text-xl'>Home</h1></Link>
        <Link href={'/ShowRoom'}>  <h1 className='text-white none hover:font-light font-thin cursor-pointer transition-transform transform hover:scale-110 hover:text-shadow-lg  text-xl'>ShowRoom</h1></Link>
        <Link href={''}>   <h1 className='text-white none hover:font-light font-thin cursor-pointer transition-transform transform hover:scale-110 hover:text-shadow-lg  text-xl'>Offers</h1></Link>
        <Link href={''}>  <h1 className='text-white none hover:font-light font-thin cursor-pointer transition-transform transform hover:scale-110 hover:text-shadow-lg  text-xl'>Agent</h1></Link>
        <Link href={''}>  <h1 className='text-white none hover:font-light font-thin cursor-pointer transition-transform transform hover:scale-110 hover:text-shadow-lg  text-xl'>Service</h1></Link>
       
        </div>

      <div>
<button onClick={toggleNavBar} className='shown text-white sm:hidden'>
                        {isOpen ? <X /> : <Menu />}
</button>
        </div>
      

        </div>
        {isOpen && (
          <div className='flex flex-row w-full z-10 flex-wrap gap-4 '>
            <Link href={'/'}>   <h1 className='text-white none hover:font-light font-thin cursor-pointer transition-transform transform hover:scale-110 hover:text-shadow-lg  text-xl'>Home</h1></Link>
        <Link href={'/ShowRoom'}>  <h1 className='text-white none hover:font-light font-thin cursor-pointer transition-transform transform hover:scale-110 hover:text-shadow-lg  text-xl'>ShowRoom</h1></Link>
        <Link href={''}>   <h1 className='text-white none hover:font-light font-thin cursor-pointer transition-transform transform hover:scale-110 hover:text-shadow-lg  text-xl'>Offers</h1></Link>
        <Link href={''}>  <h1 className='text-white none hover:font-light font-thin cursor-pointer transition-transform transform hover:scale-110 hover:text-shadow-lg  text-xl'>Agent</h1></Link>
        <Link href={''}>  <h1 className='text-white none hover:font-light font-thin cursor-pointer transition-transform transform hover:scale-110 hover:text-shadow-lg  text-xl'>Service</h1></Link>
       
           
          </div>

        )}






        <div className='transition-transform transform hover:scale-110 sm:flex items-center justify-center gap-3 hidden sm:shown  bg-none pr-7'>
            <Image src={phoneicon}
             alt="" className='w-8 text-black '/>
            <h1 className=' text-white font-thin cursor-pointer hover:font-light  hover:text-shadow-lg  text-l'>+9707779999</h1>
        </div>
    
    </div>
  )
}

export default Header
