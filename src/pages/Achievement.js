import React from "react";

function Achievement() {
  return (
    <div className="my-10">
      <div>
        <h6 className="text-xl text-center font-medium text-black-600 my-5 mb-1">
          Our People
        </h6>
        <h1 className="text-3xl font-bold text-center text-slate-800 my-3 mt-2">
          What can we achieve together?
        </h1>
        <p className="my-3 mt-2">
          We've spent 20+ years tracking financial technology challenges with
          early-stage startups, emerging companies, and established brands to
          launch and scale innovative payment processing and digital banking
          programs.
        </p>
      </div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            >
              <article className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-y-[-10px]">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={`https://picsum.photos/600/400/?random`}
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
                    >
                      Article Title
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">11/1/19</p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                  >
                    <img
                      alt="Placeholder"
                      className="block rounded-full"
                      src={`https://picsum.photos/32/32/?random`}
                    />
                    <p className="ml-2 text-sm">Author Name</p>
                  </a>
                  <a
                    className="no-underline text-grey-darker hover:text-red-dark"
                    href="#"
                  >
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievement;
