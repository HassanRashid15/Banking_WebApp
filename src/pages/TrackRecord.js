import React from "react";
import { motion } from "framer-motion";

function TrackRecord() {
  const people = [
    {
      name: "Tranter Jaskulski",
      role: "Founder & Specialist",
      photo:
        "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Denice Jagna",
      role: "Tired & M. Specialist",
      photo:
        "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Kenji Milton",
      role: "Team Member",
      photo:
        "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Doesn't matter",
      role: "Will be fired",
      photo:
        "https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  ];

  return (
    <div className="my-10">
      {/* Title Section with Left to Right Animation */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h6 className="text-xl font-medium text-black-600 my-5 mb-1">
          Our Track Record
        </h6>
        <h1 className="text-3xl font-bold text-slate-800 my-3 mt-2">
          TopPay at a glance
        </h1>
        <p className="my-6 mt-2 mx-auto w-full lg:max-w-screen-sm">
          We've spent 20+ years tracking financial technology challenges with
          early-stage startups, emerging companies, and established brands to
          launch and scale innovative payment processing and digital banking
          programs.
        </p>
      </motion.div>

      {/* Card Section with Sequential Animations */}
      <div className="flex flex-wrap">
        {people.map((person, index) => (
          <motion.div
            key={index}
            className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.3, // Delay each card animation by 0.2 seconds
            }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col">
              <a href="#" className="mx-auto">
                <motion.img
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src={person.photo}
                  alt={person.name}
                  whileHover={{ scale: 1.05 }} // Slight zoom on hover
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </a>

              <div className="text-center mt-6">
                <motion.h1
                  className="text-gray-900 text-xl font-bold mb-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {person.name}
                </motion.h1>
                <div className="text-gray-700 font-light mb-2">
                  {person.role}
                </div>

                <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                    >
                      <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                    </a>
                  )}
                  {person.twitter && (
                    <a
                      href={person.twitter}
                      className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                    >
                      <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                    </a>
                  )}
                  {person.instagram && (
                    <a
                      href={person.instagram}
                      className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                    >
                      <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TrackRecord;
