// import React, { useState, useEffect } from "react";
// import text from "../../assets/careers/text.png";
// import img from "../../assets/careers/img2.png";
// import { FaLocationDot } from "react-icons/fa6";
// import { BsStopwatch } from "react-icons/bs";
// import { FaBookmark } from "react-icons/fa";
// import { useGetAllJobQuery } from "../../redux/Api/jobApi"; 

// export const Innovate = () => {
//   const [searchTerm, setSearch] = useState("");
//   const [sort, setSortOrder] = useState("");
//   const [location, setLocation] = useState("");
//   const { data: jobsData, isLoading, isError } = useGetAllJobQuery({ searchTerm, sort}, {
//     refetchOnMountOrArgChange: true, // Refetch when params change
//   });
//   console.log(jobsData)

//   const [selectedJob, setSelectedJob] = useState(null);

//   useEffect(() => {
//     if (jobsData?.data?.result?.length > 0) {
//       setSelectedJob(jobsData.data.result[0]);
//     }
//   }, [jobsData]);
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading job data.</div>;
//   }

//   const handleLocation = (value) => {
//     console.log("Selected Location:", value);
//     setLocation(value);
//   };

//   const handleShortChange = (value) => {
//     console.log(value);
//     setSortOrder(value); // Update the selected filter type (sorting)
//   };

//   return (
//     <div className="pb-11 px-4 lg:px-0">
//       <div className="flex justify-center pt-20">
//         <img className="w-96" src={text} alt="" />
//       </div>
//       <div className="relative">
//         <img src={img} alt="" />
//         <div className="w-full md:px-20 absolute bottom-0">
//           <div className="bg-[#35353533] text-2xl md:px-20 px-4 border-2 border-gray-500 mt-7 backdrop-blur-sm text-white md:py-20 py-10 rounded-xl">
//             <h2 className="text-xl text-center font-semibold">
//               Job Search <span className="text-blue-400">🔍</span>
//             </h2>

//             {/* Search Inputs */}
//             <div className="grid md:grid-cols-3 gap-4 mt-6">
//               <input
//                 type="text"
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Keyword"
//                 className="bg-transparent border-b border-gray-500 text-white px-4 py-2 focus:outline-none focus:border-blue-500"
//               />
//               {/* location select field */}
//               <select onChange={handleLocation} className="bg-transparent border-b border-gray-500 text-white px-4 py-2 focus:outline-none focus:border-blue-500">
//                 {jobsData?.data?.result?.map((job, index) => (
//                   <option className=" bg-[#110c5e]" key={index} value={job.location}>
//                     {job.location}
//                   </option>
//                 ))}
//               </select>
//                 {/* sort field */}
//               <select onChange={(e) => handleShortChange(e.target.value)} className="bg-transparent border-b border-gray-500 text-white px-4 py-2 focus:outline-none focus:border-blue-500">
//                 <option value="createdAt">Location sorted +</option>
//                 <option value="-createdAt">Location sorted -</option>
//               </select>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center pt-11">
//               <button className="mt-6 bg-[#2E4CB9] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="lg:px-20">
//         <h1 className="text-2xl font-semibold mb-2 text-white pb-4 pt-11">
//           {jobsData?.data?.result?.length} Jobs Found
//         </h1>
//         <div className="grid lg:grid-cols-2 gap-6">
//           {/* Job List Section */}
//           <div className="bg-[#35353533] text-2xl border-l-2 border-t-2 border-b-2 border-gray-500 backdrop-blur-sm text-white p-3 rounded-xl h-[1000px] overflow-y-auto custom-scrollbar">
//             {jobsData?.data?.result?.map((job) => (
//               <div
//                 key={job._id}
//                 onClick={() => setSelectedJob(job)}
//                 className={`p-4 rounded-lg border bg-[#ffffff15] backdrop-blur-sm text-white ${
//                   selectedJob?._id === job._id
//                     ? "border-blue-500 bg-[#1E3050]"
//                     : "border-gray-600"
//                 } cursor-pointer mb-3 hover:border-blue-500 transition`}
//               >
//                 <h3 className="text-lg font-semibold underline mb-2">
//                   {job.title}
//                 </h3>
//                 <p className="text-sm text-gray-400 flex gap-2 items-center">
//                   <FaLocationDot className=" text-blue-400" /> {job.location}
//                 </p>
//                 <p className="text-sm text-gray-400 flex gap-2 items-center">
//                   <BsStopwatch className=" text-blue-400" />{" "}
//                   {new Date(job.createdAt).toLocaleDateString()}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Job Details Section */}
//           {selectedJob && (
//             <div className="bg-[#1a1a1a4d] px-5 border-l-2 border-t-2 border-b-2 border-gray-500 backdrop-blur-sm text-white p-3 rounded-xl h-[1000px] overflow-y-auto custom-scrollbar">
//               <h2 className="text-xl font-semibold">{selectedJob.title}</h2>
//               <p className="text-gray-400 mt-1 flex justify-between mt-5">
//                 <div className="flex gap-2 items-center">
//                   <FaLocationDot className="text-lg text-blue-400" />{" "}
//                   {selectedJob.location}
//                 </div>{" "}
//                 <div className="flex gap-2 items-center">
//                   <BsStopwatch className="text-lg text-blue-400" />{" "}
//                   {new Date(selectedJob.createdAt).toLocaleDateString()}{" "}
//                 </div>
//                 <div className="flex gap-2 items-center">
//                   <FaBookmark className="text-lg text-blue-400" /> Job ID:{" "}
//                   {selectedJob._id}
//                 </div>
//               </p>

//               {selectedJob.description && (
//                 <>
//                   <h3 className="mt-4 text-lg font-semibold text-blue-400">
//                     About The Opportunity
//                   </h3>
//                   <p
//                     className="text-sm text-gray-300"
//                     dangerouslySetInnerHTML={{
//                       __html: selectedJob.description,
//                     }}
//                   />
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";
import text from "../../assets/careers/text.png";
import img from "../../assets/careers/img2.png";
import { FaLocationDot } from "react-icons/fa6";
import { BsStopwatch } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
const jobList = [
  {
    id: "R_042689",
    title: "Network Operations Technician",
    location: "Location",
    posted: "Posted 3 Days Ago",
    description: `Join BETS for a chance to be part of an innovative IT team focused on optimizing and securing business networks. Dive into a role where technology meets practical application in a supportive, forward-thinking environment.`,
    responsibilities: [
      "Monitor and maintain network performance.",
      "Conduct system upgrades and security configurations.",
      "Provide technical support and troubleshoot issues.",
      "Collaborate with security teams and vendors for network efficiency.",
    ],
    requirements: [
      "5+ years in Network Administration or related field.",
      "Strong knowledge of networking protocols and diagnostic tools.",
      "Relevant degrees and certifications (E.g., CCNA, CCNP).",
    ],
    salary: "$70,000 - $100,000",
    benefits: [
      "Full benefits package including health insurance and 401(k).",
      "Professional development and advancement opportunities.",
    ],
  },
  {
    id: "R_042690",
    title: "Position/Job Title",
    location: "Location",
    posted: "Posted 3 Days Ago",
  },
  {
    id: "R_042691",
    title: "Position/Job Title",
    location: "Location",
    posted: "Posted 3 Days Ago",
  },
  {
    id: "R_042692",
    title: "Position/Job Title",
    location: "Location",
    posted: "Posted 3 Days Ago",
  },
  {
    id: "R_042693",
    title: "Position/Job Title",
    location: "Location",
    posted: "Posted 3 Days Ago",
  },
  {
    id: "R_042693",
    title: "Position/Job Title",
    location: "Location",
    posted: "Posted 3 Days Ago",
  },
  {
    id: "R_042693",
    title: "Position/Job Title",
    location: "Location",
    posted: "Posted 3 Days Ago",
  },
  {
    id: "R_042693",
    title: "Position/Job Title",
    location: "Location",
    posted: "Posted 3 Days Ago",
  },
  {
    id: "R_042693",
    title: "Position/Job Title",
    location: "Location",
    posted: "Posted 3 Days Ago",
  },
];
export const Innovate = () => {
  const [selectedJob, setSelectedJob] = useState(jobList[0]);

  return (
    <div className="pb-11 px-4 lg:px-0">
      <div className="flex justify-center pt-20 ">
        <img className="w-96" src={text} alt="" />
      </div>
      <div className="relative">
        <img src={img} alt="" />
        <div className="w-full md:px-20 absolute bottom-0">
          <div className="bg-[#35353533]  text-2xl  md:px-20 px-4  border-2 border-gray-500 mt-7 backdrop-blur-sm text-white md:py-20 py-10 rounded-xl">
            <h2 className="text-xl text-center font-semibold">
              Job Search <span className="text-blue-400">🔍</span>
            </h2>

            {/* Search Inputs */}
            <div className="grid md:grid-cols-3 gap-4 mt-6 ">
              <input
                type="text"
                placeholder="Keyword"
                className="bg-transparent border-b border-gray-500 text-white px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <select className="bg-transparent border-b border-gray-500 text-white px-4 py-2 focus:outline-none focus:border-blue-500">
                <option value="">All</option>
              </select>
              <select className="bg-transparent border-b border-gray-500 text-white px-4 py-2 focus:outline-none focus:border-blue-500">
                <option value="">All</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-11">
              <button className="mt-6 bg-[#2E4CB9] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-20">
        <h1 className="text-2xl font-semibold mb-2 text-white pb-4 pt-11">
          50 Jobs Found
        </h1>
        <div>
          <div className="grid lg:grid-cols-2 gap-6 ">
            {/* Job List Section */}
            <div className="bg-[#35353533] text-2xl border-l-2 border-t-2 border-b-2 border-gray-500  backdrop-blur-sm text-white p-3 rounded-xl h-[1000px] overflow-y-auto custom-scrollbar">
              {jobList.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`p-4 rounded-lg border bg-[#ffffff15] backdrop-blur-sm text-white  ${
                    selectedJob.id === job.id
                      ? "border-blue-500 bg-[#1E3050]"
                      : "border-gray-600"
                  } cursor-pointer mb-3 hover:border-blue-500 transition`}
                >
                  <h3 className="text-lg font-semibold underline mb-2">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-400 flex gap-2 items-center">
                    <FaLocationDot className=" text-blue-400" /> {job.location}
                  </p>
                  <p className="text-sm text-gray-400 flex gap-2 items-center">
                    <BsStopwatch className=" text-blue-400" /> {job.posted}
                  </p>
                </div>
              ))}
            </div>

            {/* Job Details Section */}
            <div className="bg-[#1a1a1a4d] px-5 border-l-2 border-t-2 border-b-2 border-gray-500  backdrop-blur-sm text-white p-3 rounded-xl h-[1000px] overflow-y-auto custom-scrollbar">
              <h2 className="text-xl font-semibold">{selectedJob.title}</h2>
              <p className="text-gray-400 mt-1 flex justify-between mt-5">
                <div className="flex gap-2 items-center">
                  <FaLocationDot className="text-lg text-blue-400" />{" "}
                  {selectedJob.location}
                </div>{" "}
                <div className="flex gap-2 items-center">
                <BsStopwatch className="text-lg text-blue-400" />{" "}
                {selectedJob.posted}{" "}
                </div>
                <div className="flex gap-2 items-center">
                <FaBookmark className="text-lg text-blue-400" /> Job ID:{" "}
                {selectedJob.id}
                </div>
              </p>

              {selectedJob.description && (
                <>
                  <h3 className="mt-4 text-lg font-semibold text-blue-400">
                    About The Opportunity
                  </h3>
                  <p className="text-sm text-gray-300">
                    {selectedJob.description}
                  </p>
                </>
              )}

              {selectedJob.responsibilities && (
                <>
                  <h3 className="mt-4 text-lg font-semibold text-blue-400">
                    Key Responsibilities
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-300">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </>
              )}

              {selectedJob.requirements && (
                <>
                  <h3 className="mt-4 text-lg font-semibold text-blue-400">
                    What You Bring To The Table
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-300">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </>
              )}

              {selectedJob.salary && (
                <>
                  <h3 className="mt-4 text-lg font-semibold text-blue-400">
                    Compensation & Benefits
                  </h3>
                  <p className="text-sm text-gray-300">
                    💰 Salary: {selectedJob.salary}
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-300">
                    {selectedJob.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

