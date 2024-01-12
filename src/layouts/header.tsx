import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    let Links =[
        {name:"Beranda",link:"/"},
        {name:"Tugas STI",link:"/project"},
        {name:"Kontak",link:"/contact"},
      ];
      let [open, setOpen] =useState(false);
    

    return (
        <div className='shadow-lg w-full fixed z-40 top-0 left-0'>
<div className={`flex items-center justify-between duration-500 py-4 px-7 bg-white`}>
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <BookOpenIcon className='w-7 h-7 text-blue-600'/>
                <span>Albivenanza</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className=' cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-bold'>
                        <Link to={link.link} className='text-gray-800 hover:text-blue-500 duration-500'>{link.name}</Link>
                    </li>))
                }
                <Link to="/uas" className='btn rounded-full bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 duration-500 md:static'>Kartu UJian</Link>
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Header;