import React from 'react';

const Banner = () => {
    return (
        <div>
             <div className="relative mt-4 flex flex-col-reverse py-16 lg:pt-0 rounded-xl lg:flex-col lg:pb-0 max-w-screen-2xl mx-auto">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://i.postimg.cc/rwH9FPYW/Travel-Buddy.jpg"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Tours By Native
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl sm:leading-none">
            Discover unforgettable travel experiences
            <br className="hidden md:block" />
            
          </h2>
          <p className="pr-5 mb-5 text-sky-600 text-gray-700 md:text-lg">
            Discover unforgettable travel experiences
          </p>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 border border-sky-600 hover:bg-transparent hover:text-sky-900 focus:outline-none focus:ring active:text-sky-500 font-medium bg-sky-900 text-gray-100  rounded shadow-md "
            >
              Get started
            </a>
            <a
              href="/service"
              aria-label=""
              className="inline-flex items-center font-semibold text-sky-900 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;