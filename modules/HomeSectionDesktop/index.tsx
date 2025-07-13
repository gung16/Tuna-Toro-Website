"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const HomeSectionDesktop = () => {
  return (
    <div className="bg-[#212121]">
      <div className="w-full  min-h-screen flex items-center justify-between"
        style={{
          backgroundImage: "url('/home/plate14.png')",
          backgroundPosition: 'right center',
          backgroundSize: '45%',
          backgroundRepeat: 'no-repeat',
        }} >
        {/* Text Section */}
        <div className="w-1/2 pl-10 lg:pl-28 pt-28">
          <h2 className="text-white text-xl font-medium mb-4">Our Company</h2>
          <h1
            className="text-4xl md:text-5xl font-semibold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #F5F5F5 0, #B6B5B5 50%, #F5F5F5 100%)",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Flavors of the Ocean Perfected
          </h1>
          <p className="text-white text-base leading-relaxed mb-4">
            <span className="font-bold">TUNA TORO</span> is a dynamic culinary
            brand dedicated to bringing the rich, authentic flavors of the ocean
            to your table.
          </p>
          <p className="text-white text-base leading-relaxed mb-6">
            Established in <span className="font-bold">2022</span>, Tuna Toro
            specializes in exquisite grilled dishes. Our signature{" "}
            <span className="font-bold">Rahang Tuna Bakar</span> (Grilled Tuna
            Jaw) and <span className="font-bold">Gulai Rahang Tuna</span> (Tuna
            Jaw Curry) are beloved by food enthusiasts for their unique taste
            and quality. Complementing our grill offerings, Tuna Toro also
            proudly serves a selection of sushi, combining the artistry of
            Japanese cuisine with the freshest ingredients.
          </p>

          <Link
            href={"./about"}

          >
            <button className=" bg-black bg-opacity-60 px-8 py-5 rounded-xl backdrop-blur-sm border-[0.15vw] text-[2.3vw] lg:text-[1.2vw] text-white  fontPoppins font-medium flex justify-center items-center gap-3 transition-all hover:opacity-75 hover:translate-x-2">
              More Details <FaArrowRight />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HomeSectionDesktop;
