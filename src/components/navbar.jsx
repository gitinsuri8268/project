// src/components/Navbar.js

"use client";

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import menuItems from './data/menuItems';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
    <nav className="bg-white border border-slate-200 fixed w-full z-10 top-0">
      <div className="max-w-[1240px] container mx-auto px-4 py-[25px] flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Gitin Suri</Link>
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`md:flex items-center space-x-6 ${isOpen ? 'hidden' : 'hidden'} md:block`}>
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link href={item.link} className="text-gray-700 hover:text-gray-900">
                {item.title}
              </Link>
              {item.subItems && (
                <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg rounded-md py-2">
                  {item.subItems.map((subItem, subIndex) => (
                   
                    <Link key={subIndex} href={subItem.link} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                      {subItem.title} 
                    </Link>
                    
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={`md:hidden divide-y divide-slate-300 ${isOpen ? 'block' : 'hidden'}`}>
        {menuItems.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={() => toggleSubMenu(index)}>
              <Link href={item.link}>{item.title} </Link>
              {item.subItems && (
                <span>{openSubMenus[index] ? <IoIosArrowUp />
                  : <IoIosArrowDown />
}</span>
              )}
            </div>
            {item.subItems && openSubMenus[index] && (
              <div className="pl-4">
                {item.subItems.map((subItem, subIndex) => (
                  <Link key={subIndex} href={subItem.link} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
