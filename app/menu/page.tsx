"use client"
import React, { useState } from 'react'


const page = () => {
  // Set the default state to "button1" and "image1" to show Image 1 on load
  const [activeButton, setActiveButton] = useState("button1");
  const [activeImage, setActiveImage] = useState("image1");

  const handleButtonClick = (button: string, image: string): void => {
    setActiveButton(button); // Update the active button
    setActiveImage(image);   // Update the displayed image
  };

  return (
    <div className="min-h-screen p-4 flex bg-[#212121] flex-col items-center justify-center space-y-6 pt-20 lg:pt-48 gap-y-6">
      <h1 className="text-4xl lg:text-5xl font-bold mb-2 pb-4 bg-clip-text text-transparent leading-tight"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #F5F5F5 0, #B6B5B5 80%, #F5F5F5 100%)",
          WebkitTextFillColor: "transparent",
        }} >
        Tuna Toro Menu
      </h1>

      {/* Buttons */}
      <div className="flex space-x-12 lg:space-x-32 mt-40">
        <button
          onClick={() => handleButtonClick("button1", "image1")}
          className={`px-6 lg:px-10 py-2 lg:py-4 font-poppins font-semibold text-base lg:text-xl rounded-lg shadow transition-all hover:-translate-y-2
             ${activeButton === "button1"
              ? "bg-[#003E74] text-white"
              : "bg-gray-500 text-gray-200 hover:bg-gray-600"
            }`}
        >
          Tuna Toro Grill
        </button>
        <button
          onClick={() => handleButtonClick("button2", "image2")}
          className={`px-6 lg:px-8 py-2 lg:py-4 font-poppins font-semibold text-base lg:text-xl rounded-lg shadow transition-all hover:-translate-y-2
             ${activeButton === "button2"
              ? "bg-[#003E74] text-white"
              : "bg-gray-500 text-gray-200 hover:bg-gray-600"
            }`}
        >
          Tuna Toro Sushi
        </button>
      </div>

      {/* Images */}
      <div className="mt-4">
        {activeImage === "image1" && (
          <div className='flex flex-col justify-center items-center gap-12'>
            <img
              src="./menu/grill-menu.png"
              alt="Tuna Toro Grill Menu"
              className="w-[80%]"
            />

            <img
              src="./menu/grill-img.png"
              alt="Tuna Toro Grill Images"
              className="w-[80%]"
            />
          </div>

        )}
        {activeImage === "image2" && (
          <div className='flex flex-col justify-center items-center gap-12'>
            <img
              src="./menu/sushi-menu.png"
              alt="Tuna Toro Sushi Menu"
              className="w-[80%]"
            />

            <img
              src="./menu/sushi-img.png"
              alt="Tuna Toro Sushi Images"
              className="w-[80%]"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default page
