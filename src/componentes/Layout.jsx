import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    const location = useLocation();

    // Specify routes where Header and Footer should be hidden
    const hideHeaderFooterRoutes = ['*']; // This array can contain paths where you want to hide the layout

    const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

    return (
        <>
            {!shouldHideHeaderFooter && <Header />}
            <main>{children}</main> {/* Render main content here */}
            {!shouldHideHeaderFooter && <Footer />}
        </>
    );
};

export default Layout;
