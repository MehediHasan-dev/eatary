import React from 'react'
import { Helmet } from 'react-helmet-async';

/**
 * Components
 */
import BookSection from '../componentes/BookSection';


const Reservations = () => {
    return (
        <main className='flex flex-col gap-[4rem] lg:gap-[7rem] pt-[120px] pb-[60px] lg:pb-[100px]'>

            {/* Page Title */}
            <Helmet>
                <title>Reserve a Table | Book Your Dining Experience at Eatary</title>
                <meta
                    name="description"
                    content="Secure your spot at Eatary with an easy online reservation system. Book now and enjoy a memorable meal with us. Quick and hassle-free reservations await!"
                />
            </Helmet>

            {/* Booking Section */}
            <BookSection
                useTitleDisplay={true}
            />



        </main>
    )
}

export default Reservations
