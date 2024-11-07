import React from 'react'

const TestiCard = ({ image, name, title, desc }) => {
    return (
        <li className='border-[1px] shadow-sm max-w-[350px] lg:max-w-[450px] min-h-[250px] border-neutral-300 p-[20px] md:p-[30px] lg:p-[40px] flex flex-col justify-between items-start gap-[30px] rounded-[16px] flex-shrink-0'>

            <p className='text-neutral-600 leading-[1.6]min-h-[120px] overflow-y-auto'>{desc}</p>

            <div className='flex items-end gap-[20px]'>
                <figure className='img_holder rounded-full'>
                    <img src={image}
                        width={70}
                        height={70}
                        alt="client avatar"
                        className='img_cover rounded-full'
                    />
                </figure>

                <div className='flex flex-col gap-[5px]'>
                    <span className='text-neutral-900 font-primary text-[1.1rem] font-semibold'>{name}</span>
                    <p className='text-neutral-600 font-medium text-[.981rem]'>{title}</p>
                </div>

            </div>


        </li>
    )
}

export default TestiCard
