import React, { useEffect, useState, useContext } from "react";
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
// import { DataContext } from "../../Context/DataContext";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";
// import LoadingAnimation from "../../components/Loading/LoadingAnimation";

// Static data

const staticStores = [
  { StoreID: 1, StoreName: "Python & SQL Server: Bulk Loading Data" },
  { StoreID: 2, StoreName: "Terraform Azure: SQL Server VM" },
  { StoreID: 3, StoreName: "Terraform Azure: Tests" },
];

const staticFeedbacks = [
  {
    FeedBackID: 1,
    OrderNumber: "ORD001",
    CustomerName: "Hallie Warner",
    ItemName: "Python & SQL Server: Bulk Loading Data",
    CreatedAt: "2023-07-12T10:30:00Z",
    ReceivedDocuments: true,
    InstallationSuccessful: true,
    Remarks: "Well-structured course with useful examples.",
    OverallRating: 5,
  },
  {
    FeedBackID: 1,
    OrderNumber: "ORD002",
    CustomerName: "Raven McCann",
    ItemName: "Terraform Azure: Tests",
    CreatedAt: "2023-07-25T10:30:00Z",
    ReceivedDocuments: true,
    InstallationSuccessful: true,
    Remarks: "Clear instruction, but more case studies would help.",
    OverallRating: 4,
  },
  {
    FeedBackID: 1,
    OrderNumber: "ORD003",
    CustomerName: "Heath Goodwin",
    ItemName: "Terraform Azure: SQL Server VM",
    CreatedAt: "2023-08-02T10:30:00Z",
    ReceivedDocuments: true,
    InstallationSuccessful: true,
    Remarks: "Great Videos! I have gained alot of knowledge.",
    OverallRating: 5,
  },
  {
    FeedBackID: 1,
    OrderNumber: "ORD004",
    CustomerName: "Arya Sloan",
    ItemName: "Python & SQL Server: Bulk Loading Data",
    CreatedAt: "2023-08-29T10:30:00Z",
    ReceivedDocuments: true,
    InstallationSuccessful: true,
    Remarks: "Interactive, though some topics needed more depth.",
    OverallRating: 4,
  },

  {
    FeedBackID: 1,
    OrderNumber: "ORD005",
    CustomerName: "Ricardo Marin",
    ItemName: "Terraform Azure: Tests",
    CreatedAt: "2023-09-19T10:30:00Z",
    ReceivedDocuments: true,
    InstallationSuccessful: true,
    Remarks: "Informative, I love the explanations.",
    OverallRating: 5,
  },

  // Add more static feedback objects here...
];

const FeedbackComponent = () => {
  const [feedbacks, setFeedbacks] = useState(staticFeedbacks); // Feedback data
  const [rating, setRating] = useState(0); // Rating state
  const [currentPage, setCurrentPage] = useState(1); // Current page

  const [selectedStore, setSelectedStore] = useState("");
  const [value, setValue] = useState({
    startDate: "",
    endDate: "",
  });

  const pageSize = 9;
  const totalItems = staticFeedbacks.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const handleRating = (star) => {
    setRating(star);
  };

  // Handle pagination
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginatedFeedbacks = feedbacks.slice(
    (currentPage - 1) * pageSize,

    currentPage * pageSize
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="main-container">
      <div className="body-container">
        <h2 className="heading">FeedBacks</h2>
      </div>
      <hr className="border-t border-gray-300 mt-4 mb-6" />
      <div className="flex flex-wrap justify-end gap-2 mt-2">
        {/* Container for Combo box */}
        <div className="combobox-container flex items-center">
          <Combobox value={selectedStore} onChange={setSelectedStore}>
            <div className="combobox-wrapper h-[40px]">
              <Combobox.Input
                className="combobox-input w-full h-full"
                displayValue={(store) => store?.StoreName || "Select Course"}
                placeholder="Select CourseName"
              />
              <Combobox.Button className="combobox-button">
                <ChevronUpDownIcon
                  className="combobox-icon"
                  aria-hidden="true"
                />
              </Combobox.Button>
              <Combobox.Options className="combobox-options">
                {/* Add "Select CourseID" option */}
                <Combobox.Option
                  key="select-store-id"
                  className={({ active }) =>
                    active ? "combobox-option-active" : "combobox-option"
                  }
                  value={{ StoreID: null, StoreName: "Select CourseID" }}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={
                          selected
                            ? "combobox-option-text font-semibold"
                            : "combobox-option-text font-normal"
                        }
                      >
                        Select CourseID
                      </span>
                      {selected && (
                        <span
                          className={
                            active
                              ? "combobox-option-selected-icon active-selected-icon"
                              : "combobox-option-selected-icon"
                          }
                        >
                          <CheckIcon
                            className="combobox-check-icon"
                            aria-hidden="true"
                          />
                        </span>
                      )}
                    </>
                  )}
                </Combobox.Option>

                {/* Render all store options */}
                {staticStores.map((store) => (
                  <Combobox.Option
                    key={store.StoreID}
                    className={({ active }) =>
                      active ? "combobox-option-active" : "combobox-option"
                    }
                    value={store}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={
                            selected
                              ? "combobox-option-text font-semibold"
                              : "combobox-option-text font-normal"
                          }
                        >
                          {store.StoreName}
                        </span>
                        {selected && (
                          <span
                            className={
                              active
                                ? "combobox-option-selected-icon active-selected-icon"
                                : "combobox-option-selected-icon"
                            }
                          >
                            <CheckIcon
                              className="combobox-check-icon"
                              aria-hidden="true"
                            />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </div>
          </Combobox>
        </div>

        {/* Container for Date Pickers */}
        <div className="flex justify-center items-center gap-4 w-full p-2 sm:w-auto md:w-80 text-sm leading-6">
          <div className="border-solid border-gray-400 w-full border-[1px] rounded-lg">
            <Datepicker
              popoverDirection="down"
              showShortcuts={true}
              showFooter={true}
              placeholder="Start Date and End Date"
              primaryColor={"purple"}
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {paginatedFeedbacks.map((feedback) => (
          <div
            key={feedback.FeedBackID}
            className="bg-white p-4 rounded-lg shadow mb-4"
          >
            <div className="flex mb-2">
              <span className="text-gray-500 w-1/3 whitespace-normal text-base sm:text-sm md:text-xs">
                Customer Name
              </span>
              <span className="text-gray-900 w-2/3 flex items-center whitespace-normal text-base sm:text-sm md:text-xs">
                <span className="pr-8">:</span>
                <span>{feedback.CustomerName}</span>
              </span>
            </div>

            <div className="flex mb-2">
              <span className="text-gray-500 w-1/3 text-base sm:text-sm md:text-xs">
                Course Name
              </span>
              <span className="text-gray-900 w-2/3 flex items-center text-base sm:text-sm md:text-xs">
                <span className="pr-8">:</span>
                <span>{feedback.ItemName}</span>
              </span>
            </div>

            <div className="flex mb-2">
              <span className="text-gray-500 w-1/3 text-base sm:text-sm md:text-xs">
                Feedback Date
              </span>
              <span className="text-gray-900 w-2/3 text-base sm:text-sm md:text-xs">
                <span className="pr-8">:</span>
                {new Date(feedback.CreatedAt).toLocaleDateString()}
              </span>
            </div>

            <div className="flex mb-2 items-center">
              <span className="text-gray-500 w-1/3 text-base sm:text-sm md:text-xs">
                Video Lectures
              </span>
              <span className="text-gray-900 w-2/3 flex items-center text-base sm:text-sm md:text-xs">
                <span className="pr-8">:</span>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="hidden"
                    // onChange={handleCheckboxChange}
                    checked={feedback.ReceivedDocuments}
                  />
                  <span
                    className={`w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center
                                ${
                                  feedback.ReceivedDocuments
                                    ? "bg-green-500"
                                    : "bg-white"
                                } transition-colors duration-200`}
                  >
                    {feedback.ReceivedDocuments && (
                      <span className="text-white">✓</span>
                    )}
                  </span>
                </label>
              </span>
            </div>

            {/* <div className="flex mb-2 items-center">
              <span className="text-gray-500 w-1/2 text-base sm:text-sm md:text-xs">
                Warranty Card
              </span>
              <span className="text-gray-900 w-1/2 flex items-center text-base sm:text-sm md:text-xs">
                <span className="pr-8">:</span>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="hidden"
                    // onChange={handleCheckboxChange}
                    checked={feedback.ReceivedWarrantyCard}
                  />
                  <span
                    className={`w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center
                                ${
                                  feedback.ReceivedWarrantyCard
                                    ? "bg-green-500"
                                    : "bg-white"
                                } transition-colors duration-200`}
                  >
                    {feedback.ReceivedWarrantyCard && (
                      <span className="text-white">✓</span>
                    )}
                  </span>
                </label>
              </span>
            </div> */}

            <div className="flex mb-2 items-center">
              <span className="text-gray-500 w-1/3 text-base sm:text-sm md:text-xs">
                Assignments
              </span>
              <span className="text-gray-900 w-2/3 flex items-center text-base sm:text-sm md:text-xs">
                <span className="pr-8">:</span>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="hidden"
                    // onChange={handleCheckboxChange}
                    checked={feedback.InstallationSuccessful}
                  />
                  <span
                    className={`w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center
                                ${
                                  feedback.InstallationSuccessful
                                    ? "bg-green-500"
                                    : "bg-white"
                                } transition-colors duration-200`}
                  >
                    {feedback.InstallationSuccessful && (
                      <span className="text-white">✓</span>
                    )}
                  </span>
                </label>
              </span>
            </div>

            <div className="flex mb-2">
              <span className="text-gray-500 w-1/3 text-base sm:text-sm md:text-xs">
                Comments
              </span>
              <span>:</span>
              <div className="pl-8 text-gray-900 w-2/3 text-base sm:text-sm md:text-xs">
                {feedback.Remarks}
              </div>
            </div>

            <div className="flex mb-2 items-center">
              <span className="text-gray-500 w-1/3 text-base sm:text-sm md:text-xs">
                Rating
              </span>
              <span className="text-gray-900 w-2/3 flex items-center text-base sm:text-sm md:text-xs">
                <span className="pr-8">:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer text-2xl transition-colors duration-200 ${
                      star <= feedback.OverallRating
                        ? "text-yellow-500"
                        : "text-gray-400"
                    }`}
                    onClick={() => handleRating(star)}
                  >
                    ★
                  </span>
                ))}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4 items-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-2 rounded ${
            currentPage === 1
              ? "bg-gray-200"
              : "inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
          } transition-colors`}
        >
          Previous
        </button>

        {/* Displaying current page and total pages */}
        <span className="text-gray-500 mx-2">
          {`Page ${currentPage} of ${totalPages}`}
        </span>

        {/* Displaying total feedbacks count */}
        <span className="text-gray-500 mx-2">
          {`Total Feedbacks: ${totalItems}`}
        </span>

        {/* Displaying per page count */}
        <span className="text-gray-500 mx-2">
          {`Showing ${feedbacks.length} per page`}{" "}
          {/* Length of feedbacks array to show per page count */}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-200"
              : "inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          } transition-colors`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FeedbackComponent;
