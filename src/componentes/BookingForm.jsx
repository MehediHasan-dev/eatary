
import React from 'react';

const BookingForm = () => {

    return (
        <section>
            <div className="container mx-auto grid gap-[30px] lg:gap-[80px]">
                <form className='grid gap-[20px] grid-cols-[repeat(2,1fr)]'>
                    <input type="text" autoComplete='off' placeholder='Name*' className='input_field' />
                    <input type="text" autoComplete='off' placeholder='Phone Number' className='input_field' />
                    <input type="text" autoComplete='off' placeholder='Email*' className='input_field' />
                    <input type="text" autoComplete='off' placeholder='Date*' className='input_field' />
                    <div className='custom_selected'>
                        <select name="time" className="select_filed appearance-none cursor-pointer py-2 px-4 border border-gray-300 rounded-md text-gray-700 transition duration-300" defaultValue="selected">
                            <option value="selected" disabled>- Select Time -</option>
                            {Array.from({ length: 24 }, (_, index) => {
                                const hour = String(index).padStart(2, '0');  // Add leading zero to hour
                                return (
                                    <option key={hour} value={`${hour}:00`}>{`${hour}:00`}</option>
                                );
                            })}
                        </select>


                    </div>

                    <div className='custom_selected'>
                        <select name="seats" className="select_filed appearance-none cursor-pointer py-2 px-4 border border-gray-300 text-gray-700 transition-all duration-300">
                            <option value="selected" disabled>- Select Number of Seats -</option>
                            {Array.from({ length: 8 }, (_, index) => {
                                return (
                                    <option key={index + 1} value={index + 1}>{index + 1}</option>
                                );
                            })}
                        </select>

                    </div>


                    <textarea name="massage" placeholder='message...' className='input_field min-h-[100px] py-[10px] col-span-2'></textarea>

                    <button className="btn btn_primary px-[40px] mt-[20px] whitespace-nowrap mx-auto col-span-2">
                        <span>Book Now</span>
                    </button>

                </form>
            </div>
        </section>
    )
}

export default BookingForm;
