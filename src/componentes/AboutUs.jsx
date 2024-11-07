import React from 'react'


/**
 * Components
 */
import SectionTitle from './SectionTitle'

/**
 * Assets
 */
import assets from '../assets/assets'

const AboutUs = () => {
    return (
        <section>
            <div className="container mx-auto grid gap-[50px] lg:gap-[80px]">

                {/* Section Title */}
                <SectionTitle
                    className='text-center max-w-[1080px] mx-auto'
                    title="About Us"
                    text="Welcome to Eatery, where passion meets flavor. We're dedicated to serving handcrafted dishes with love.
                    Our story began with a desire to share warmth through food. Join us for an unforgettable culinary experience."
                    btn={false}
                    linkPath="/menu"
                />


                {/* Section Main */}

                <div className='grid md:grid-cols-[repeat(3,1fr)] gap-[10px] lg:gap-[24px]'>
                    <figure className='img_holder col-span-2'>
                        <img src={assets.aboutBannerLg1}
                            width={942}
                            height={379}
                            loading='lazy'
                            alt="About Banner 1"
                            className="img_cover rounded-[13px]"
                        />
                    </figure>
                    <figure className='img_holder'>
                        <img src={assets.aboutBannerMd1}
                            width={554}
                            height={379}
                            loading='lazy'
                            alt="About Banner 1"
                            className="img_cover rounded-[13px]"
                        />
                    </figure>
                    <figure className='img_holder'>
                        <img src={assets.aboutBannerMd2}
                            width={554}
                            height={379}
                            loading='lazy'
                            alt="About Banner 1"
                            className="img_cover rounded-[13px]"
                        />
                    </figure>
                    <figure className='img_holder col-span-2'>
                        <img src={assets.aboutBannerLg2}
                            width={942}
                            height={379}
                            loading='lazy'
                            alt="About Banner 1"
                            className="img_cover rounded-[13px]"
                        />
                    </figure>
                </div>

            </div>
        </section>
    )
}

export default AboutUs
