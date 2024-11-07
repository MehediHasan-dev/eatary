
import { createContext } from "react";


/**
 * Assets
 */
import { ClientReviews } from "../assets/assets";



export const ReviewContext = createContext();


const ReviewContextProvider = (props) => {

    const value = { ClientReviews };

    return (
        <ReviewContext.Provider value={value}>
            {props.children}
        </ReviewContext.Provider>
    )

}


export default ReviewContextProvider;