import React from 'react'

/**
 * Components
 */
import SectionTitle from './SectionTitle'
import BookingForm from './BookingForm'
import TitleDisplay from './TitleDisplay'

const BookSection = ({ useTitleDisplay }) => {
    return (
        <section className='max-w-[690px] block mx-auto'>


            {/* Section Title */}
            <div className="container grid gap-[30px] lg:gap-[60px]">
                <div>
                    {useTitleDisplay ? (
                        <TitleDisplay
                            className="text-center mx-auto"
                            title="Book your Table"
                            text="Alternatively, dial +1 (212) 555-1212 or complete the form."
                        />
                    ) : (
                        <SectionTitle
                            className="text-center mx-auto"
                            title="Book your Table"
                            text="Alternatively, dial +1 (212) 555-1212 or complete the form."
                        />
                    )}
                </div>
            </div>
            {/* Booking Form */}
            <BookingForm />

        </section>
    )
}

export default BookSection
