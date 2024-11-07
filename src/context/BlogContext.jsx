import { createContext } from "react";


/**
 * Assets
 */
import { BlogData } from "../assets/assets";


export const BlogContext = createContext();


const BlogContextProvider = (props) => {

    const value = { BlogData };

    return (
        <BlogContext.Provider value={value}>
            {props.children}
        </BlogContext.Provider>
    )

}


export default BlogContextProvider;