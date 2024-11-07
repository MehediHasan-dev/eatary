import React, { useContext } from 'react';

/**
 * Components
 */
import TitleDisplay from '../componentes/TitleDisplay';
import MenuItem from '../componentes/MenuItem';

/**
 * Context
 */
import { MenuContext } from '../context/MenuContext';
const AllMenus = () => {

    const { menus } = useContext(MenuContext);


    return (
        <section >
            <div className="container mx-auto ">
                {/* Section Title */}
                <TitleDisplay
                    title="Our Menu"
                    text="Explore a curated selection of delicious dishes crafted with the freshestingredients to satisfy every palate."
                />

                {/* Rendering all menu items */}
                <ul className='grid gap-[20px] md:grid-cols-[repeat(2,1fr)] md:gap-[30px] lg:grid-cols-[repeat(3,1fr)] '>
                    {
                        menus.map((item, index) => {
                            return (  // Add return here
                                <MenuItem key={index} name={item.name} image={item.image} price={item.price} />

                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default AllMenus
