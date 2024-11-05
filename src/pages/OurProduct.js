import React from "react";
import {
  FaUser,
  FaRegUser,
  FaUserCircle,
  FaLongArrowAltRight,
} from "react-icons/fa"; // Importing multiple icons

function OurProduct() {
  // Example dynamic data with associated icons
  const articles = [
    {
      title: "Article 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "John Doe",
      icon: FaUserCircle,
      button: "hello",
      arrowicon: FaLongArrowAltRight,
    },
    {
      title: "Article 2",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      author: "Jane Smith",
      icon: FaUserCircle,
      button: "hello",
      arrowicon: FaLongArrowAltRight,
    },
    {
      title: "Article 3",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      author: "Mark Johnson",
      icon: FaUserCircle,
      button: "hello",
      arrowicon: FaLongArrowAltRight,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-400 to-black p-16 mt-10 w-full mx-auto product-custom-alignment rounded-2xl py-10">
      <div className="my-10">
        <div>
          <h6 className="text-xl text-center font-medium text-white my-5 mb-1">
            Products
          </h6>
          <h1 className="text-3xl font-bold text-center text-white my-3 mt-2">
            Our products, your solutions.
          </h1>
          <p className="my-3 text-gray-200 mt-2 text-center w-full mx-auto">
            We've spent 20+ years tracking financial technology challenges with
            early-stage startups, emerging companies, and established brands to
            launch and scale innovative payment processing and digital banking
            programs.
          </p>
        </div>
        <div className="container my-12 mx-auto px-0 md:px-0">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {articles.map((article, index) => (
              <div
                key={index}
                className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              >
                <article className="overflow-hidden bg-white cursor-pointer rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-y-[-10px]">
                  <div className="flex items-center justify-between leading-none p-2 md:p-4 md:pb-0">
                    <a
                      className="flex items-center no-underline hover:underline text-black"
                      href="#"
                    >
                      {React.createElement(article.icon, {
                        className: "text-3xl text-blue-500",
                      })}
                      <p className="ml-2 text-sm">{article.author}</p>
                    </a>
                  </div>
                  <div className="p-4">
                    <header className="flex items-center justify-between leading-tight">
                      <h1 className="text-lg">
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          {article.title}
                        </a>
                      </h1>
                    </header>
                    <p className="text-black text-sm mt-2">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-4 py-0 pb-5">
                    {article.arrowicon && (
                      <a
                        href="#"
                        className="text-black px-1 flex items-center flex-row-reverse items-center gap-2"
                      >
                        {React.createElement(article.arrowicon, {
                          className: "text-xl pt-1",
                        })}
                        {article.button && (
                          <span className="text-sm text-black">
                            {article.button}
                          </span>
                        )}
                      </a>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProduct;
