import React from "react";

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
      <div>
        <h6 className="text-xl text-center font-medium text-black-600 my-5 mb-1">
          Our Track Recorded
        </h6>
        <h1 className="text-3xl font-bold text-center text-slate-800 my-3 mt-2">
          TopPay at a glance
        </h1>
        <p className="my-6 mt-2 text-center mx-auto w-full lg:max-w-screen-sm">
          We've spent 20+ years tracking financial technology challenges with
          early-stage startups, emerging companies, and established brands to
          launch and scale innovative payment processing and digital banking
          programs.
        </p>
      </div>

      <div className="flex flex-wrap">
        {people.map((person, index) => (
          <div
            key={index}
            className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4 hover:translate-y-[-10px] transform transition-transform duration-500"
          >
            <div className="flex flex-col">
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src={person.photo}
                  alt={person.name}
                />
              </a>

              <div className="text-center mt-6">
                <h1 className="text-gray-900 text-xl font-bold mb-1">
                  {person.name}
                </h1>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackRecord;
