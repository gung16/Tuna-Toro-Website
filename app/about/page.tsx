import MissionSection from '@/modules/MissionSection'
import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div className="min-h-screen bg-[#212121] pt-[18vh] font-poppins text-white">
            <div className="flex p-12 sm:p-24 flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10">
                {/* Logo */}
                <Image src="/nav/logo.png" alt="Logo" width={300} height={300} className="w-2/3 md:w-1/2 lg:w-1/3 p-6" />

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-4">
                    <h2 className="text-base lg:text-xl font-medium text-white">
                        Company Overview
                    </h2>

                    <h1 className="text-4xl lg:text-5xl font-semibold pb-4 pt-2 bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                            "linear-gradient(90deg, #F5F5F5 0, #B6B5B5 50%, #F5F5F5 100%)",
                            WebkitTextFillColor: "transparent",
                        }} >
                        The Flavors of the Ocean Perfected
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg pt-4 max-w-[660px]">
                        <span className="font-bold">Tuna Toro</span> isn’t just a restaurant; it’s a place where passion meets flavor.{' '} 
                        <span className="font-bold">Founded in 2022</span>, we’re all about bringing healthy, delicious food to your table. 
                        Whether it’s our iconic Rahang Tuna Bakar or the freshest sushi rolls, every dish is crafted with care and a commitment to quality.

                    </p>
                </div>
            </div>

            {/* Background Image Section */}
            <div
                className="w-full bg-no-repeat bg-[#212121] bg-top bg-contain mt-14"
                style={{
                    backgroundImage: "url('/about/floor.png')",
                    aspectRatio: '1408 / 688',
                }}
            ></div>



            <div className="flex flex-col justify-center items-center text-center bg-[#212121] p-20 max-w-[900px] mx-auto gap-4 lg:my-8">
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-center">
                    <span className="font-bold">What makes us stand out?</span> We believe in offering meals that don’t just taste amazing but also make you feel good.
                    From grilled tuna specialties to premium sushi, we’re redefining seafood dining in Indonesia.

                </p>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed mt-6 text-center">
                    Tuna Toro Grill and Tuna Toro Sushi are <span className="font-bold">more than just brands</span>—they’re a promise of excellence.
                    We’re here to serve you the best, while always striving to grow, innovate, and create unforgettable dining experiences.
                </p>
            </div>

            {/* Mission Section */}
            <MissionSection />
        </div>

    )
}

export default About