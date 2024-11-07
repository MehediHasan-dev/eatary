import React, { useContext } from 'react'

/**
 * Components
 */
import BlogItems from './BlogItems'
import { BlogContext } from '../context/BlogContext'
import TitleDisplay from './TitleDisplay';

const AllBlogs = () => {

    const { BlogData } = useContext(BlogContext);

    return (
        <section>
            <div className="container mx-auto grid md:gap-[50px] lg:gap-[80px]">
                {/* Section Title */}
                <TitleDisplay
                    title="Our Blogs"
                />


                {/* Rendering Blog Items */}
                <div className='grid gap-[20px] md:grid-cols-[repeat(2,1fr)] md:gap-[30px] lg:grid-cols-[repeat(3,1fr)] pt-[20px] md:pt-[30px] border-t border-neutral-700/15'>
                    {
                        BlogData.map((item, index) => {
                            return (
                                <BlogItems key={index} title={item.title} image={item.image} date={item.date} />
                            )

                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default AllBlogs
