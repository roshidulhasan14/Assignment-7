import React from 'react';
import {navbar} from 'react'

const Navbar = () => {
    return (
        <div className="navbar max-w-[1250px] mx-auto ">
          <div className="navbar-start">
            <a className="font-bold text-xl">CS — Ticket System</a>
          </div>
          <div className="navbar-end flex items-center font-semibold text-xl">

              <ul className="px-1 flex items-center ">
                <li className='mr-3'><a>Home</a></li>
                <li className='mr-3'><a>FAQ</a></li>
                <li className='mr-3'><a>Changelog</a></li>
                <li className='mr-3'><a>Blog</a></li>
                <li className='mr-3'><a>Download</a></li>
                <li className='mr-3'><a>Contact</a></li>
              </ul>
            
              <div className="">
                <button className='bg-gradient-to-l from-[#975BF0] to-[#632EE3] p-2 rounded-sm'>+ New Ticket</button>
              </div>
          </div>
        </div>
    );
};

export default Navbar;