import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Components
 */
import ContactForm from '../componentes/ContactForm';

function Contact() {
    return (
        <main className='flex flex-col gap-[4rem] lg:gap-[7rem] pt-[120px] pb-[60px] lg:pb-[100px]'>
            {/* Page Title */}
            <Helmet>
                <title>Contact | Get in Touch with Eatary</title>
                <meta
                    name="description"
                    content="Have questions or need assistance? Reach out to Eatary for any inquiries, reservations, or feedback. We’re here to help!"
                />
            </Helmet>

            {/* Contact Form */}
            <ContactForm />
        </main>
    );
}

export default Contact;
