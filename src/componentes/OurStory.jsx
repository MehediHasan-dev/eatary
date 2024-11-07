import React from 'react'
import SectionTitle from './SectionTitle'
import assets from '../assets/assets'

const OurStory = () => {
    return (
        <section>
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-[30px]">

                {/* Section Title and Text */}
                <SectionTitle
                    className="text-center mx-auto md:text-left md:max-w-[810px] md:mx-0 "
                    subtitle="OUR STORY"
                    title="Experience luxury dining like never before."
                    btn={false}
                    text={<><p className='text-[1rem]'>Discover a world where every dish is a masterpiece, meticulously crafted with the finest ingredients. Our commitment to excellence extends beyond the kitchen, creating an atmosphere that always resonate with sophistication as a celebration of culinary finesse.</p><br /><p className='text-[1rem]'>Established 20 years ago, LuxDin has redefined the art of fine dining, offering an unparalleled blend of exquisite flavors, elegant ambiance, and exceptional service.</p></>}
                />

                {/* Story Image */}
                <figure className='img_holder'>
                    <img src={assets.aboutStoryImg} alt="" className='img_cover' />
                </figure>

            </div>
        </section>
    )
}

export default OurStory
