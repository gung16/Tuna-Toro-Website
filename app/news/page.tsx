import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen p-4 flex bg-[#212121] flex-col items-center justify-center space-y-6 pt-20 lg:pt-36">
      <h1 className="text-4xl lg:text-5xl font-bold mb-2 pb-4 bg-clip-text text-transparent leading-tight"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #F5F5F5 0, #B6B5B5 80%, #F5F5F5 100%)",
          WebkitTextFillColor: "transparent",
        }} >
        Tuna Toro News
      </h1>

      <div className='flex flex-col items-center justify-center max-w-[90%] pb-20'>
        <h2 className='text-white text-lg md:text-xl text-center font-semibold leading-relaxed mb-6' >Tuna Toro Featured by Trans TV - A famous Indonesian News Company</h2>
        <iframe
        className="w-full max-w-[560px] h-[315px] rounded-lg shadow-lg"
        src="https://www.youtube.com/embed/uHBD7Hn7Wuw"
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>

      <div className='flex flex-col items-center justify-center max-w-[90%]'>
        <h2 className="text-white text-lg md:text-xl text-center font-semibold leading-relaxed mb-6 md:max-w-[90%]">Tuna Toro Featured by CNN Indonesia - A global news company with local branch in Indonesia</h2>
        <iframe
        className="w-full max-w-[560px] h-[315px] rounded-lg shadow-lg"
        src="https://www.youtube.com/embed/in7Xww8KLBU"
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>

      

    </div>
  )
}

export default page
