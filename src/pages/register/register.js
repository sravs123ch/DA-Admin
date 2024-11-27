import React, { useState } from "react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { FaHandPointRight } from "react-icons/fa";
import axios from "axios";
import { routeNames } from "../../Constants/constants";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    deviceId: "123e4567e89b12d3a456426614174019",
  });
  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (formData.password.length < 6)
      errors.password = "Password must be at least 6 characters long";
    return errors;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const validationErrors = validate();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setError(validationErrors);
  //     return;
  //   }

  //   setIsSubmitting(true);
  //   setError({});

  //   const formDataObj = new FormData();
  //   for (const key in formData) {
  //     formDataObj.append(key, formData[key]);
  //   }

  //   try {
  //      await axios.post("https://da-backend-7smk.onrender.com/api/auth/register",formDataObj, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     alert("Registration successful!");
  //     navigate(routeNames.login);
  //   } catch (error) {
  //     alert("An error occurred during registration.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }
  
    setIsSubmitting(true);
    setError({});
  
    try {
      // Send JSON data instead of FormData
      await axios.post(
        "https://da-backend-7smk.onrender.com/api/auth/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      alert("Registration successful!");
      navigate(routeNames.login);
    } catch (error) {
      alert("An error occurred during registration.");
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-customPink">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 hidden md:flex flex-col items-start justify-evenly bg-black text-white p-8 md:rounded-l-lg">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Learning Community
          </h2>
          <p className="text-base mb-6">
            Access courses and resources to build skills at your own pace.
          </p>
          <div className="flex items-center space-x-3 text-lg font-semibold">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-text shadow-lg">
              Start your journey now
            </p>
            <FaHandPointRight className="text-yellow-500 text-2xl animate-pulse" />
          </div>
        </div>

        {/* Right Section (Form Section) */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="mb-4">
              <div className="flex items-center border rounded-md px-3">
                <FiUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-full py-2 outline-none"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              {error.username && (
                <p className="text-red-500 text-sm mt-1">{error.username}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <div className="flex items-center border rounded-md px-3">
                <FiMail className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full py-2 outline-none"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {error.email && (
                <p className="text-red-500 text-sm mt-1">{error.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <div className="flex items-center border rounded-md px-3">
                <FiLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full py-2 outline-none"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {error.password && (
                <p className="text-red-500 text-sm mt-1">{error.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </form>

          <div className="text-center mt-4 text-gray-500">
            Already have an account?{" "}
            <a href="/" className="text-pink-600 hover:underline">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
