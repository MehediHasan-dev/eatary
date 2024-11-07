import { createContext } from "react";

/**
 * Assets
 */
import { menus } from "../assets/assets";


export const MenuContext = createContext();

const MenuContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;

    const value = {
        menus, currency, delivery_fee
    }

    return (
        <MenuContext.Provider value={value}>
            {props.children}
        </MenuContext.Provider>
    )

}


export default MenuContextProvider;