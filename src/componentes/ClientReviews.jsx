import React, { useContext } from 'react'


/**
 * Components
 */
import SectionTitle from './SectionTitle'
import { ReviewContext } from '../context/ReviewContext';
import TestiCard from './TestiCard';

const ClientReviews = () => {

    const { ClientReviews } = useContext(ReviewContext);


    return (
        <section>
            <div className="container mx-auto grid gap-[30px] lg:gap-[80px]">

                {/* Section Title */}
                <SectionTitle
                    title="Client Reviews"
                    className="text-center mx-auto"
                />

                {/* Rendering Client Reviews */}
                <ul className='flex gap-[20px] items-center justify-start overflow-x-auto pb-[30px] has_scroll'>

                    {
                        ClientReviews.map((item, index) => {
                            return (
                                <TestiCard key={index} name={item.name} title={item.title} image={item.image} desc={item.description} />
                            )
                        })
                    }

                </ul>

            </div>
        </section>
    )
}

export default ClientReviews
















