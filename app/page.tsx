"use client";
import HomeSectionMobile from "@/modules/HomeSectionMobile";
import HomeSectionDesktop from "../modules/HomeSectionDesktop/index";
import { FaArrowRight } from "react-icons/fa6";
import MissionSection from "@/modules/MissionSection";
import BannerSection from "@/modules/BannerSection";
import SignatureSction from "@/modules/SignatureSection"


export default function Home() {
  const scrollToSection = () => {
    document.getElementById("bottom-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        className="w-full bg-no-repeat bg-top bg-cover"
        style={{
          backgroundImage: "url('/home/menu.png')",
          maxHeight: "140vh",
        }}
      >
        <div className="aspect-[376/239] w-full bg-top bg-contain bg-no-repeat flex flex-col">
          <h1 className="text-white fontSansita font-semibold text-[4vw] pl-[5vw] pt-[16vw] ">
            Serving Fresh,
            <br />
            Everyday
          </h1>
          <button onClick={scrollToSection} className=" bg-black mt-[10vw] ml-[30vw] lg:ml-[40vw] bg-opacity-60 w-[35vw] lg:w-[17vw] h-[8vw] lg:h-[5vw] rounded-xl backdrop-blur-sm border-[0.15vw] text-[2.3vw] lg:text-[1.4vw] text-white  fontPoppins font-semibold flex justify-center items-center gap-3 transition-all hover:opacity-75 hover:-translate-y-2">
            Explore More <FaArrowRight />
          </button>
        </div>
      </div>
      
      <div id="bottom-section">
        <div className="hidden sm:block ">
          <HomeSectionDesktop />
        </div>
        <div className="block sm:hidden">
          <HomeSectionMobile />
        </div>
      </div>

      <MissionSection />
      <SignatureSction />

      <BannerSection />


    </div>
  );
}
