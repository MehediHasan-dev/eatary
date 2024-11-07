import React from 'react'
import { Helmet } from 'react-helmet-async'


/**
 * Components
 */
import Hero from '../componentes/Hero'
import AboutUs from '../componentes/AboutUs'
import OurMenu from '../componentes/OurMenu'
import ReservationsBanner from '../componentes/ReservationsBanner'
import ClientReviews from '../componentes/ClientReviews'
import BlogSection from '../componentes/BlogSection'
import BookSection from '../componentes/BookSection'

const Home = () => {
    return (
        <main className='flex flex-col gap-[4rem] lg:gap-[7rem] pt-[120px] pb-[60px] lg:pb-[100px]'>

            {/* Home Page Title */}
            <Helmet>
                <title>Eatary | Your Favorite Destination for Delicious Dining</title>
                <meta
                    name="description"
                    content="Welcome to Eatary, the ultimate dining experience! Explore our menu, make reservations, and enjoy a delightful culinary journey with us."
                />
            </Helmet>

            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <AboutUs />

            {/* Our Menu Section */}
            <OurMenu />

            {/* Reservations Banner */}
            <ReservationsBanner />

            {/* Client Reviews Section */}
            <ClientReviews />

            {/* Blog Section */}
            <BlogSection />

            {/* Booking Section */}
            <BookSection />

        </main>
    )
}

export default Home
