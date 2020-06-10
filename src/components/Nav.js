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
                    
                    <svg className="h-12 w-auto hidden md:block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM22.9091 12C22.9091 18.0249 18.0249 22.9091 12 22.9091C5.97508 22.9091 1.09091 18.0249 1.09091 12C1.09091 5.97508 5.97508 1.09091 12 1.09091C18.0249 1.09091 22.9091 5.97508 22.9091 12ZM10.2638 4.8H9.05523C8.45153 5.28009 8.45137 6.72006 9.05523 7.2C9.65909 7.67995 9.65997 9.12006 9.05523 9.6H10.2638C10.8682 8.64006 10.8682 7.68 10.2638 7.2C9.65954 6.72 9.65954 5.28005 10.2638 4.8ZM12.908 4.8H11.6994C11.0957 5.28009 11.0955 6.72006 11.6994 7.2C12.3033 7.67995 12.3041 9.12006 11.6994 9.6H12.908C13.5123 8.64006 13.5123 7.68 12.908 7.2C12.3037 6.72 12.3037 5.28005 12.908 4.8ZM14.3425 4.8H15.5511C14.9468 5.28005 14.9468 6.72 15.5511 7.2C16.1554 7.68 16.1554 8.64006 15.5511 9.6H14.3425C14.9473 9.12006 14.9464 7.67995 14.3425 7.2C13.7387 6.72006 13.7388 5.28009 14.3425 4.8ZM5.9604 11.7333C5.9604 12.4263 6.40094 13.0163 7.01722 13.2387V13.7782L5.88587 13.5147C5.45575 13.4145 5.0272 13.6823 4.92868 14.1128C4.83017 14.5433 5.09898 14.9735 5.5291 15.0737L7.01722 15.4203V16.2C7.01722 17.8568 8.36037 19.2 10.0172 19.2H14.5904C16.2472 19.2 17.5904 17.8568 17.5904 16.2V15.4055L19.0149 15.0737C19.4451 14.9735 19.7139 14.5433 19.6154 14.1128C19.5168 13.6823 19.0883 13.4145 18.6582 13.5147L17.5904 13.7634V13.2391C18.2072 13.017 18.6482 12.4266 18.6482 11.7333C18.6482 10.8496 17.9318 10.1333 17.0482 10.1333H7.5604C6.67675 10.1333 5.9604 10.8496 5.9604 11.7333ZM8.07493 16.1333V13.3333H16.5334V16.1333C16.5334 17.2378 15.638 18.1333 14.5334 18.1333H10.0749C8.97036 18.1333 8.07493 17.2378 8.07493 16.1333ZM16.5334 12.2666H17.0609C17.3535 12.2644 17.59 12.0265 17.59 11.7333C17.59 11.4388 17.3512 11.2 17.0567 11.2H7.5502C7.25565 11.2 7.01687 11.4388 7.01687 11.7333C7.01687 12.0265 7.25338 12.2644 7.546 12.2666H8.07493V12.2667H16.5334V12.2666Z" fill="#4299E1"/>
</svg>


<h1 className="text-3xl pl-2  text-gray-700 font-bold w-auto hidden md:block">
                      GreeneRecipes
                    </h1>
                    

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
                <div className="w-full lg:px-6 lg:w-3/4 xl:px-12 sm:pr-4 ">
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
                <button type="button" className="bg-gray-600 rounded-lg text-gray-100 focus:outline-none hover:bg-gray-700 flex px-6 items-center "
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
