'use client';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";


const MissionSection = () => {
  const mission = [
    "Promoting a balanced lifestyle by offering nutrient-rich, freshly prepared seafood dishes",
    "Maintaining exceptional quality and flavor while ensuring sustainable sourcing practices",
    "Inspiring trust and loyalty by providing innovative, wholesome meals that cater to diverse preferences",
  ];

  return (
    <div className="w-full bg-cover bg-center min-h-[80vh] flex flex-col lg:flex-row" style={{ backgroundImage: "url('./home/missionbg.png')" }} >
      <div className="p-10 pt-20 lg:p-20 w-full lg:w-3/4 h-full flex flex-col justify-center gap-5">
        <h2 className="text-white fontPoppins font-bold text-md sm:text-lg md:text-xl">OUR MISSION </h2>
        <h1 className="text-white fontPoppins font-semibold text-2xl sm:text-4xl text-left">
          Bringing Healthy and Delicious <br />
          Seafood to Indonesia
        </h1>
        <p className="text-[#A3A3A3] fontPoppins font-regular text-sm md:text-xl text-left">
          At TUNA TORO, our mission is to introduce healthier food options to
          Indonesia through the richness of ocean-inspired cuisine. We are
          dedicated to:
        </p>

        {/* Mission Slider */}
        <div className="w-full pt-10 mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {mission.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/3 flex justify-center items-center"
                >
                  <div className="h-50 sm:h-60 md:h-72 mx-auto   w-40 sm:w-full  sm:min-w-52 max-w-56 bg-white bg-opacity-10 shadow-2xl text-white fontPoppins font-normal text-center text-sm sm:text-base xl:text-lg flex justify-center items-center p-8 rounded-md">
                    {item}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute md:hidden left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 text-white p-3 rounded-full hover:bg-opacity-50 transition-all" />
            <CarouselNext className="absolute md:hidden right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 text-white p-3 rounded-full hover:bg-opacity-50 transition-all" />
          </Carousel>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/4 flex justify-end items-end">
        <img
          src="./home/ibu.png"
          alt="Tuna Toro Missions"
          className="w-72 lg:w-full"
        />
      </div>
    </div>
  );
};

export default MissionSection;
