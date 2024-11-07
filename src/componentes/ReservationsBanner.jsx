import React from 'react'
import Banner from './Banner'
import assets from '../assets/assets'

const ReservationsBanner = () => {
    return (
        <section>
            <div className="container mx-auto">
                <Banner
                    styleType='style1'
                    title="Elevate your diningexperience to a higher quality."
                    btn={true}
                    btnText="Make a Reservation"
                    bgImageURL={assets.reservationsBanner}
                />
            </div>
        </section>
    )
}

export default ReservationsBanner
