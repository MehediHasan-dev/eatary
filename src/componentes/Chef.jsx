import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Chef = ({ name, image, mail, twitter, linkedin }) => {
    return (

        /**
         * Chef Single item
         */
        <li>
            <figure className='img_holder rounded-[18px] relative group'>
                <img src={image}
                    width={482}
                    height={491}
                    loading='lazy'
                    role='img'
                    className='img_cover rounded-[18px]'
                    alt="chef image" />
                <div className='bg-primary max-w-fit absolute top-[6px] left-[6px] rounded-[5px] grid place-content-center py-[3px] px-[5px] md:px-[10px] md:py-[7px] lg:py-[5px] md:top-[10px] md:left-[10px]'>
                    <span className='text-white font-medium text-[.532rem] md:text-[1rem] lg:text-[1.0999rem]'>{name}</span>
                </div>

                {/* Gradient effect that appears on hover */}
                <div className='bg-gradient-to-b to-black/70 via-black/40 from-transparent bg-size-200 bg-pos-0 group-hover:bg-pos-100 w-full h-[30px] absolute bottom-0 left-0 md:h-[40px] lg:h-[60px] transition-all duration-[300ms] transform group-hover:translate-y-0 translate-y-full'>
                    <div className='w-full h-full flex items-center justify-center gap-[10px] md:gap-[20px] lg:gap-[30px]'>

                        {/* Email Icon with delayed transition */}
                        <Link to={mail} className='text-[.832rem] md:text-[1.3rem] lg:text-[1.5rem] text-neutral-100'>
                            <MdOutlineEmail className='text-white hover:text-primary cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] delay-100' />
                        </Link>

                        {/* Twitter Icon with delayed transition */}
                        <Link to={twitter} className='text-[.832rem] md:text-[1.3rem] lg:text-[1.5rem] text-neutral-100'>
                            <FiTwitter className='text-white hover:text-primary cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] delay-200' />
                        </Link>

                        {/* LinkedIn Icon with delayed transition */}
                        <Link to={linkedin} className='text-[.832rem] md:text-[1.3rem] lg:text-[1.5rem] text-neutral-100'>
                            <SlSocialLinkedin className='text-white hover:text-primary cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] delay-300' />
                        </Link>

                    </div>
                </div>

            </figure>

        </li>

    )
}

export default Chef
