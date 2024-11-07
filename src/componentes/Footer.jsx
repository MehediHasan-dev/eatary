// import React from 'react'


// /**
//  * Assets
//  */
// import { assets } from "../assets/assets"

// const Footer = () => {
//     return (
//         <footer>
//             <div className="container">

//                 <div>

//                     {/* Nav Logo */}
//                     <h1>
//                         <a href="/" aria-label='nav-logo'>
//                             <img src={assets.logo}
//                                 width={76}
//                                 height={32}
//                                 alt="eatary" />
//                         </a>
//                     </h1>

//                 </div>


//             </div>
//         </footer>
//     )
// }

// export default Footer



import React from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-[#333333] text-white py-[30px]'>
            <div className="container mx-auto">

                <div className='grid gap-[20px] mb-[50px] md:grid-cols-[repeat(2,1fr)] md:gap-[30px] lg:grid-cols-[repeat(3,1fr)]'>
                    <div className='flex flex-col gap-[15px] md:col-span-2 lg:col-span-1 lg:gap-[25px]'>
                        {/* Footer Logo */}
                        <h1>
                            <a href="/" aria-label='nav-logo'>
                                <img src={assets.FooteLogo}
                                    width={76}
                                    height={32}
                                    alt="eatary" />
                            </a>
                        </h1>

                        <p className='text-neutral-300 max-w-[290px] leading-[1.6]'>
                            Unforgettable Culinary Experiences
                            Await at Heaven Palate
                        </p>

                        <Link to="/Reservations">
                            <button className="btn btn_primary">
                                Reserve Table {"->"}
                            </button>
                        </Link>
                    </div>

                    <nav className='flex flex-col gap-[15px]'>

                        <h3 className='font-primary font-medium text-[1.8rem] lg:text-[2.6rem]'>Pages</h3>

                        <ul className='flex flex-col gap-[8px]'>
                            <li className='font-primary text-neutral-100 text-[1.1rem] hover:text-primary transition-all duration-150 max-w-fit'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='font-primary text-neutral-100 text-[1.1rem] hover:text-primary transition-all duration-150 max-w-fit'>
                                <Link to="/About">About</Link>
                            </li>
                            <li className='font-primary text-neutral-100 text-[1.1rem] hover:text-primary transition-all duration-150 max-w-fit'>
                                <Link to="/Menu">Menu</Link>
                            </li>
                            <li className='font-primary text-neutral-100 text-[1.1rem] hover:text-primary transition-all duration-150 max-w-fit'>
                                <Link to="/Reservations">Reservations</Link>
                            </li>
                            <li className='font-primary text-neutral-100 text-[1.1rem] hover:text-primary transition-all duration-150 max-w-fit'>
                                <Link to="/Blog">Blog</Link>
                            </li>
                            <li className='font-primary text-neutral-100 text-[1.1rem] hover:text-primary transition-all duration-150 max-w-fit'>
                                <Link to="/Contact">Contact</Link>
                            </li>
                        </ul>

                    </nav>

                    <div className='flex flex-col gap-[15px]'>

                        <div className='flex flex-col gap-[10px]'>
                            <h3 className='font-primary font-medium text-[1.8rem] lg:text-[2.6rem] '>
                                Adress
                            </h3>

                            <address className='text-neutral-400 font-body text-[.893rem] md:max-w-[230px] '>
                                782 S Westwood Blvd, Los
                                Angeles, CA 90024
                            </address>

                        </div>

                        <div className='flex flex-col gap-[10px]'>

                            <h3 className='font-primary font-medium text-[1.8rem] lg:text-[2.6rem]'>
                                Hours
                            </h3>

                            <div className='flex flex-col gap-[10px] md:max-w-[250px]'>
                                <span className='text-neutral-400 font-body text-[.893rem]'>
                                    Monday - Saturday: 9:00 AM -
                                    12:00 PM
                                </span>
                                <span className='text-neutral-400 font-body text-[.893rem]'>
                                    Sunday : 6:00 AM - 12:00 PM
                                </span>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='pt-[20px] border-t border-neutral-600 text-center'>
                    2024  <span className='text-primary/80 font-primary font-semibold'>Eatery,</span> rights reserved
                </div>

            </div>
        </footer>
    )
}

export default Footer
