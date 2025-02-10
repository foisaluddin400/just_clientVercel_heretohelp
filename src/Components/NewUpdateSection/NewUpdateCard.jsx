// import React, { useState } from 'react';
// import { useGetAllNewsQuery } from '../../redux/Api/newsApi';
// import { imageUrl } from '../../redux/Api/baseApi';
// import img from "../../assets/newUpdate/cover.jpg";

// export const NewUpdateCard = () => {
//   const { data: news, isLoading, isError } = useGetAllNewsQuery();
//   const [selectedNews, setSelectedNews] = useState(null);

//   if (isLoading) {
//     return <p className="text-center text-white py-20">Loading news...</p>;
//   }

//   if (isError || !news?.data?.result?.length) {
//     return <p className="text-center text-white py-20">No news available.</p>;
//   }

//   // Set default news on first render
//   if (!selectedNews) {
//     setSelectedNews(news.data.result[0]);
//   }

//   return (
//     <div className='max-w-7xl m-auto px-4 lg:px-0'>
//       <div className="">
//         <h1 className="text-2xl font-bold py-5">In The Press Center</h1>
//         {/* Details News */}
//         {selectedNews && (
//           <div className="lg:grid grid-cols-2 gap-5">
//             <div>
//               <img className="w-full rounded-3xl" src={`${imageUrl}/${selectedNews.news_image}`} alt={selectedNews.title} />
//             </div>
//             <div className="mt-6 lg:mt-0">
//               <h1 className="pb-5 font-bold md:text-4xl text-3xl">{selectedNews.title}</h1>
//               <p className="text-xl text-gray-400">{new Date(selectedNews.createdAt).toLocaleDateString()}</p>
//               <p className="py-5">{selectedNews.content.slice(0, 150)}...</p>
//               <p>{selectedNews.content}</p>
//               <h1 className="text-xl font-bold">Engage with Us</h1>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* All News */}
//       <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 py-20">
//         {news.data.result.map((article, index) => (
//           <div 
//             key={article._id || index} 
//             className="text-white rounded-md p-4 cursor-pointer" 
//             onClick={() => setSelectedNews(article)}
//           >
//             <img 
//               src={`${imageUrl}/${article.news_image}`} 
//               alt={article.title} 
//               className="w-full lg:h-40 md:h-60 h-96 object-cover rounded-md mb-4"
//             />
//             <p className="text-xs">
//               {new Date(article.createdAt).toLocaleDateString()} <span className="ml-2">{article.author}</span>
//             </p>
//             <h3 className="font-semibold text-xl mt-2">{article.title}</h3>
//             <p className="text-sm mt-2">{article.content.slice(0, 100)}...</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



import React from 'react'
import img1 from "../../assets/newUpdate/img1.png";
import img2 from "../../assets/newUpdate/img2.png";
import img3 from "../../assets/newUpdate/img3.png";
import img4 from "../../assets/newUpdate/img4.png";
import img5 from "../../assets/newUpdate/img5.png";
import img6 from "../../assets/newUpdate/img6.png";
import img7 from "../../assets/newUpdate/img7.png";
import img8 from "../../assets/newUpdate/img8.png";

export const NewUpdateCard = () => {
  const cardData = [
    {
      image: img1,
      title: "Structured Cabling Solutions",
      description: "Detailing Our Expertise In Deploying Structured Cabling Systems For Robust Network Infrastructure.",
      date: "October 28, 2024",
      source: "Yahoo! Finance"
    },
    {
      image: img2,
      title: "Technician At Work",
      description: "Capturing A Day In The Life Of Our Dedicated Technicians Using Technology To Improve Service Efficiency.",
      date: "October 28, 2024",
      source: "Yahoo! Finance"
    },
    {
      image: img3,
      title: "Digital Security Enhancements",
      description: "Highlighting Our Advancements In Digital Security, Protecting Data Across All Operations.",
      date: "October 28, 2024",
      source: "Yahoo! Finance"
    },
    {
      image: img4,
      title: "Server Room Management",
      description: "Showcasing Our State-Of-The-Art Server Room Operations, Optimized For Peak Performance.",
      date: "October 28, 2024",
      source: "Yahoo! Finance"
    },
    {
      image: img5,
      title: "Executive Team Strategy Session",
      description: "Our Leadership In Action, Planning The Next Big Steps In IT Development.",
      date: "October 28, 2024",
      source: "Yahoo! Finance"
    },
    {
      image: img6,
      title: "High-Tech Data Analysis",
      description: "Using Sophisticated Data Analysis Tools To Drive Business Intelligence And Outcomes.",
      date: "October 28, 2024",
      source: "Yahoo! Finance"
    },
    {
      image: img7,
      title: "Client Consultations",
      description: "Illustrating Our Commitment To Personalized Client Service And Solution Tailoring.",
      date: "October 28, 2024",
      source: "Yahoo! Finance"
    },
    {
      image: img8,
      title: "Global IT Conference Insights",
      description: "Sharing Insights From Global IT Conferences, Keeping Us At The Forefront Of Industry Developments.",
      date: "October 28, 2024",
      source: "Yahoo! Finance"
    }
  ];

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 py-20">
      {cardData.map((card, index) => (
        <div key={index} className=" text-white rounded-md ">
          <img src={card.image} alt={card.title} className="w-full lg:h-40 md:h-60 h-96 object-cover rounded-md mb-4"/>
          <p className="text-xs">{card.date} <span className="ml-2">{card.source}</span></p>
          <h3 className="font-semibold text-xl mt-2">{card.title}</h3>
          <p className="text-sm mt-2">{card.description}</p>
          <a href="#" className="text-blue-400 mt-4 inline-block">Go To Article &gt;</a>
        </div>
      ))}
    </div>
  );
};
