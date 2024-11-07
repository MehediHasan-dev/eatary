import { createContext } from "react";



/**
 * Assets
 */
import { ChefData } from "../assets/assets";


export const ChefContext = createContext();


const ChefContextProvider = (props) => {

    const value = { ChefData };

    return (

        <ChefContext.Provider value={value}>
            {props.children}
        </ChefContext.Provider>

    )
}


export default ChefContextProvider;