import React from 'react';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import './Header.css';

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    const menuItem = <>
        <li><a href="/#about">About</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li><a href="/#login">Login</a></li>
    </>

    return (
        <header className='flex justify-between px-5 py-2 text-white'>
            <a href="/" className='logo text-2xl font-bold'>Habib</a>

            {/* Desktop Navbar */}
            <nav className='hidden lg:block'>
                <ul className='flex'>
                    {menuItem}
                </ul>
            </nav>

            {/* Mobile Navbar */}
            <nav className={!toggle ? 'mobile-nav left-[-100%]' : 'mobile-nav left-0'}>
                <ul className='flex flex-col'>
                    {menuItem}
                </ul>
            </nav>


            {/* Toggle Button */}
            <button onClick={handleToggle} className='block lg:hidden'>
                {!toggle ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
            </button>

        </header>
    );
};

export default Header;