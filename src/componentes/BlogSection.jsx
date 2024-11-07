import React, { useContext, useEffect, useState } from 'react'

/**
 * Components
 */
import SectionTitle from './SectionTitle'
import BlogItems from './BlogItems'
import { BlogContext } from '../context/BlogContext'

const BlogSection = () => {

    const { BlogData } = useContext(BlogContext);

    const [blogItems, setBlogItems] = useState([]);


    useEffect(() => {
        setBlogItems(BlogData.slice(0, 3));
    }, [])

    return (
        <section>
            <div className="container mx-auto grid md:gap-[50px] lg:gap-[80px]">
                {/* Section Title */}
                <SectionTitle
                    className="text-center mx-auto md:text-left md:max-w-[810px] md:mx-0 "
                    subtitle="Blogs"
                    title="Stories, Insights, And 
                           Updates About Our Mission"
                    btn={true}
                    btnText="View All"
                    linkPath="/Blog"
                />

                {/* Rendering Blog Items */}
                <ul className='grid gap-[20px] md:grid-cols-[repeat(2,1fr)] md:gap-[30px] lg:grid-cols-[repeat(3,1fr)] pt-[20px] md:pt-[30px] border-t border-neutral-700/15'>
                    {
                        blogItems.map((item, index) => {
                            return (
                                <BlogItems key={index} title={item.title} image={item.image} date={item.date} />
                            )

                        })
                    }
                </ul>

            </div>
        </section>
    )
}

export default BlogSection
