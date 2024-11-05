import React from "react";
import { motion } from "framer-motion";

function Newsletter() {
  return (
    <div className="product-custom-alignment bg-red-500 mx-auto w-full my-20 rounded-xl">
      <div className="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center justify-center">
          <main className="max-w-screen-xl px-4 lg:px-16">
            <div className="text-start">
              {/* Heading animates from left to right */}
              <motion.h2
                className="text-sm tracking-tight leading-10 font-bold text-gray-900 sm:leading-none"
                initial={{ opacity: 0, x: -20 }} // Start from the left
                whileInView={{ opacity: 1, x: 0 }} // Animate to final position
                transition={{ duration: 0.8 }} // Duration of the animation
                viewport={{ once: true }} // Animate once when in view
              >
                Find out what's possible with
                <span className="text-indigo-600">TopPay</span>
              </motion.h2>

              {/* Paragraph animates from right to left */}
              <motion.p
                className="mt-0 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-0 md:text-xl lg:mx-0"
                initial={{ opacity: 0, x: 20 }} // Start from the right
                whileInView={{ opacity: 1, x: 0 }} // Animate to final position
                transition={{ duration: 0.8, delay: 0.2 }} // Slight delay
                viewport={{ once: true }} // Animate once when in view
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </motion.p>

              {/* Button animates from the left */}
              <motion.div
                className="mt-5 sm:mt-5 sm:flex justify-start"
                initial={{ opacity: 0, x: -20 }} // Start from the left
                whileInView={{ opacity: 1, x: 0 }} // Animate to final position
                transition={{ duration: 0.6, delay: 0.4 }} // Slight delay
                viewport={{ once: true }} // Animate once when in view
              >
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-2 md:text-lg md:px-10"
                  >
                    Open an Account
                  </a>
                </div>
              </motion.div>
            </div>
          </main>
        </div>

        {/* Image animates from right to left */}
        <motion.div
          className="w-full h-72 lg:w-full md:h-screen overflow-hidden"
          initial={{ opacity: 0, x: 20 }} // Start from the right
          whileInView={{ opacity: 1, x: 0 }} // Animate to final position
          transition={{ duration: 1 }} // Duration of the animation
          viewport={{ once: true }} // Animate once when in view
        >
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="TopPay"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Newsletter;
