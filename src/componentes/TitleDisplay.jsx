import React from 'react'
import { Link } from 'react-router-dom'

const TitleDisplay = ({ title, text, hasImage, isAbsolute, imageUrl, btn, btnText, linkPath }) => {
    return (

        /**
         * Title Display
         */
        <div className={`relative flex flex-col items-center justify-center gap-[15px] text-center ${hasImage ? 'mb-12' : 'mb-8'}`}>
            {hasImage && (
                <img src={imageUrl} alt="Page visual" className="w-full max-w-5xl h-auto mb-6" />
            )}
            <h1
                className={`text-[2.5rem] font-semibold lg:text-[5rem] font-primary ${isAbsolute ? 'absolute' : 'relative'}`}
            >
                {title}
            </h1>

            {text && (
                <p className='text-[.987rem] lg:text-[1.22rem] max-w-[560px] leading-[26px] lg:leading-[1.7]'>
                    {text}
                </p>
            )}

            {/* Conditionally render the button based on the 'btn' prop */}
            {btn && (
                <Link to={linkPath}>
                    <button className="btn btn_primary mt-[25px]">
                        {btnText || 'Click Me'}
                    </button>
                </Link>
            )}
        </div>
    )
}

export default TitleDisplay
