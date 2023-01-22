import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Signin = () => {
  const [form, setForm] = useState({
    mobile: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  return (
    <div className="text-gray-600 body-font relative w-full">
      <div className="container px-5 py-8 mx-auto bg-[#353b48] mt-5 rounded-lg shadow-lg w-3/4 md:w-1/3 ">
        <div className="flex flex-col text-center ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-[#f5f6fa]">
            Sign In
          </h1>
        </div>

        <div className="relative">
          <label for="name" className="leading-7 text-sm text-[#dcdde1]">
            Mobile No.
          </label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            placeholder="Enter your mobile number..."
            className="w-full  rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="relative">
          <label for="email" className="leading-7 text-sm text-[#dcdde1]">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={(e) => ({ ...form, password: e.target.value })}
            placeholder="Enter your password..."
            className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:bg-[#f5f6fa] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="p-2 w-full">
          <button className="flex mx-auto  text-[#f5f6fa] bg-[#4cd137] border-0 py-2 px-8 focus:outline-none hover:bg-[#44bd32] rounded text-lg">
            {loading ? <TailSpin height={25} color="#f5f6fa" /> : "Sign In"}
          </button>
        </div>
        <div className="flex justify-center text-[#f5f6fa]">
          <p>
            Don't have account{" "}
            <Link to={"/signup"}>
              <span className="text-[#0097e6]">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
