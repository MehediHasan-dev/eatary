import React from 'react'
import SectionTitle from './SectionTitle'

const OurBeliefs = () => {
    return (
        <section>
            <div className="container mx-auto grid gap-[30px] lg:gap-[80px]">


                {/* Section Title and Text */}
                <SectionTitle
                    className="text-center justify-center items-center mx-auto md:text-left md:max-w-[810px] "
                    subtitle="OUR VALUES"
                    title="What We Believe"
                    btn={false}
                    text={<p className='text-[1rem] text-center lg:max-w-[730px]'>At Eatery, we believe in serving more than just food – we serve community, connection, and unforgettable experiences. Authenticity, quality, and warmth guide every bite, every conversation, and every moment.</p>}
                />

                {/* Item Card */}
                <ul className='grid gap-[10px] md:gap-[20px] grid-cols-2 lg:grid-cols-4'>
                    <li className='max-w-[360px] flex items-center justify-center flex-col gap-[10px] md:gap-[20px] text-center border-[1px] border-neutral-600/15 shadow-sm rounded-[10px] py-[30px] px-[10px]'>
                        <div className=''>
                            <svg width="50" height="50" viewBox="0 0 58 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.37866 44.7877V28.7563L15.4039 22.7467L29.4292 28.7607V44.7877L15.4039 50.7928L1.37866 44.7877Z" stroke="#E27D60" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.37866 28.7253L15.4039 34.7349L29.4292 28.7253M15.4039 6.82605L29.4248 12.84L43.4501 6.83048" stroke="#E27D60" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M29.4248 28.7253L43.4501 34.7349L57.4754 28.7253" stroke="#E27D60" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.4041 34.7438V50.7973M43.4591 34.7438V50.7973M29.4249 12.84V28.8892M15.4129 22.7379V6.70647L29.4338 0.696899L43.4591 6.70647V22.7379L29.4338 28.7475L15.4129 22.7379ZM29.4249 44.7878V28.7563L43.4502 22.7468L57.4755 28.7608V44.7878L43.4502 50.7929L29.4249 44.7878Z" stroke="#E27D60" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>


                        </div>

                        <div className='flex flex-col gap-[5px] lg:gap-[10px]'>
                            <h4 className='capitalize font-primary text-[1.5rem] lg:text-[2.5rem] font-semibold'>Innovation</h4>
                            <p className='text-neutral-700 text-[.872rem] md:text-[1rem] lg:text-[1.2rem]'>
                                Eatery commits to excellence in food, culinary creations, and service.
                            </p>
                        </div>

                    </li>
                    <li className='max-w-[360px] flex items-center justify-center flex-col gap-[10px] md:gap-[20px] text-center border-[1px] border-neutral-600/15 shadow-sm rounded-[10px] py-[30px] px-[10px]'>
                        <div className=''>
                            <svg width="50" height="50" viewBox="0 0 55 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.3333 10.5468C19.75 7.96345 12.0542 0.929031 8.53833 1.53611C-0.624755 3.1197 -0.624755 30.8905 8.53833 32.4741C12.0542 33.0812 19.75 26.0494 22.3333 23.4634M32.6667 10.5468C35.25 7.96345 42.9457 0.929031 46.4617 1.53611C55.6247 3.1197 55.6247 30.8905 46.4617 32.4741C42.9457 33.0812 35.25 26.0494 32.6667 23.4634" stroke="#E27D60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.7501 17.0051H17.1667M37.8334 17.0051H35.2501M21.0417 17.0051C21.0417 11.5827 22.6486 9.25513 27.5001 9.25513C32.0183 9.25513 33.9584 11.1823 33.9584 17.0051C33.9584 22.4275 32.3516 24.7551 27.5001 24.7551C22.6486 24.7551 21.0417 22.4275 21.0417 17.0051Z" stroke="#E27D60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>


                        </div>

                        <div className='flex flex-col gap-[5px] lg:gap-[10px]'>
                            <h4 className='capitalize font-primary text-[1.5rem] lg:text-[2.5rem] font-semibold'>Elegance</h4>
                            <p className='text-neutral-700 text-[.872rem] md:text-[1rem] lg:text-[1.2rem]'>
                                Elegance resonates through sophisticated ambiance and meticulous details.
                            </p>
                        </div>

                    </li>
                    <li className='max-w-[360px] flex items-center justify-center flex-col gap-[10px] md:gap-[20px] text-center border-[1px] border-neutral-600/15 shadow-sm rounded-[10px] py-[30px] px-[10px]'>
                        <div className=''>
                            <svg width="50" height="50" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.2919 53.7656C38.9206 55.3687 35.2331 56.1963 31.5001 56.1875C17.6121 56.1875 6.31255 44.888 6.31255 31C6.31255 25.0422 8.36049 19.4157 12.1251 14.9032V19.375H16.0001V7.75H4.37505V11.625H9.88143C5.07755 16.9332 2.42366 23.8408 2.43755 31C2.43755 47.0251 15.475 60.0625 31.5001 60.0625C35.8095 60.0715 40.0663 59.1155 43.9582 57.2647L42.2919 53.7656Z" fill="#E27D60" />
                                <path d="M41.1875 17.4375C35.065 17.4375 30.0449 22.1979 29.6051 28.21C27.4751 26.2664 24.696 25.1885 21.8125 25.1875H14.0625V32.9375C14.0625 39.3487 19.2782 44.5625 25.6875 44.5625H29.5625V52.3125H33.4375V36.8125H37.3125C43.7218 36.8125 48.9375 31.5987 48.9375 25.1875V17.4375H41.1875ZM25.6875 40.6875C21.4134 40.6875 17.9375 37.2116 17.9375 32.9375V29.0625H21.8125C26.0866 29.0625 29.5625 32.5384 29.5625 36.8125V37.9479L25.1198 33.5052L22.3802 36.2448L26.8229 40.6875H25.6875ZM45.0625 25.1875C45.0625 29.4616 41.5866 32.9375 37.3125 32.9375H36.1771L40.6198 28.4948L37.8802 25.7552L33.4375 30.1979V29.0625C33.4375 24.7884 36.9134 21.3125 41.1875 21.3125H45.0625V25.1875Z" fill="#E27D60" />
                                <path d="M60.5626 30.9999C60.5626 14.9749 47.5252 1.93744 31.5001 1.93744C27.1906 1.92847 22.9338 2.88443 19.042 4.73519L20.7082 8.23431C24.0795 6.63123 27.7671 5.80367 31.5001 5.81244C45.3881 5.81244 56.6876 17.1119 56.6876 30.9999C56.6876 36.9578 54.6397 42.5843 50.8751 47.0967V42.6249H47.0001V54.2499H58.6251V50.3749H53.1187C57.9226 45.0667 60.5765 38.1591 60.5626 30.9999Z" fill="#E27D60" />
                            </svg>

                        </div>

                        <div className='flex flex-col gap-[5px] lg:gap-[10px]'>
                            <h4 className='capitalize font-primary text-[1.5rem] lg:text-[2.5rem] font-semibold'>Sustainability</h4>
                            <p className='text-neutral-700 text-[.872rem] md:text-[1rem] lg:text-[1.2rem]'>
                                Sourcing responsibly, we minimize environmental impact for an ethical dining experience.
                            </p>
                        </div>

                    </li>
                    <li className='max-w-[360px] flex items-center justify-center flex-col gap-[10px] md:gap-[20px] text-center border-[1px] border-neutral-600/15 shadow-sm rounded-[10px] py-[30px] px-[10px]'>
                        <div className=''>
                            <svg width="50" height="50" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M55.2887 51.676L54.6513 49.7627C54.3868 48.9713 53.6467 48.4375 52.8126 48.4375H33.4376V45.5312H55.7188C56.7883 45.5312 57.6563 44.6632 57.6563 43.5938C57.6563 42.5243 56.7883 41.6562 55.7188 41.6562H54.7501V40.6875C54.7501 28.52 45.3542 18.5128 33.4376 17.5247V15.5H36.3438C37.4133 15.5 38.2813 14.632 38.2813 13.5625C38.2813 12.493 37.4133 11.625 36.3438 11.625H26.6563C25.5868 11.625 24.7188 12.493 24.7188 13.5625C24.7188 14.632 25.5868 15.5 26.6563 15.5H29.5626V17.5247C17.646 18.5128 8.25007 28.52 8.25007 40.6875V41.6562H7.28132C6.21182 41.6562 5.34382 42.5243 5.34382 43.5938C5.34382 44.6632 6.21182 45.5312 7.28132 45.5312H29.5626V48.4375H10.1876C9.35347 48.4375 8.61335 48.9713 8.34985 49.7627L7.71241 51.676C6.95679 53.9429 5.66447 56.0344 3.97497 57.7239C3.42085 58.2781 3.25519 59.1112 3.55454 59.8348C3.85388 60.5595 4.5601 61.0312 5.34382 61.0312H57.6563C58.44 61.0312 59.1463 60.5595 59.4466 59.8348C59.7469 59.1112 59.5812 58.2781 59.0261 57.7239C57.3366 56.0335 56.0434 53.9429 55.2887 51.676ZM12.1251 40.6875C12.1251 30.0041 20.8167 21.3125 31.5001 21.3125C42.1834 21.3125 50.8751 30.0041 50.8751 40.6875V41.6562H12.1251V40.6875ZM9.36122 57.1562C10.206 55.8262 10.8899 54.3943 11.3878 52.9005L11.5835 52.3125H51.4156L51.6113 52.9005C52.1093 54.3943 52.7932 55.8262 53.6379 57.1562H9.36122ZM31.5001 8.71875C32.5696 8.71875 33.4376 7.85075 33.4376 6.78125V2.90625C33.4376 1.83675 32.5696 0.96875 31.5001 0.96875C30.4306 0.96875 29.5626 1.83675 29.5626 2.90625V6.78125C29.5626 7.85075 30.4306 8.71875 31.5001 8.71875ZM16.2607 11.3838C16.6201 12.0057 17.2701 12.3525 17.9405 12.3525C18.2689 12.3525 18.6021 12.2692 18.9073 12.0919C19.8344 11.5572 20.1512 10.3724 19.6164 9.44531L17.6789 6.08956C17.1432 5.16441 15.9584 4.84472 15.0313 5.38141C14.1042 5.91616 13.7874 7.10094 14.3222 8.02803L16.2607 11.3838ZM7.04107 22.0207C7.34622 22.1979 7.67947 22.2812 8.00788 22.2812C8.67729 22.2812 9.32926 21.9335 9.68769 21.3125C10.2224 20.3854 9.90566 19.2006 8.97857 18.6659L5.62282 16.7284C4.69669 16.1927 3.51094 16.5104 2.97716 17.4375C2.44241 18.3646 2.75919 19.5494 3.68629 20.0841L7.04107 22.0207ZM44.0938 12.0929C44.399 12.2692 44.7322 12.3535 45.0606 12.3535C45.73 12.3535 46.382 12.0057 46.7404 11.3847L48.6779 8.029C49.2127 7.10191 48.8959 5.91713 47.9688 5.38238C47.0427 4.84569 45.8569 5.16441 45.3222 6.0915L43.3847 9.44725C42.849 10.3734 43.1667 11.5582 44.0938 12.0929ZM60.023 17.4375C59.4873 16.5104 58.3034 16.1927 57.3764 16.7284L54.0206 18.6659C53.0935 19.2006 52.7767 20.3854 53.3115 21.3125C53.6709 21.9344 54.3209 22.2812 54.9913 22.2812C55.3197 22.2812 55.6529 22.1979 55.9581 22.0207L59.3139 20.0832C60.2409 19.5484 60.5587 18.3636 60.023 17.4375Z"
                                    fill="#E27D60"
                                />
                            </svg>
                        </div>

                        <div className='flex flex-col gap-[5px] lg:gap-[10px]'>
                            <h4 className='capitalize font-primary text-[1.5rem] lg:text-[2.5rem] font-semibold'>Hospitality</h4>
                            <p className='text-neutral-700 text-[.872rem] md:text-[1rem] lg:text-[1.2rem]'>
                                Our team goes above and beyond to make every guest feel welcomed and cherished.
                            </p>
                        </div>

                    </li>
                </ul>

            </div>
        </section>
    )
}

export default OurBeliefs
