import React from "react";
import { Button } from "./Button";

export const Nav = () => {
  return (
    // <div className="top-nav">
    //     <h2>Ounje-wa</h2>
    //     <p>All recipes to take care of your apetite.</p>
    //     <span>
    //         <Button name="Login" color="btn btn-white" />
    //         <Button name="Submit Recipe" color="btn btn-black" />
    //     </span>

    // </div>
    <div class="bg-gray-100 pt-24 lg:pt-0">
      <div class="fixed z-100 bg-gray-100 inset-x-0 top-0 border-b-2 border-gray-200 lg:border-b-0 lg:static flex items-center">
        <div class="w-full max-w-screen-xl relative mx-auto px-6">
          <div class="lg:border-b-2 lg:border-gray-200 h-24 flex flex-col justify-center">
            <div class="flex items-center -mx-6">
              <div class="lg:w-1/4 xl:w-1/5 pl-6 pr-6">
                <div class="flex items-center">
                  <a href="/" class="block inline-flex align-center">
                    <h1 class="text-3xl  text-gray-700 font-bold w-auto hidden md:block">
                      {" "}
                      GreeneRecipes
                    </h1>

                    <svg
                      class="h-12 w-auto hidden md:block"
                      viewBox="0 0 273 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GreeneRecipes</title>
                      <path
                        fill-rule="evenodd"
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
                          <stop stop-color="#2298BD" />
                          <stop offset="1" stop-color="#0ED7B5" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <svg
                      class="w-10 h-10 block md:hidden"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GreeneRecipes</title>
                      <path
                        d="M13.5 11.1C15.3 3.9 19.8.3 27 .3c10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 27.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
                        transform="translate(5 16)"
                        fill="url(#logoMarkGradient)"
                        fill-rule="evenodd"
                      ></path>
                      <defs>
                        <linearGradient
                          x1="0%"
                          y1="0%"
                          y2="100%"
                          id="logoMarkGradient"
                        >
                          <stop stop-color="#2298BD" />
                          <stop offset="1" stop-color="#0ED7B5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="flex flex-grow lg:w-3/4 xl:w-4/5">
                <div class="w-full lg:px-6 lg:w-3/4 xl:px-12 pr-4">
                  <div class="relative">
                    <input
                      id="docsearch"
                      class="transition-colors duration-100 ease-in-out bg-white shadow-md focus:outline-0 border border-transparent placeholder-gray-600 rounded-lg py-2 pr-2 pl-10 block w-full appearance-none leading-normal"
                      type="text"
                      placeholder="Enter recipe here to search"
                    />
                    <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                      <svg
                        class="fill-current pointer-events-none text-gray-600 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <a
                  href="/"
                  class="inline-flex items-center bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 px-6 py-2 rounded-lg text-white font-medium shadow text-lg"
                >
                  Search
                </a>

                {/*   
                  <button type="button" id="sidebar-open" class="text-gray-500 focus:outline-none focus:text-gray-700 flex px-6 items-center lg:hidden">
                    <svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
  
  
                  <button type="button" id="sidebar-close" class="text-gray-500 focus:outline-none focus:text-gray-700 hidden flex px-6 items-center lg:hidden">
                    <svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                  </button> */}

                <div class="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6">
                  <div class="flex justify-start items-center text-gray-500">
                    <a
                      class="block flex items-center hover:text-gray-700 mr-5"
                      href="https://github.com/akintoluvic"
                    >
                      <svg
                        class="fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>GitHub</title>
                        <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0" />
                      </svg>
                    </a>
                    <a
                      class="block flex items-center hover:text-gray-700 mr-5"
                      href="https://twitter.com/akintoluvic"
                    >
                      <svg
                        class="fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Twitter</title>
                        <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84" />
                      </svg>
                    </a>
                    <a
                      class="block flex items-center hover:text-gray-700"
                      href="/discord"
                    >
                      <svg
                        class="fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 146 146"
                      >
                        <title>Discord</title>
                        <path
                          d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z"
                          fill-rule="nonzero"
                        />
                      </svg>
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
