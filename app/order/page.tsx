'use client'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="w-full bg-[#212121] min-h-screen pt-8 flex items-center justify-between">
        {/* Text Section */}

        <div className="w-1/2 pl-10 lg:pl-28 pt-20 flex flex-col gap-y-10">
          <div>
            <h2 className="text-white text-lg lg:text-xl font-medium mb-4">Order Online</h2>
            <h1 className="text-4xl lg:text-5xl font-semibold mb-2 pb-4 bg-clip-text text-transparent leading-tight"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #F5F5F5 0, #B6B5B5 50%, #F5F5F5 100%)",
                WebkitTextFillColor: "transparent",
              }} >
              Feeling Hungry?
            </h1>

            <p className='text-[#A3A3A3] fontPoppins font-regular text-base lg:text-xl'>
              Place your order easily through our WhatsApp admin by clicking the link below!</p>
          </div>

          <button className=" bg-[#0FB02D] w-[35vw] lg:w-[20vw] h-[8vw] lg:h-[5.5vw] rounded-2xl lg:rounded-3xl text-[2.8vw] lg:text-[1.7vw] pr-6 text-white  fontPoppins font-semibold flex justify-center items-center gap-3 transition-all hover:opacity-75 hover:-translate-y-2"
            onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=6281389799363&text=Halo%20admin%20Tuna%20Toro!%20Apakah%20bisa%20pesan?'}>
            <svg className='w-[6vw] lg:w-[4vw] h-[6vw] lg:h-[4vw]' viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.09912 63.1496L11.0279 48.8068C8.60412 44.6098 7.32954 39.8469 7.331 34.9687C7.33829 19.7073 19.7575 7.29102 35.0204 7.29102C42.4272 7.29393 49.3777 10.1771 54.6058 15.4081C59.8325 20.6406 62.7112 27.5939 62.7083 34.9906C62.7025 50.2521 50.2804 62.6698 35.0204 62.6698H35.0087C30.3756 62.6683 25.8212 61.506 21.7772 59.2996L7.09912 63.1496Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M7.09913 63.8794C6.90663 63.8794 6.71997 63.8035 6.58143 63.6635C6.39913 63.4783 6.32768 63.2085 6.39622 62.9592L10.2448 48.9067C7.85893 44.6687 6.60038 39.8562 6.6033 34.9708C6.60913 19.3054 19.3564 6.5625 35.0204 6.5625C42.6183 6.56542 49.7568 9.52438 55.122 14.894C60.4873 20.265 63.4404 27.4021 63.4375 34.9912C63.4316 50.6552 50.6829 63.3996 35.0204 63.3996C30.3698 63.3981 25.7687 62.2504 21.6854 60.079L7.28434 63.8546C7.22309 63.8721 7.16184 63.8794 7.09913 63.8794Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M35.0204 7.29232C42.4273 7.29523 49.3777 10.1784 54.6059 15.4094C59.8325 20.6419 62.7113 27.5952 62.7084 34.9919C62.7025 50.2534 50.2804 62.6711 35.0204 62.6711H35.0088C30.3757 62.6696 25.8213 61.5073 21.7773 59.3008L7.09919 63.1509L11.0279 48.8081C8.60419 44.6111 7.32961 39.8481 7.33107 34.97C7.33836 19.7086 19.7575 7.29232 35.0204 7.29232ZM35.0204 5.83398C18.9554 5.83398 5.88003 18.9036 5.87273 34.97C5.87128 39.8802 7.11086 44.719 9.46169 49.0021L5.6919 62.7673C5.55482 63.2704 5.69482 63.8071 6.06232 64.1775C6.3394 64.4575 6.71419 64.6106 7.09919 64.6106C7.22315 64.6106 7.34711 64.5946 7.46961 64.5625L21.5965 60.8584C25.7206 62.9992 30.3436 64.1294 35.0088 64.1308C51.0854 64.1308 64.1609 51.0598 64.1681 34.9934C64.1711 27.2073 61.1421 19.8865 55.6398 14.3798C50.1346 8.87169 42.8123 5.8369 35.0204 5.83398Z" fill="#CFD8DC" />
              <path fillRule="evenodd" clipRule="evenodd" d="M51.2983 18.713C46.9525 14.3643 41.176 11.9683 35.0277 11.9668C22.3344 11.9668 12.0108 22.286 12.005 34.9705C12.0035 39.3178 13.2198 43.5499 15.524 47.2147L16.0723 48.0853L13.7463 56.5743L22.4569 54.2905L23.2983 54.7893C26.8304 56.8864 30.8817 57.9947 35.0117 57.9962H35.0204C47.705 57.9962 58.0285 47.6755 58.0329 34.9895C58.0344 28.8426 55.6442 23.0618 51.2983 18.713Z" fill="#40C351" />
              <path fillRule="evenodd" clipRule="evenodd" d="M28.0992 23.3994C27.5815 22.2473 27.0361 22.224 26.5417 22.2036C26.1377 22.1861 25.6769 22.1875 25.2161 22.1875C24.7552 22.1875 24.0056 22.3611 23.3713 23.0538C22.7369 23.7465 20.949 25.4192 20.949 28.8229C20.949 32.2267 23.4281 35.5167 23.7738 35.9775C24.1194 36.4384 28.56 43.6469 35.5921 46.4207C41.4356 48.7248 42.6256 48.2669 43.8944 48.1517C45.1631 48.0365 47.9879 46.479 48.564 44.8632C49.14 43.2473 49.14 41.8634 48.9679 41.5746C48.7944 41.2859 48.3336 41.1138 47.6423 40.7667C46.9511 40.4196 43.5488 38.7469 42.9144 38.5165C42.28 38.2861 41.8192 38.1709 41.3569 38.8636C40.8961 39.5548 39.5704 41.1138 39.1665 41.5746C38.7625 42.0369 38.3586 42.0952 37.6673 41.7482C36.9761 41.4011 34.7477 40.6719 32.1038 38.3152C30.0475 36.4821 28.6592 34.2173 28.2552 33.5246C27.8513 32.8334 28.2115 32.4586 28.5586 32.1129C28.8692 31.8023 29.2498 31.305 29.5969 30.9011C29.9425 30.4971 30.0577 30.2084 30.2881 29.7475C30.5186 29.2852 30.4033 28.8813 30.2298 28.5357C30.0592 28.1886 28.7146 24.7673 28.0992 23.3994Z" fill="white" />
            </svg> Order Here
          </button>
          <p className="text-white text-base lg:text-xl fontPoppins font-regular leading-relaxed mb-4">
            Don’t forget to ask about our <span className="font-bold">special promos</span> available every{" "}
            <span className="font-bold">Tuesday, Wednesday,</span> and <span className='font-bold'>Thursday</span>. Delicious deals await you!
          </p>

        </div>

        {/* Image Section */}
        <div className="w-1/2 flex items-center justify-end">
          <img
            src="/home/plate1.png"
            alt="Tuna Toro Dish"
            className="max-w-[80%] rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default page
