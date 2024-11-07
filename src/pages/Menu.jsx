import React from 'react';
import { Helmet } from 'react-helmet-async';


/**
 * Components
 */
import ClientReviews from '../componentes/ClientReviews';
import AllMenus from '../componentes/AllMenus';
import BlogSection from '../componentes/BlogSection';
import BookingForm from '../componentes/BookingForm';

function Menu() {

    return (
        <main className='flex flex-col gap-[4rem] lg:gap-[7rem] pt-[120px] pb-[60px] lg:pb-[100px]'>

            {/* Page Title */}
            <Helmet>
                <title>Menu | Explore Eatary's Delicious Dishes</title>
                <meta
                    name="description"
                    content="Dive into Eatary's diverse menu! From appetizers to desserts, explore our fresh and flavorful offerings that cater to every palate."
                />
            </Helmet>

            {/* All Menu */}
            <AllMenus />

            {/* Client Reviews Section */}
            <ClientReviews />

            {/* Blog Section */}
            <BlogSection />

            {/* Booking Section */}
            <BookingForm />
        </main>
    );
}

export default Menu;
