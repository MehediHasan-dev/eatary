import React from 'react'
import assets from '../assets/assets'
import Banner from './Banner'

const AboutBanner = () => {
    return (
        <section>
            <div className="container mx-auto">

                {/* Main Title and Banner */}
                <Banner
                    bgImageURL={assets.aboutPageBanner}
                    styleType='style1'
                    title={<>About <br />  Our Restaurant</>}
                    className="text-[2.5rem] font-semibold lg:text-[5rem] font-primary"
                />

            </div>
        </section>
    )
}

export default AboutBanner
