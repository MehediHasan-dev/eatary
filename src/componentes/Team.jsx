import React, { useContext } from 'react'

/**
 * Components
 */
import SectionTitle from './SectionTitle'
import Chef from './Chef'

/**
 * Context
 */
import { ChefContext } from '../context/ChefContext'

const Team = () => {

    const { ChefData } = useContext(ChefContext);

    return (
        <section>
            <div className="container mx-auto grid gap-[30px] lg:gap-[80px]">

                {/* Section Title */}
                <SectionTitle
                    className="text-center justify-center items-center mx-auto md:text-left md:max-w-[810px] "
                    subtitle="Team"
                    title="Meet Our Chef Team"
                    btn={false}
                    text={<p className='text-[1rem] text-center lg:max-w-[730px]'>At Eatery, we believe in serving more than just food – we serve community, connection, and unforgettable experiences. Authenticity, quality, and warmth guide every bite, every conversation, and every moment.</p>}
                />


                {/* Rendering Chef items */}

                <ul className='grid gap-[15px] md-[25px] grid-cols-2 lg:grid-cols-3 lg:gap-[35px] '>
                    {
                        ChefData.map((item, index) => {
                            return (  // Add return here
                                <Chef key={index} name={item.name} image={item.image} linkedin={item.linkedin} mail={item.email} twitter={item.twitter} />

                            )
                        })
                    }
                </ul>





            </div>
        </section>
    )
}

export default Team
