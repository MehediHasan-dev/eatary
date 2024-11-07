import React from 'react'

/**
 * Components
 */
import TitleDisplay from './TitleDisplay'

/**
 * Assets
 */
import assets from '../assets/assets'

const Hero = () => {
    return (
        <section>
            <div className='container mx-auto grid gap-[30px] lg:gap-[80px]'>
                {/* Hero Content */}
                <TitleDisplay
                    title="Eatery - Savor the Flavor"
                    hasText={true}
                    text="Indulge in our handcrafted dishes, where flavors meet love. Join us for an unforgettable culinary journey!"
                    hasImage={false}
                    isAbsolute={false}
                    imageUrl="/path-to-image.jpg"
                    btn={true}
                    btnText="Make a Reservation"
                    linkPath="/Reservations"
                />

                {/* Hero Banner */}

                <figure className='img_holder'>
                    <img src={assets.heroBanner} width={1520} height={696} alt="Hero Banner" className='img_cover rounded-[12px] select-none pointer-events-none' />
                </figure>
            </div>
        </section>
    )
}

export default Hero
