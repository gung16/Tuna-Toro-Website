import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const HomeSectionMobile = () => {
  return (
    <div className="w-full bg-[#212121] flex flex-col items-center py-12 px-4 sm:px-8">
      {/* Section 1 */}
      <div className="w-[90%] flex flex-col md:flex-row gap-6 items-center">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-white text-sm sm:text-lg font-medium mb-2">
            Our Company
          </h2>
          <h1
            className="text-xl sm:text-3xl md:text-4xl font-semibold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #F5F5F5 0, #B6B5B5 50%, #F5F5F5 100%)",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Flavors of the Ocean Perfected
          </h1>
          <p className="text-white text-xs sm:text-md md:text-base leading-relaxed mt-4">
            <span className="font-bold">TUNA TORO</span> is a dynamic culinary
            brand dedicated to bringing the rich, authentic flavors of the ocean
            to your table.
          </p>
        </div>
        {/* Image */}
        <img
          src="/home/plate14.png"
          alt="Tuna Toro Dish"
          className="w-[80%] md:w-1/2 rounded-lg object-contain mb-8"
        />
      </div>

      {/* Section 2 */}
      <div className="w-[90%] flex flex-col-reverse md:flex-row items-center gap-6">

        <div className="md:w-1/2">
          <p className="text-white text-sm sm:text-md md:text-base leading-relaxed mb-6">
            Established in <span className="font-bold">2022</span>, Tuna Toro
            specializes in exquisite grilled dishes. Our signature{" "}
            <span className="font-bold">Rahang Tuna Bakar</span> (Grilled Tuna
            Jaw) and <span className="font-bold">Gulai Rahang Tuna</span> (Tuna
            Jaw Curry) are beloved by food enthusiasts for their unique taste
            and quality. Complementing our grill offerings, Tuna Toro also
            proudly serves a selection of sushi, combining the artistry of
            Japanese cuisine with the freshest ingredients.
          </p>
          <div className="flex justify-start mt-4">
            <Link
              href={"/about"}

            >
              <button className=" bg-black bg-opacity-60 px-4 py-3 rounded-xl backdrop-blur-sm border-[0.15vw] text-[2.3vw] text-white fontPoppins font-medium flex justify-center items-center gap-3 transition-all hover:opacity-75 hover:translate-x-2">
                More Details <FaArrowRight />
              </button>
            </Link>

          </div>
        </div>
      </div>


    </div>
  );
};

export default HomeSectionMobile;
