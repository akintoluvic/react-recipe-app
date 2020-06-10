import React from "react";
import github from "../images/github.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";

export const Nav = ({search, onSearch, textChange}) => {
  return (
    <div className="bg-gray-200 pt-24 lg:pt-0">
      <div className="fixed z-100 bg-gray-200 inset-x-0 top-0 border-b-2 border-gray-200 lg:border-b-0 lg:static flex items-center">
        <div className="w-full max-w-screen-xl relative mx-auto px-6">
          <div className="lg:border-b-2 lg:border-gray-200 h-24 flex flex-col justify-center">
            <div className="flex items-center -mx-6">
              <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6">
                <div className="flex items-center">
                  <a href="/" className="block inline-flex align-center">
                    <h1 className="text-3xl  text-gray-700 font-bold w-auto hidden md:block">
                      GreeneRecipes
                    </h1>

                    {/* <svg
                      className="h-12 w-auto hidden md:block"
                      viewBox="0 0 273 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GreeneRecipes</title>
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M32 16C24.8 16 20.3 19.6 18.5 26.8C21.2 23.2 24.35 21.85 27.95 22.75C30.004 23.2635 31.4721 24.7536 33.0971 26.4031C35.7443 29.0901 38.8081 32.2 45.5 32.2C52.7 32.2 57.2 28.6 59 21.4C56.3 25 53.15 26.35 49.55 25.45C47.496 24.9365 46.0279 23.4464 44.4029 21.7969C41.7557 19.1099 38.6919 16 32 16ZM18.5 32.2C11.3 32.2 6.8 35.8 5 43C7.7 39.4 10.85 38.05 14.45 38.95C16.504 39.4635 17.9721 40.9536 19.5971 42.6031C22.2443 45.2901 25.3081 48.4 32 48.4C39.2 48.4 43.7 44.8 45.5 37.6C42.8 41.2 39.65 42.55 36.05 41.65C33.996 41.1365 32.5279 39.6464 30.9029 37.9969C28.2557 35.3099 25.1919 32.2 18.5 32.2Z"
                        fill="url(#paint0_linear)"
                      />

                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="3.5"
                          y1="16"
                          x2="59"
                          y2="48"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2298BD" />
                          <stop offset="1" stopColor="#0ED7B5" />
                        </linearGradient>
                      </defs>
                    </svg> */}

                    <svg
                      className="w-10 h-10 block md:hidden"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GreeneRecipes</title>
                      <path
                        d="M13.5 11.1C15.3 3.9 19.8.3 27 .3c10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 27.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
                        transform="translate(5 16)"
                        fill="url(#logoMarkGradient)"
                        fillRule="evenodd"
                      ></path>
                      <defs>
                        <linearGradient
                          x1="0%"
                          y1="0%"
                          y2="100%"
                          id="logoMarkGradient"
                        >
                          <stop stopColor="#2298BD" />
                          <stop offset="1" stopColor="#0ED7B5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex flex-grow lg:w-3/4 xl:w-4/5">
                <div className="w-full lg:px-6 lg:w-3/4 xl:px-12 pr-4 ">
                  <div className="relative">
                    <input
                      id="docsearch"
                      className="transition-colors duration-100 ease-in-out bg-white shadow-sm focus:outline-0 border border-transparent placeholder-gray-600 rounded-lg py-2 pr-2 pl-10 block w-full appearance-none leading-normal"
                      type="text"
                      value={search}
                      onChange={e => textChange(e)}
                      placeholder="Enter recipe here to search"
                />
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                      <svg
                        className="fill-current md-hidden pointer-events-none text-gray-600 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                      </svg>
                    </div>
                  </div>
                  
                </div>
                <button type="button" className="bg-gray-800 rounded-lg text-gray-500 focus:outline-none focus:text-gray-700 flex px-6 items-center "
                onClick={() => onSearch()} >
                    Search
                  </button>

                
  

                <div className="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6">
                  <div className="flex justify-start items-center text-gray-500">
                    <a
                      className="block flex items-center hover:text-gray-700 mr-5"
                      href="https://github.com/akintoluvic"
                    >
                      <img
                        src={github}
                        className="fill-current w-5 h-5 text-gray-700"
                        alt="github"
                      />
                    </a>
                    <a
                      className="block flex items-center hover:text-gray-700 mr-5"
                      href="https://twitter.com/akintoluvic"
                    >
                      <img
                        src={twitter}
                        className="fill-current w-5 h-5 text-gray-700"
                        alt="twitter"
                      />
                    </a>
                    <a
                      className="block flex items-center hover:text-gray-700"
                      href="/discord"
                    >
                      <img
                        src={linkedin}
                        className="fill-current w-5 h-5 text-gray-700"
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
