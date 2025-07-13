import React from 'react'
import { FaInstagram } from 'react-icons/fa6';

const index = () => {
    return (
        <div className='bg-[#212121]'>
            <div
                className="w-full min-h-screen lg:min-h-[70vh] bg-no-repeat bg-top bg-cover flex justify-center items-center"
                style={{
                    backgroundImage: "url('/about/floor2.png')",
                }}
            >
                <div className="flex flex-col justify-center items-center text-center px-4 space-y-6 max-w-md sm:max-w-2xl">
                    <div className="flex flex-col justify-center items-center space-y-4 mb-10">
                        <FaInstagram className="w-[50px] h-[50px] text-white" />
                        <h2 className="text-white text-lg sm:text-xl font-normal">
                            Follow us on Instagram for more updates!
                        </h2>
                        <a
                            href="https://instagram.com/tunatoro_id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg sm:text-xl text-white hover:text-gray-400"
                        >
                            <span className='font-semibold text-2xl md:text-3xl'>@tunatoro_id</span>
                        </a>
                    </div>

                    <h1 className="text-white font-semibold text-xl sm:text-xl lg:text-2xl">
                        Available to host birthday parties and meetings
                    </h1>
                </div>
            </div>

        </div>
    )
}

export default index
