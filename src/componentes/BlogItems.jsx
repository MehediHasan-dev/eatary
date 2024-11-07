import React from 'react'

const BlogItems = ({ image, title, date }) => {
    return (
        <li className='grid gap-[10px] group'>
            <figure className='img_holder rounded-[16px] '>
                <img src={image} width={483} height={380} loading='lazy' alt="Blog Image" className='img_cover group-hover:scale-[1.02] transition-all duration-300' />
            </figure>

            <div className='flex flex-col gap-[10px]  justify-start items-start pb-[20px]'>
                <span className='font-primary text-primary text-[.83rem] font-semibold'>{date}</span>
                <h3 className='text-[1.1rem] font-medium text-neutral-700 hover:text-blue-950 cursor-pointer transition-all duration-300'>{title}</h3>
            </div>
        </li>
    )
}

export default BlogItems
