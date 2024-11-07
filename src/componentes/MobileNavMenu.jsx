import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MobileNavMenu = ({ isOpen, closeMenu }) => {
    return (
        <nav className={`lg:hidden absolute top-[100%] left-[50%] translate-x-[-50%] bg-white w-full pb-[20px]  max-w-[80%] rounded-lg shadow-sm transition-all duration-[200ms] origin-top -[999] ${isOpen ? ' scale-y-1 ' : ' scale-y-0 '} `}>

            <ul className='flex flex-col items-center justify-center gap-[10px] pt-[30px] pb-[15px]'>

                <li className='nav_item'>
                    <NavLink to='/' onClick={closeMenu}>Home</NavLink>
                </li>

                <li className='nav_item'>
                    <NavLink to='/About' onClick={closeMenu}>About</NavLink>
                </li>

                <li className='nav_item'>
                    <NavLink to='/Menu' onClick={closeMenu}>Menu</NavLink>
                </li>

                <li className='nav_item'>
                    <NavLink to='/Reservations' onClick={closeMenu}>Reservations</NavLink>
                </li>

                <li className='nav_item'>
                    <NavLink to='/Blog' onClick={closeMenu}>Blog</NavLink>
                </li>

                <li className='nav_item'>
                    <NavLink to='/Contact' onClick={closeMenu}>Contact</NavLink>
                </li>

            </ul>

            <Link to="/Reservations" className='pt-[30px] border-t-[1px] border-primary/35 mx-auto' onClick={closeMenu}>
                <button className="btn btn_primary block mx-auto min-w-[50%]">

                    <span>Book Table</span>

                </button>
            </Link>


        </nav>
    )
}

export default MobileNavMenu
