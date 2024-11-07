import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Components
 */
import AllBlogs from '../componentes/AllBlogs';
import BookSection from '../componentes/BookSection';

function Blog() {
    return (
        <main className='flex flex-col gap-[4rem] lg:gap-[7rem] pt-[120px] pb-[60px] lg:pb-[100px]'>

            {/* Page title */}
            <Helmet>
                <title>Blog | Explore Culinary Insights & Tips from Eatary</title>
                <meta
                    name="description"
                    content="Dive into Eatary’s blog for the latest culinary trends, dining tips, recipe ideas, and behind-the-scenes insights. Stay updated with our food journey!"
                />
            </Helmet>

            {/* Rendering all blogs */}
            <AllBlogs />

            {/* Booking Section */}
            <BookSection />


        </main>
    );
}

export default Blog;
