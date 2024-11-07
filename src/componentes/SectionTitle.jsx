import React from 'react'
import { Link } from 'react-router-dom'

const SectionTitle = ({ title, subtitle, text, className, btn, btnText, linkPath }) => {
    return (
        <div className={`flex flex-col gap-[24px] md:gap-0 md:flex-row md:justify-between items-end `}>
            <div className={`flex gap-[10px] flex-col ${className}`}>
                {subtitle && (
                    <h5 className='text-primary font-medium'>{subtitle}</h5>
                )}
                <h2 className={`text-[2.3rem] lg:text-[3.8rem] font-semibold font-primary ${className}`}>
                    {title}
                </h2>
                {text && (
                    <div className='text-[.978rem] text-neutral-600 font-normal lg:text-[1.3rem]  lg:leading-[30px]'>
                        {text}
                    </div>
                )}

            </div>

            {/* Button */}

            {btn && (
                <Link to={linkPath} className="btn ms-auto ">
                    <span className='font-primary font-medium hover:text-primary transition-all duration-[250ms] whitespace-nowrap'>{btnText}</span>
                </Link>
            )}

        </div>
    )
}



export default SectionTitle
