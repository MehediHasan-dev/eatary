import { createRoot } from 'react-dom/client'

/**
 * Main Css
 */
import './index.css'

/**
 * App 
 */
import App from './App.jsx'


/**
 * All Context Provider
 */
import MenuContextProvider from './context/MenuContext.jsx'
import ReviewContextProvider from './context/ReviewContext.jsx'
import BlogContextProvider from './context/BlogContext.jsx'
import ChefContextProvider from './context/ChefContext.jsx'

createRoot(document.getElementById('root')).render(
  <MenuContextProvider>
    <ReviewContextProvider>
      <BlogContextProvider>
        <ChefContextProvider>
          <App />
        </ChefContextProvider>
      </BlogContextProvider>
    </ReviewContextProvider>
  </MenuContextProvider>,
)
