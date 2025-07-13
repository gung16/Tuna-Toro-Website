import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import Slider from "@/components/Slider";
import Link from 'next/link';


const index = () => {

  return (
    <div className='w-full gap-5 pt-40 pb-12 bg-[#212121]'>
      <h1 className='text-white fontPoppins font-semibold text-2xl sm:text-4xl text-center'>Tuna Toro Signature</h1>

      <Slider />
      <div className='flex justify-center py-5'>
        <Link
          href={"/menu"}

        >
          <button className=" bg-black bg-opacity-60 px-8 py-5 rounded-xl backdrop-blur-sm border-[0.15vw] text-[4vw] md:text-[2.3vw] lg:text-[1.2vw] text-white  fontPoppins font-medium flex justify-center items-center gap-3 transition-all hover:opacity-75 hover:translate-x-2">
            View all menu <FaArrowRight />
          </button>
        </Link>
      </div>

    </div>
  )
}

export default index
