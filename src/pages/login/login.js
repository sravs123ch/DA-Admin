import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaHandPointRight } from "react-icons/fa";
import { AiOutlineWarning } from "react-icons/ai";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import axios from "axios";
import { routeNames } from "../../Constants/constants";
import { useAuth } from "../../Context/AuthContext";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fingerprint, setFingerprint] = useState(null);

  const [ipError, setIpError] = useState("");
  const [loading, setLoading] = useState(true);

  const [errMessage, setErrMessage] = useState("");

  const [ipErrorModal, setIpErrorModal] = useState(false);

  const [fetchedId, setFetchedId] = useState("");
  const { login } = useAuth();

  const [formErrors, setFormErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  // static

  const idList = [
    "eef798296dbf743cda7e1e0f8af3af4f",
    "939c1f5d6034edc6a70aaed656f75347",
    "c6034887e6fb9a0115f49c836dcbae8f",
    "c6034887e6fb9a0115f49c836dcbae8f",
    "bae6c0b5c29591e46246ca67aab9dce7",
  ];

  useEffect(() => {
    const loadFingerprint = async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      setFingerprint(result.visitorId);
    };

    loadFingerprint();
    console.log("Id: ",fingerprint);
  }, []);

  const handleValidation = () => {
    if (!email || !password || !fingerprint) {
      setErrMessage("Please fill in all fields.");
    } else {
      postData();
    }
  };

  // const postData = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://da-backend-7smk.onrender.com/api/auth/login",
  //       {
  //         email: email,
  //         password: password,
  //         deviceId:"123e4567e89b12d3a456426614174090",
  //       }
  //     );
  //     const data = await response.json();
  //     if (response.status === 200) {
  //       navigate(routeNames.dashboard);
  //       console.log("Response:", response.data);
  //       setFetchedId(response.data);
  //       const { token } = data;

  //       // Decode the token to get UserID and RoleID
  //       const decodedToken = jwtDecode(token);
  //       const role = decodedToken.Role;

  //       // Login function from context
  //       login(token, role);
  //       if (response.data.success) {
  //         navigate(routeNames.dashboard);
  //       } else{
  //         setIpErrorModal(true);
  //       }
  //     }
  //   } catch (error) {
  //     console.log("Error posting data", error);
  //   }
  // };


const postData = async () => {
  try {
    const response = await axios.post(
      "https://da-backend-7smk.onrender.com/api/auth/login",
      {
        email: email,
        password: password,
        deviceId: "123e4567e89b12d3a456426614174090",
      }
    );

    // Access the response data directly
    const data = response.data;

    if (response.status === 200 && data.success) {
      console.log("Response:", data);
      setFetchedId(data);

      // Decode the token
      const { token } = data;
      const decodedToken = jwtDecode(token);
      const role = decodedToken.Role;

      // Use login function from context
      login(token, role);

      // Navigate to dashboard
      navigate(routeNames.dashboard);
    } else {
      setIpErrorModal(true);
    }
  } catch (error) {
    console.log("Error posting data", error);
  }
};

  const renderLoginForm = () => {
    return (
      <div className="flex min-h-screen items-center justify-center bg-customPink">
        <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full">
          {/* Left Section (Webflow Ad Section) */}
          <div className="w-full md:w-1/2 hidden md:flex flex-col items-start justify-evenly bg-black text-white p-8 md:rounded-l-lg">
            <h2 className="text-3xl font-bold mb-4">
              Learn Anytime, Anywhere with Our E-Learning Platform
            </h2>
            <p className="text-base mb-6">
              Access a wide range of courses and resources designed to help you
              master new skills, all at your own pace.
            </p>
            <div className="flex items-center space-x-3 text-lg font-semibold">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-text shadow-lg">
                Please Sign in to continue
              </p>
              <FaHandPointRight className="text-yellow-500 text-2xl animate-pulse" />
            </div>
          </div>

          {/* Right Section (Form Section) */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Sign in to Coursue
            </h2>

            {/* Sign in with Google */}
            <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 mb-4 text-gray-600 hover:bg-gray-100">
              <FcGoogle size={24} className="mr-2" />
              Sign in with Google
            </button>

            <div className="text-center text-gray-500 mb-4">
              or sign in with email
            </div>

            {/* Username or Email */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username or Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 outline-none"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() =>
                  setFormErrors((prev) => ({ ...prev, emailError: "" }))
                }
              />
              {formErrors.emailError && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.emailError}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 outline-none"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() =>
                  setFormErrors((prev) => ({ ...prev, passwordError: "" }))
                }
              />
              {formErrors.passwordError && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.passwordError}
                </p>
              )}
              <div className="text-right text-sm text-gray-500 mt-2">
                <a href="#" className="hover:text-pink-500 underline">
                  Forgot?
                </a>
              </div>
            </div>

            {/* Sign in Button */}
            <button
              onClick={handleValidation}
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700"
            >
              Sign In
            </button>

            <div className="text-center mt-4 text-gray-500">
              Don't have an account?{" "}
              <a href="/register" className="text-pink-600 hover:underline">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderIpErrorModal = () => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        {/* Modal Container */}
        <div className="relative bg-white rounded-lg shadow-2xl p-6 w-full max-w-lg mx-4 sm:mx-auto transform transition-all ease-in-out duration-300">
          {/* Warning Icon and Close Button */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2 text-red-600">
              <AiOutlineWarning className="text-3xl" />
              <h2 className="text-2xl font-bold">Warning</h2>
            </div>
            <button
              onClick={() => setIpErrorModal(false)}
              className="text-gray-400 text-red-600"
            >
              <span className="text-2xl font-bold">&times;</span>
            </button>
          </div>

          {/* Error Message */}
          <p className="text-lg text-gray-700 mb-6">
            You device is not registered , please contact to administartor.
          </p>

          {/* Action Buttons */}
          <div className="flex justify-end">
            <button
              onClick={() => setIpErrorModal(false)}
              className="px-5 py-2 text-white bg-red-600 rounded-lg shadow hover:bg-red-700 transition duration-300 focus:ring-4 focus:ring-red-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderLoginForm()}
      {ipErrorModal && renderIpErrorModal()}
    </>
  );
};

export default LoginPage;

