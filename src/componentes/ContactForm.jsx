import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { SlSocialPintarest } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";





import TitleDisplay from './TitleDisplay'
import { Link } from 'react-router-dom'

const ContactForm = () => {
    return (
        <section>
            <div className="container mx-auto">

                {/* Section Title */}
                <TitleDisplay
                    title="Contact Us"
                />

                {/* Contact Form */}
                <div className=' max-w-[1140px] md:max-h-[570px] mx-auto grid gap-[50px] md:grid-cols-[repeat(2,1fr)] md:gap-[80px] lg:gap-[124px]'>
                    <div className='flex flex-col gap-[30px] order-2 md:order-1'>
                        <div className='flex items-center gap-[20px]'>
                            <div className='w-[60px] h-[60px] bg-[#333333] grid place-content-center text-[23px] text-neutral-50 rounded-full cursor-default'>
                                <MdOutlineMail />
                            </div>
                            <div className='flex flex-col gap-[3px]'>
                                <span className='text-neutral-950 font-medium'>Email us</span>
                                <Link className='hover:text-neutral-700'>info@eatery.com</Link>
                            </div>
                        </div>
                        <div className='flex items-center gap-[20px]'>
                            <div className='w-[60px] h-[60px] bg-[#333333] grid place-content-center text-[23px] text-neutral-50 rounded-full cursor-default'>
                                <LuPhone />
                            </div>
                            <div className='flex flex-col gap-[3px]'>
                                <span className='text-neutral-950 font-medium'>Phone us</span>
                                <Link className='hover:text-neutral-700'>123 456 789</Link>
                            </div>
                        </div>
                        <div className='flex items-center gap-[20px]'>
                            <div className='w-[60px] h-[60px] whitespace-nowrap bg-[#333333] grid place-content-center text-[23px] text-neutral-50 rounded-full cursor-default'>
                                <SlLocationPin />
                            </div>
                            <div className='flex flex-col gap-[3px]'>
                                <span className='text-neutral-950 font-medium'>Find us</span>
                                <address className='not-italic'>123 Name Street, Kolma, 45678,
                                    Stateville</address>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className='border border-neutral-400/40 rounded-[10px] w-full h-[60px] flex items-center justify-center gap-[10px] mt-[40px] md:mt-auto'>
                            <Link className='text-[22px] hover:text-primary transition-all duration-200 w-[30px] h-[30px] grid place-content-center rounded-[10px]'>
                                <FaInstagram />
                            </Link>
                            <Link className='text-[22px] hover:text-primary transition-all duration-200 w-[30px] h-[30px] grid place-content-center rounded-[10px]'>
                                <CiFacebook />
                            </Link>
                            <Link className='text-[22px] hover:text-primary transition-all duration-200 w-[30px] h-[30px] grid place-content-center rounded-[10px]'>
                                <SlSocialPintarest />
                            </Link>
                            <Link className='text-[22px] hover:text-primary transition-all duration-200 w-[30px] h-[30px] grid place-content-center rounded-[10px]'>
                                <AiOutlineYoutube />
                            </Link>
                            <Link className='text-[22px] hover:text-primary transition-all duration-200 w-[30px] h-[30px] grid place-content-center rounded-[10px]'>
                                <FaXTwitter />
                            </Link>
                        </div>
                    </div>

                    <form className='flex flex-col gap-[20px] md:order-2 '>

                        <div>
                            <label htmlFor="firstName">First Name*</label>
                            <input type="text" className="input_field" />
                        </div>

                        <div>
                            <label htmlFor="lastName">Last Name*</label>
                            <input type="text" className="input_field" />
                        </div>

                        <div>
                            <label htmlFor="email">Email*</label>
                            <input type="text" className="input_field" />
                        </div>

                        <div>
                            <label htmlFor="Message">Message</label>
                            <textarea name="Message" id="" className='input_field min-h-[80px] py-[10px]'></textarea>
                        </div>

                        <button className="btn btn_primary min-h-[60px]">
                            Book Table
                        </button>

                    </form>

                </div>

            </div>
        </section>
    )
}

export default ContactForm
