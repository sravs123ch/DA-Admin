// import React, { useState } from "react";
// import axios from "axios";

// const BatchAdd = ({ handleSave, handleClose }) => {
//   const [formData, setFormData] = useState({
//     CourseId: "",
//     BatchCode: "",
//     BatchName: "",
//   });
//   const batches = ["Batch 1", "Batch 2", "Batch 3", "Batch 4"];
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // const handleSubmit = () => {
//   //   handleSave(formData);
//   // };


// const handleSubmit = async () => {
//   try {
//     // Make POST request to the createBatch API with formData
//     const response = await axios.post(
//       "https://da-backend-7smk.onrender.com/api/Batchs/createBatch",
//       formData,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     // Handle success response
//     alert("Batch created successfully!");
//     console.log("Response:", response.data);

//     // Call handleSave with formData if needed
//     handleSave(formData);
//   } catch (error) {
//     // Handle error response
//     console.error("Error creating batch:", error);
//     alert("An error occurred while creating the batch.");
//   }
// };


//   return (
//     <div className="main-container">
//       <div className="mt-6 p-6 rounded-lg">
//         <h2 className="heading mb-4">Add Batch</h2>
//         <div className="flex justify-center">
//           <div className="p-4 w-3/4 ">

//           <div className="flex items-center gap-4">
//               <label className="w-1/3 text-gray-700" htmlFor="name">
//                 Course ID
//               </label>
//               <input
//                 type="text"
//                 name="CourseId"
//                 id="CourseId"
//                 value={formData.CourseId}
//                 onChange={handleInputChange}
//                 className="p-1 mt-2 mb-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>

//             <div className="flex items-center gap-4">
//               <label className="w-1/3 text-gray-700 mb-2" htmlFor="BatchCode">
//                 Batch Code
//               </label>
//               <select
//                 name="BatchCode"
//                 id="BatchCode"
//                 value={formData.BatchCode}
//                 onChange={handleInputChange}
//                 className="p-1 mt-2 mb-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               >
//                 <option value="">Select Batch</option>
//                 {batches.map((batch) => (
//                   <option key={batch} value={batch}>
//                     {batch}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex items-center gap-4">
//               <label className="w-1/3 text-gray-700" htmlFor="BatchName">
//                 Batch Name
//               </label>
//               <input
//                 type="text"
//                 name="BatchName"
//                 id="BatchName"
//                 value={formData.BatchName}
//                 onChange={handleInputChange}
//                 className="p-1 mt-2 mb-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>

//             <div className="mt-10 flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
//               <button
//                 className="bg-gray-200 px-4 py-2 rounded shadow w-full sm:w-auto"
//                 onClick={handleClose}
//               >
//                 Close
//               </button>
//               <button
//                 className="bg-[#003375] text-white px-4 py-2 rounded shadow w-full sm:w-auto"
//                 onClick={handleSubmit}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BatchAdd;


// import React, { useState,useEffect } from "react";
// import axios from "axios";
// import { Combobox } from "@headlessui/react";
// import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/24/solid";
// import { useNavigate} from "react-router-dom";
// import { toast } from 'react-toastify';


// const BatchAdd = ({ handleSave, handleClose }) => {
//   const [formData, setFormData] = useState({
//     CourseId: "",
//     BatchCode: "",
//     BatchName: "",
//   });

//   // const courses = [
//   //   { id: "PYTHON-1", name: "Python" },
//   //   { id: "AZURE-1", name: "Azure" }
//   // ];
//   const [courses, setCourses] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
  
//   const batches = ["Batch 1", "Batch 2", "Batch 3", "Batch 4"];
//   const [error, setError] = useState(false);
//     const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     const { BatchCode, BatchName, CourseId } = formData;
//     const dataToSend = { BatchCode, BatchName, CourseId }; // Ensuring only required fields are sent

//     try {
//       // Make POST request to the createBatch API with only required data
//       const response = await axios.post(
//         "https://da-backend-7smk.onrender.com/api/Batchs/createBatch",
//         dataToSend,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

     
//       console.log("Response:", response.data);
//       navigate('/batches');
//       // Call handleSave with cleaned formData
//       handleSave(dataToSend);
//     } catch (error) {
//       // Handle error response
//       console.error("Error creating batch:", error);
     
//     }
//   };

//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [query, setQuery] = useState("");

//   // Filter courses based on query
//   // const filteredCourses = query === ""
//   //   ? courses
//   //   : courses.filter(course =>
//   //       course.name.toLowerCase().includes(query.toLowerCase())
//   //     );

//       useEffect(() => {
//         const fetchCourses = async () => {
//           try {
//             const response = await axios.get('https://da-backend-7smk.onrender.com/api/courses/getAllCourses');
//             setCourses(response.data.courses); // Set fetched courses to state
//             setFilteredCourses(response.data.courses); // Optionally set the initial filtered courses
//           } catch (error) {
//             toast.error("Failed to fetch courses.");
//           }
//         };
      
//         fetchCourses();
//       }, []);
      

//   return (
//     <div className="main-container">
//       <div className="mt-0 p-6 rounded-lg">
//         <h2 className="heading mb-4">Add Batch</h2>
//         <div className="flex justify-center">
//           <div className="p-4 w-3/4 ">
//             {/* <div className="flex items-center gap-4">
//               <label className="w-1/3 text-gray-700" htmlFor="CourseId">
//                 Course ID
//               </label>
//               <input
//                 type="text"
//                 name="CourseId"
//                 id="CourseId"
//                 value={formData.CourseId}
//                 onChange={handleInputChange}
//                 className={`p-1 mt-2 mb-1 w-full border rounded-md ${
//                   error ? "border-red-500" : "border-gray-400"
//                 }`}
//               />
//             </div> */}


// <div className="flex items-center gap-4 mb-2">
//       <label className="w-1/3 text-gray-700" htmlFor="CourseId">
//         Course ID
//       </label>
//       <div className="w-full">
//         <Combobox as="div" value={selectedCourse} onChange={setSelectedCourse}>
//           <div className="relative">
//             <Combobox.Input
//               id="CourseId"
//               className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//               onChange={(event) => setQuery(event.target.value)}
//               displayValue={(course) => course ? course.CourseId : ''} // Display CourseId in the input
//               placeholder="Select a course"
//             />
//             <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//               <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//             </Combobox.Button>

//             <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//               {filteredCourses.length > 0 ? (
//                 filteredCourses.map((course) => (
//                   <Combobox.Option
//                     key={course.CourseId} // Use CourseId as the unique key
//                     value={course} // Use the entire course object for the selected value
//                     className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//                   >
//                     <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                       {course.CourseId} {/* Display CourseId in the options */}
//                     </span>
//                     <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                       <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                     </span>
//                   </Combobox.Option>
//                 ))
//               ) : (
//                 <div className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-500">
//                   No results found
//                 </div>
//               )}
//             </Combobox.Options>
//           </div>
//         </Combobox>
//       </div>
//     </div>


//             <div className="flex items-center gap-4">
//               <label className="w-1/3 text-gray-700 mb-2" htmlFor="BatchCode">
//                 Batch Code
//               </label>
//               <input
//                 name="BatchCode"
//                 id="BatchCode"
//                 value={formData.BatchCode}
//                 onChange={handleInputChange}
//                 className={`p-1 mt-2 mb-1 w-full border rounded-md ${
//                   error ? "border-red-500" : "border-gray-400"
//                 }`}
//               />
             
//             </div>

//             <div className="flex items-center gap-4">
//               <label className="w-1/3 text-gray-700" htmlFor="BatchName">
//                 Batch Name
//               </label>
//               <input
//                 type="text"
//                 name="BatchName"
//                 id="BatchName"
//                 value={formData.BatchName}
//                 onChange={handleInputChange}
//                 className={`p-1 mt-2 mb-1 w-full border rounded-md ${
//                   error ? "border-red-500" : "border-gray-400"
//                 }`}
//               />
//             </div>

//             <div className="mt-10 flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
//               <button
//                 className="bg-gray-200 px-4 py-2 rounded shadow w-full sm:w-auto"
//                 onClick={handleClose}
//               >
//                 Close
//               </button>
//               <button
//                 className="bg-[#003375] text-white px-4 py-2 rounded shadow w-full sm:w-auto"
//                 onClick={handleSubmit}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BatchAdd;



import React, { useState,useEffect } from "react";
import axios from "axios";
import { Combobox } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/24/solid";
import { useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';

const BatchAdd = ({ handleSave, handleClose }) => {
  const [formData, setFormData] = useState({
    CourseId: "", // Store only CourseId
    BatchCode: "",
    BatchName: "",
  });

  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  
  const [selectedCourse, setSelectedCourse] = useState(null); // Store the selected course object
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://da-backend-7smk.onrender.com/api/courses/getAllCourses');
        setCourses(response.data.courses);
        setFilteredCourses(response.data.courses);
      } catch (error) {
        toast.error("Failed to fetch courses.");
      }
    };
    
    fetchCourses();
  }, []);

    const [error, setError] = useState(false);
    const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const { BatchCode, BatchName, CourseId } = formData;

    // Ensure CourseId is present in formData
    if (!CourseId) {
      setError(true); // Set error if CourseId is missing
      return;
    }

    const dataToSend = { BatchCode, BatchName, CourseId }; // Send only required data

    try {
      const response = await axios.post(
        "https://da-backend-7smk.onrender.com/api/Batchs/createBatch",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      navigate('/batches');
      handleSave(dataToSend); // Call handleSave with cleaned formData
    } catch (error) {
      console.error("Error creating batch:", error);
    }
  };

  return (
    <div className="main-container">
      <div className="mt-0 p-6 rounded-lg">
        <h2 className="heading mb-4">Add Batch</h2>
        <div className="flex justify-center">
          <div className="p-4 w-3/4">
            {/* <div className="flex items-center gap-4 mb-2">
              <label className="w-1/3 text-gray-700" htmlFor="CourseId">
                Course ID
              </label>
              <div className="w-full">
                <Combobox as="div" value={selectedCourse} onChange={(course) => {
                  setSelectedCourse(course); // Set the selected course object
                  setFormData((prevData) => ({
                    ...prevData,
                    CourseId: course?.CourseId || "", // Only update CourseId
                  }));
                }}>
                  <div className="relative">
                    <Combobox.Input
                      id="CourseId"
                      className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      onChange={(event) => setQuery(event.target.value)}
                      displayValue={(course) => course ? course.CourseId : ''}
                      placeholder="Select a course"
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Combobox.Button>

                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                          <Combobox.Option
                            key={course.CourseId}
                            value={course}
                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
                          >
                            <span className="block truncate font-normal group-data-[selected]:font-semibold">
                              {course.CourseId}
                            </span>
                            <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          </Combobox.Option>
                        ))
                      ) : (
                        <div className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-500">
                          No results found
                        </div>
                      )}
                    </Combobox.Options>
                  </div>
                </Combobox>
              </div>
            </div> */}

<div className="flex items-center gap-4 mb-2">
  <label className="w-1/3 text-gray-700" htmlFor="CourseId">
    Course ID
  </label>
  <div className="w-full">
    <Combobox
      as="div"
      value={selectedCourse}
      onChange={(course) => {
        setSelectedCourse(course); // Set the selected course object
        setFormData((prevData) => ({
          ...prevData,
          CourseId: course?.CourseId || "", // Update CourseId, but leave CourseName for display
        }));
      }}
    >
      <div className="relative">
        <Combobox.Input
          id="CourseId"
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(course) => course ? course.Name : ''} // Display the CourseName in the input field
          placeholder="Select a course"
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Combobox.Option
                key={course.CourseId}
                value={course}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
              >
                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                  {course.Name} {/* Display CourseName in the options */}
                </span>
                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </Combobox.Option>
            ))
          ) : (
            <div className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-500">
              No results found
            </div>
          )}
        </Combobox.Options>
      </div>
    </Combobox>
  </div>
</div>


            <div className="flex items-center gap-4">
              <label className="w-1/3 text-gray-700 mb-2" htmlFor="BatchCode">
                Batch Code
              </label>
              <input
                name="BatchCode"
                id="BatchCode"
                value={formData.BatchCode}
                onChange={handleInputChange}
                className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? "border-red-500" : "border-gray-400"}`}
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-1/3 text-gray-700" htmlFor="BatchName">
                Batch Name
              </label>
              <input
                type="text"
                name="BatchName"
                id="BatchName"
                value={formData.BatchName}
                onChange={handleInputChange}
                className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? "border-red-500" : "border-gray-400"}`}
              />
            </div>

            <div className="mt-10 flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-gray-200 px-4 py-2 rounded shadow w-full sm:w-auto"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                className="bg-[#003375] text-white px-4 py-2 rounded shadow w-full sm:w-auto"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchAdd;
