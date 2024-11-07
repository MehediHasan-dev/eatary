import React, { useContext, useEffect, useState } from 'react'

/**
 * Components
 */
import SectionTitle from './SectionTitle'
import { MenuContext } from '../context/MenuContext'
import MenuItem from './MenuItem';

const OurMenu = () => {

    const { menus } = useContext(MenuContext);

    const [ourMenu, setOurMenu] = useState([]);

    useEffect(() => {
        setOurMenu(menus.slice(0, 6));
    }, [])

    return (
        <section>
            <div className="container mx-auto grid md:gap-[50px] lg:gap-[80px]">

                {/* Section Title */}
                <SectionTitle
                    title="Our Menu"
                    text="Explore a curated selection of delicious dishes crafted with the freshest ingredients to satisfy every palate."
                    className="max-w-[800px] text-center md:text-left"
                    btn={true}
                    btnText="View All"
                    linkPath="/Menu"
                />

                {/* Rendering Our Menu */}
                <ul className='grid gap-[20px] md:grid-cols-[repeat(2,1fr)] md:gap-[30px] lg:grid-cols-[repeat(3,1fr)] '>
                    {
                        ourMenu.map((item, index) => {
                            return (  // Add return here
                                <MenuItem key={index} image={item.image} name={item.name} price={item.price} />
                            )
                        })
                    }
                </ul>

            </div>
        </section>
    )
}

export default OurMenu
