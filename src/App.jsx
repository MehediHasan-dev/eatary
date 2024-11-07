
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

/**
 * Import Header Component
 * The Header component is responsible for displaying the navigation and branding.
 */

/**
 * Import All Pages from Pages Directory
 * These are the individual pages that will be rendered based on the current route.
 */
import About from './pages/About'
import Menu from './pages/Menu'
import Reservations from './pages/Reservations'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home';
import Layout from './componentes/Layout';

/**
 * Main Application Component
 * Wraps the app with HelmetProvider for managing metadata (like <title>, <meta>, etc.)
 * and Router for handling routing throughout the app.
 */
const App = () => {
  return (
    <HelmetProvider>

      <Router>


        <Routes>

          {/* Route paths corresponding to individual pages */}
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/About' element={<Layout><About /></Layout>} /> {/* About page */}
          <Route path='/Menu' element={<Layout><Menu /></Layout>} /> {/* Menu page */}
          <Route path='/Reservations' element={<Layout><Reservations /></Layout>} /> {/* Reservations page */}
          <Route path='/Blog' element={<Layout><Blog /></Layout>} /> {/* Blog page */}
          <Route path='/Contact' element={<Layout><Contact /></Layout>} /> {/* Contact page */}

          {/* Catch-all route for any undefined paths, displays the ErrorPage */}
          <Route path="*" element={<ErrorPage />} />

        </Routes>


      </Router>

    </HelmetProvider>
  )
}

export default App
