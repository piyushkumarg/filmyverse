import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import app from "../firebase/firebase";
import swal from "sweetalert";
import { addDoc } from "firebase/firestore";
import { usersRef } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
const auth = getAuth(app);

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [OTP, setOTP] = useState("");

  const generateRecaptha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const requestOtp = () => {
    setLoading(true);
    generateRecaptha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+91${form.mobile}`, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        swal({
          text: "OTP Sent",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        setOtpSent(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyOTP = () => {
    try {
      setLoading(true);
      window.confirmationResult.confirm(OTP).then((result) => {
        uploadData();
        swal({
          text: "Sucessfully Registered",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        navigate("/signin");
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const uploadData = async () => {
    try {
      const salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(form.password, salt);
      await addDoc(usersRef, {
        name: form.name,
        password: hash,
        mobile: form.mobile,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {otpSent ? (
        <div className="text-gray-600 body-font relative w-full">
          <div className="container px-5 py-8 mx-auto bg-[#353b48] mt-5 rounded-lg shadow-lg w-3/4 md:w-1/3 ">
            <div className="flex flex-col text-center ">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-[#f5f6fa]">
                Sign Up
              </h1>
            </div>

            <div className="relative">
              <label for="name" className="leading-7 text-sm text-[#dcdde1]">
                OTP
              </label>
              <input
                id="mobile"
                name="mobile"
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
                placeholder="Enter your OTP"
                className="w-full  rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="p-2 w-full">
              <button
                onClick={verifyOTP}
                className="flex mx-auto text-[#f5f6fa] bg-[#4cd137] border-0 py-2 mt-4 px-8 focus:outline-none hover:bg-[#44bd32] rounded text-lg"
              >
                {loading ? (
                  <TailSpin height={25} color="#f5f6fa" />
                ) : (
                  "Confirm OTP"
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-gray-600 body-font relative w-full">
          <div className="container px-5 py-8 mx-auto bg-[#353b48] mt-5 rounded-lg shadow-lg w-3/4 md:w-1/3 ">
            <div className="flex flex-col text-center ">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-[#f5f6fa]">
                Sign Up
              </h1>
            </div>

            <div className="relative">
              <label for="name" className="leading-7 text-sm text-[#dcdde1]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your name..."
                className="w-full  rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
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
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="Enter your password..."
                className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:bg-[#f5f6fa] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="p-2 w-full">
              <button
                onClick={requestOtp}
                className="flex mx-auto text-[#f5f6fa] bg-[#4cd137] border-0 py-2 px-8 focus:outline-none hover:bg-[#44bd32] rounded text-lg"
              >
                {loading ? <TailSpin height={25} color="#f5f6fa" /> : "Sign Up"}
              </button>
            </div>
            <div className="flex justify-center text-[#f5f6fa]">
              <p>
                Already have a account{" "}
                <Link to={"/signin"}>
                  <span className="text-[#0097e6]">Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Signup;
