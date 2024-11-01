import React from 'react'

function HeroBanner() {
  return (
    <div>
      <section class=" h-full">
        <div class="rounded-2xl bg-indigo-50 py-20 overflow-hidden my-5 lg:m-0 2xl:py-20 xl:py-20  lg:rounded-tl-2xl lg:rounded-bl-2xl ">
          <div
            class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full"
            style={{ maxWidth: "90%" }}
          >
            <div class="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap-32">
              <div class="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
                <div class="flex items-center text-sm font-medium text-gray-500 justify-center lg:justify-start">
                  <span class="bg-blue-400 py-2 px-4 rounded-2xl text-xs font-medium text-white mr-3 ">
                    Microfinance App
                  </span>
                </div>
                <h1 class="py-8 text-center text-gray-900 font-bold font-manrope text-5xl lg:text-left leading-[70px] pt-0">
                  Expanding the 
                   <span class="text-blue-500" style={{padding:'0px 5px'}}>
                    Financial </span> Frontier With You.
                </h1>
                <p class=" text-gray-500 text-lg text-center lg:text-left">
                 We're a proven financial technology platform, an innovation engine and a leader in card issuing, payments and digital banking..
                </p>
                <div class="relative p-1.5 my-10  flex  items-center gap-y-4 h-auto md:h-16 flex-col md:flex-row justify-between rounded-full md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] border border-transparent md:bg-white transition-all duration-500 hover:border-indigo-600 focus-within:border-indigo-600">
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter email to get started"
                    class="text-base rounded-full text-gray-900 flex-1 py-4 px-6 shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] md:shadow-none bg-white md:bg-transparent shadow-none placeholder:text-gray-400 focus:outline-none md:w-fit w-full"
                  />
                  <button class="bg-blue-600 rounded-full py-3 px-7 text-base font-semibold text-white hover:bg-indigo-700 cursor-pointer transition-all duration-500 md:w-fit w-full">
                    Get Started
                  </button>
                </div>
                <div class="flex items-center flex-col lg:flex-row">
                  <div class="flex items-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1694846673.png"
                      alt="Rounded image "
                      class="border-2 border-solid border-indigo-50 rounded-full relative z-50 object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1694846691.png"
                      alt="Rounded image"
                      class="border-2 border-solid border-indigo-50 rounded-full relative z-30 -ml-3 object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1694846704.png"
                      alt="Rounded image"
                      class="border-2 border-solid border-indigo-50 rounded-full relative z-20 -ml-3 object-cover"
                    />
                  </div>
                  <span class="mt-3 text-base text-gray-600 font-medium lg:ml-3">
                    People have joined
                  </span>
                </div>
              </div>
              <div class="w-full xl:col-span-7  lg:col-span-6 block">
                <div class="w-full  sm:w-auto lg:w-[60.8125rem] xl:ml-16">
                  <img
                    src="https://pagedone.io/asset/uploads/1694846193.png"
                    alt="Dashboard image"
                    class="rounded-l-3xl object-cover"
                    className="w-full  lg:h-auto "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroBanner
