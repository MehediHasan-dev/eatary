import React from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'

const Banner = ({ bgImageURL, btnText, btn, title, styleType, className, ImgclassName }) => {
    return (
        <div className='relative grid place-content-center'>
            {/* Banner Background Image */}
            <div className="img_holder min-h-[300px] w-full">
                <img src={bgImageURL}
                    width={1520}
                    height={468}
                    className="img_cover rounded-[20px] w-full h-auto" />
            </div>

            {/* Conditional rendering based on the style type */}
            {styleType === 'style1' ? (
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full flex flex-col gap-[20px] lg:gap-[40px] items-center justify-center">
                    <h1 className={`text-white capitalize font-primary font-semibold text-[1.7rem] md:text-[2.3rem] lg:text-[2.5rem] lg:max-w-[600px] px-[30px] lg:px-0  text-center ${className}`}>{title}</h1>
                    {btn && (
                        <Link to="/Reservations" className="btn btn_primary min-w-[200px] lg:min-w-[350px] flex items-center justify-center border-[1px]"><span>{btnText}</span></Link>
                    )}
                </div>
            ) : (

                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full lg:px-[40px] xl:px-[70px]'>
                    <div className="flex justify-center lg:justify-between items-center w-full h-full">
                        {/* Left Side - Stats */}
                        <div className='grid grid-cols-2 text-white text-center flex-shrink-0'>
                            {/* Stats Items */}
                            <div className='w-[180px] lg:w-[190px] lg:pr-[50px] h-[130px] text-center flex items-center justify-center flex-col'>
                                <span className='font-primary text-[2rem] text-[#FFEDBF] font-medium'>2</span>
                                <p className='whitespace-nowrap text-[.786rem] text-[#C2BA8C]'>MICHELIN STARS</p>
                            </div>
                            <div className='w-[180px] lg:w-[190px] h-[130px] text-center flex items-center justify-center flex-col border-l-[2px]'>
                                <span className='font-primary text-[2rem] text-[#FFEDBF] font-medium'>6</span>
                                <p className='whitespace-nowrap text-[.786rem] text-[#C2BA8C]'>Total Chefs</p>
                            </div>
                            <div className='w-[180px] lg:w-[190px] lg:pr-[50px] h-[130px] text-center flex items-center justify-center flex-col border-t-[2px]'>
                                <span className='font-primary text-[2rem] text-[#FFEDBF] font-medium'>5000+</span>
                                <p className='whitespace-nowrap text-[.786rem] text-[#C2BA8C]'>Served Customers</p>
                            </div>
                            <div className='w-[180px] lg:w-[190px] h-[130px] text-center flex items-center justify-center flex-col border-l-[2px] border-t-[2px]'>
                                <span className='font-primary text-[2rem] text-[#FFEDBF] font-medium'>15000+</span>
                                <p className='whitespace-nowrap text-[.786rem] text-[#C2BA8C]'>Served Dishes</p>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <figure className='bg-transparent rounded-[18px] flex-shrink-0 w-[50%] xl:w-[60%] h-auto hidden lg:block'>
                            <img
                                src={assets.aboutServiceImage}
                                alt="service image"
                                className='w-full h-auto object-contain rounded-[inherit]'
                            />
                        </figure>
                    </div>
                </div>

            )}
        </div >
    )
}

export default Banner
