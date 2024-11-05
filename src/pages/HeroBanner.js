import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

function HeroBanner() {
  return (
    <div>
      <section className="h-full">
        {/* Add animation for the section */}
        <motion.div
          className="rounded-2xl bg-indigo-50 py-20 overflow-hidden my-5 lg:m-0 2xl:py-20 xl:py-20 lg:rounded-tl-2xl lg:rounded-bl-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full"
            style={{ maxWidth: "90%" }}
          >
            <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap-32">
              <div className="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
                {/* Add animation for text and title */}
                <motion.div
                  className="flex items-center text-sm font-medium text-gray-500 justify-center lg:justify-start"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-blue-400 py-2 px-4 rounded-2xl text-xs font-medium text-white mr-3">
                    Microfinance App
                  </span>
                </motion.div>
                {/* Animated Title */}
                <motion.h1
                  className="py-8 text-center text-gray-900 font-bold font-manrope text-5xl lg:text-left leading-[70px] pt-0"
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Expanding the
                  <span
                    className="text-blue-500"
                    style={{ padding: "0px 5px" }}
                  >
                    Financial
                  </span>
                  Frontier With You.
                </motion.h1>
                {/* Animated Subtitle */}
                <motion.p
                  className="text-gray-500 text-lg text-center lg:text-left"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  We're a proven financial technology platform, an innovation
                  engine and a leader in card issuing, payments, and digital
                  banking.
                </motion.p>
                {/* Animated Email Input and Button */}
                <motion.div
                  className="relative p-1.5 my-10 flex items-center gap-y-4 h-auto md:h-16 flex-col md:flex-row justify-between rounded-full md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] border border-transparent md:bg-white transition-all duration-500 hover:border-indigo-600 focus-within:border-indigo-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter email to get started"
                    className="text-base rounded-full text-gray-900 flex-1 py-4 px-6 shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] md:shadow-none bg-white md:bg-transparent shadow-none placeholder:text-gray-400 focus:outline-none md:w-fit w-full"
                  />
                  <button className="bg-blue-600 rounded-full py-3 px-7 text-base font-semibold text-white hover:bg-indigo-700 cursor-pointer transition-all duration-500 md:w-fit w-full">
                    Get Started
                  </button>
                </motion.div>
                {/* Animated People Joined Section */}
                <motion.div
                  className="flex items-center flex-col lg:flex-row"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1694846673.png"
                      alt="Rounded image"
                      className="border-2 border-solid border-indigo-50 rounded-full relative z-50 object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1694846691.png"
                      alt="Rounded image"
                      className="border-2 border-solid border-indigo-50 rounded-full relative z-30 -ml-3 object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1694846704.png"
                      alt="Rounded image"
                      className="border-2 border-solid border-indigo-50 rounded-full relative z-20 -ml-3 object-cover"
                    />
                  </div>
                  <span className="mt-3 text-base text-gray-600 font-medium lg:ml-3">
                    People have joined
                  </span>
                </motion.div>
              </div>

              {/* Animated Image Section */}
              <motion.div
                className="w-full xl:col-span-7 lg:col-span-6 block"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-full sm:w-auto lg:w-[60.8125rem] xl:ml-16">
                  <img
                    src="https://pagedone.io/asset/uploads/1694846193.png"
                    alt="Dashboard image"
                    className="rounded-l-3xl object-cover w-full lg:h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default HeroBanner;
