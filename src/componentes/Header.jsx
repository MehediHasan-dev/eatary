

import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoMenu, IoClose } from "react-icons/io5";


/**
 * Import Assets
 */
import assets from '../assets/assets'

/**
 * Import Mobile Nav
 */
import MobileNavMenu from './MobileNavMenu'



const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle function to open/close the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to close the menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className='py-[20px] shadow-sm fixed top-0 left-0 w-full bg-[#FAF3E0] z-[999]'>
            <div className="container mx-auto flex items-center justify-between">

                {/* Nav Logo */}
                <h1>
                    <a href="/" aria-label='nav-logo'>
                        <img src={assets.logo}
                            width={76}
                            height={32}
                            alt="eatary" />
                    </a>
                </h1>

                {/* Nav List */}
                <nav className='hidden lg:block'>

                    <ul className='flex items-center gap-[20px]'>

                        <li className='nav_item h_after'>
                            <NavLink to='/'>Home</NavLink>
                        </li>

                        <li className='nav_item h_after'>
                            <NavLink to='/About'>About</NavLink>
                        </li>

                        <li className='nav_item h_after'>
                            <NavLink to='/Menu'>Menu</NavLink>
                        </li>

                        <li className='nav_item h_after'>
                            <NavLink to='/Reservations'>Reservations</NavLink>
                        </li>

                        <li className='nav_item h_after'>
                            <NavLink to='/Blog'>Blog</NavLink>
                        </li>

                        <li className='nav_item h_after'>
                            <NavLink to='/Contact'>Contact</NavLink>
                        </li>

                    </ul>


                </nav>

                {/* Header Wrapper */}
                <Link to="/Reservations">
                    <button className="btn btn_primary hidden lg:block ">

                        <span>Book Table</span>

                    </button>
                </Link>
                {/* Nav Toggle Btns */}

                <button
                    className={`w-[35px] h-[35px] grid place-items-center text-neutral-950 text-[35px] lg:hidden ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    {/* Open Icon (IoMenu) will show when the menu is closed */}
                    <span className={`open ${isMenuOpen ? 'hidden' : 'block'}`} aria-label='Open Menu'>
                        <IoMenu />
                    </span>

                    {/* Close Icon (IoClose) will show when the menu is open */}
                    <span className={`close ${isMenuOpen ? 'block' : 'hidden'}`} aria-label='Close Menu'>
                        <IoClose />
                    </span>
                </button>


                {/* Mobile Nav */}

                <MobileNavMenu isOpen={isMenuOpen} closeMenu={closeMenu} />

            </div>
        </header>
    )
}

export default Header
