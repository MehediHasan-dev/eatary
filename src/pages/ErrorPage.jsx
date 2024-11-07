import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <main className='flex flex-col gap-[4rem] lg:gap-[7rem] pt-[120px] pb-[60px] lg:pb-[100px]'>
            <Helmet>
                <title>404 | Page Not Found - Eatary</title>
                <meta
                    name="description"
                    content="Oops! The page you’re looking for doesn’t exist. Head back to Eatary's homepage and continue exploring our delicious offerings."
                />
            </Helmet>
            {/* Page Content */}


            <div className='max-w-[800px] flex flex-col justify-center items-center text-center gap-[10px] mx-auto'>

                <span className='font-medium text-orange-600 font-primary lg:text-[1.1rem]' >Oops!</span>
                <h1 className='font-primary font-bold text-neutral-900'>
                    <span className='text-[2rem] border border-red-300 pb-[10px] px-4 lg:text-[4rem]'>4</span>
                    <span className='text-[2rem] border border-red-300 pb-[10px] px-4 lg:text-[4rem]'>0</span>
                    <span className='text-[2rem] border border-red-300 pb-[10px] px-4 lg:text-[4rem]'>4</span>
                </h1>
                <h3 className='text-[2rem] uppercase font-body font-semibold tracking-wide'>Page not found</h3>
                <p className='text-neutral-600/90 max-w-[450px] leading-[1.6] px-[16px] md:px-0'>
                    The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                </p>

                <Link to="/" className='border border-green-600 py-[10px] px-[24px] uppercase font-primary font-medium text-primary mt-[40px] transition-all shadow-md rounded-[10px] hover:bg-green-500 hover:text-white duration-300 '>
                    Home Page
                </Link>

            </div>


        </main>
    );
}

export default ErrorPage;
