import React from 'react'
import { Helmet } from 'react-helmet-async';


/**
 * Components
 */
import AboutBanner from '../componentes/AboutBanner';
import Banner from '../componentes/Banner';
import assets from '../assets/assets';
import ClientReviews from '../componentes/ClientReviews';
import BlogSection from '../componentes/BlogSection';
import BookSection from '../componentes/BookSection';
import OurStory from '../componentes/OurStory';
import OurBeliefs from '../componentes/OurBeliefs';
import Team from '../componentes/Team';


const About = () => {
    return (
        <main className='flex flex-col gap-[4rem] lg:gap-[7rem] pt-[120px] pb-[60px] lg:pb-[100px]'>

            {/* Page Title */}
            <Helmet>
                <title>About Us | Discover the Story Behind Eatary</title>
                <meta
                    name="description"
                    content="Learn more about Eatary’s journey, our dedication to quality, and the passion behind our exceptional dining experience. Get to know our mission and values."
                />
            </Helmet>

            {/* About Banner */}
            <AboutBanner />

            {/* Our Story */}
            <OurStory />

            {/* OurBeliefs section */}
            <OurBeliefs />

            {/* Team Section */}
            <Team />


            {/* Our Achievements */}
            <section>
                <div className="container mx-auto">
                    <Banner
                        bgImageURL={assets.achievementsBanner}
                    />
                </div>
            </section>

            {/* Client Reviews Section */}
            <ClientReviews />

            {/* Blog Section */}
            <BlogSection />

            {/* Booking Section */}
            <BookSection />

        </main>
    )
}

export default About
