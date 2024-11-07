import React, { useContext } from 'react'


/**
 * Context
 */
import { MenuContext } from '../context/MenuContext'

const MenuItem = ({ image, name, price }) => {


    const { currency } = useContext(MenuContext);

    return (
        <li className='flex flex-col gap-[10px] md:gap-[15px] group relative:'>
            <figure className='img_holder rounded-[16px]'>
                <img src={image[0]} alt="Dish" className='img_cover group-hover:scale-[1.02] transition-all duration-200' />
            </figure>

            <div className='flex justify-between items-center pb-[20px]'>
                <h3 className='capitalize hover:text-primary/80 font-primary font-medium transition-all duration-100 cursor-pointer'>{name}</h3>
                <span className='text-[1.1rem] font-semibold font-body text-primary pointer-events-none'>{currency}{price}</span>
            </div>
        </li>
    )
}

export default MenuItem
