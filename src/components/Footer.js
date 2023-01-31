import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" p-3 border-t-2 mt-4 w-full border-[#7f8fa6] rounded-2xl text-[#f5f6fa] body-font bg-[#353b48]  flex items-center sm:flex-row flex-col">
      <Link to={"/"}>
        <span className="text-[#e84118] text-xl md:text-3xl m- font-bold mx-2 ">
          Filmy<span className="text-[#4cd137]">Verse</span>
        </span>
      </Link>
      <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2023 Piyush Kumar
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a
          href="https://www.twitter.com/piyushkumarreal/"
          target="_blank"
          className="ml-3 text-[#dcdde1] cursor-pointer hover:text-[#00a8ff] delay-200 "
        >
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/piyushkumarreal/"
          target="_blank"
          className="ml-3 text-[#dcdde1] cursor-pointer hover:text-[#e84118] delay-200"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/piyush-kumarg/"
          target="_blank"
          className="ml-3 text-[#dcdde1] cursor-pointer mx-2 hover:text-[#00a8ff] delay-200"
        >
          <svg
            fill="currentColor"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  );
};

export default Footer;
