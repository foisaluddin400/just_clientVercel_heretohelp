// import React, { useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import Man from "../../assets/Home/man.png";
// import back from "../../assets/Home/back5.png";
// import { MdFormatQuote } from "react-icons/md";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { useGetReviewQuery } from "../../redux/Api/manageApi";
// import { FaUserCircle } from "react-icons/fa";
// export const ClientStories = () => {
//   const { data: reviewData } = useGetReviewQuery();

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handlePrev = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   const testimonials =
//     reviewData?.data?.result?.map((item) => ({
//       quote: item.review,
//       name: item.userName || item.user?.name || "Anonymous",
//       address: item.address || item.user?.address || "Unknown Location",
//       image: item.user?.image || null,
//     })) || [];

//   return (
//     <div className="text-white py-16 relative bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f]">
//       {/* Background Image */}

//       {/* Testimonial Section */}
//       <div className="">
//         <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">
//           Client Success Stories
//         </h2>

//         <div className="md:w-full md:max-w-6xl md:m-auto relative">
//           <div className="lg:flex justify-between items-center gap-4 sm:gap-8">
//             {/* Left Arrow Button */}
//             <div className="flex justify-end mb-4 lg:mb-0">
//               <div className="flex gap-3">
//                 <div>
//                   <button
//                     type="button"
//                     onClick={handlePrev}
//                     className="bg-[#DBE3EA] h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] flex text-black pt-[5px] sm:pt-[11px] text-sm sm:text-lg justify-center rounded-full shadow-lg hover:bg-blue-800 focus:outline-none"
//                   >
//                     <IoIosArrowBack />
//                   </button>
//                 </div>
//                 <div className=" lg:hidden">
//                   <button
//                     type="button"
//                     onClick={handleNext}
//                     className="bg-[#DBE3EA] h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] flex text-black pt-[5px] sm:pt-[11px] text-sm sm:text-lg justify-center rounded-full shadow-lg hover:bg-blue-800 focus:outline-none"
//                   >
//                     <IoIosArrowForward />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Carousel */}
//             <Carousel
//               selectedItem={currentSlide}
//               showArrows={false}
//               showThumbs={false}
//               showStatus={false}
//               showIndicators={false}
//               infiniteLoop={true}
//               autoPlay={false}
//               interval={5000}
//               stopOnHover={true}
//               onChange={(index) => setCurrentSlide(index)}
//             >
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="bg-[#c0c1da23] md:mx-auto flex items-center rounded-lg p-4 sm:p-8 shadow-lg"
//                   style={{
//                     width: "100%",
//                     height: "400px", // ✅ Fixed Height
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <div className="max-w-3xl mx-auto text-center">
//                     <p
//                       className="text-sm text-start sm:text-lg md:text-xl mb-4 sm:mb-6"
//                       style={{
//                         whiteSpace: "normal",
//                         wordBreak: "break-word",
//                       }}
//                     >
//                       "{testimonial.quote}"
//                     </p>
//                     <div className="grid grid-cols-2 items-center">
//                       <div className="flex gap-2 sm:gap-4 mt-4">
//                         <div>
//                           {testimonial.image ? (
//                             <img
//                               src={testimonial.image}
//                               alt={testimonial.name}
//                               className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full"
//                             />
//                           ) : (
//                             <FaUserCircle className="text-gray-400 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]" />
//                           )}
//                         </div>
//                         <div>
//                           <p className="font-bold text-base sm:text-lg">
//                             {testimonial.name}
//                           </p>
//                           <p className="text-xs sm:text-sm">
//                             {testimonial.address}
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex justify-end">
//                         <MdFormatQuote className="text-[100px] sm:text-[150px] md:text-[200px] text-[#5E75C7]" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Carousel>

//             {/* Right Arrow Button */}
//             <div className="hidden lg:block">
//               <button
//                 type="button"
//                 onClick={handleNext}
//                 className="bg-[#DBE3EA] h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] flex text-black pt-[5px] sm:pt-[11px] text-sm sm:text-lg justify-center rounded-full shadow-lg hover:bg-blue-800 focus:outline-none"
//               >
//                 <IoIosArrowForward />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Man from "../../assets/about/ff.png";
import back from "../../assets/Home/back5.png";
import { MdFormatQuote } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export const ClientStories = () => {
  const testimonials = [
    {
      quote:
        "They have been a lifesaver for our company. Their proactive approach to IT maintenance and support has significantly reduced our downtime, allowing us to focus on growing our business.",
      name: "Henry Jenkins",
      
      location: "Uk London",
      image: Man,
    },
    {
      quote:
        "Their team is phenomenal! They are quick, efficient, and deliver high-quality work every time. BETS has transformed our IT infrastructure, and we couldn't be happier!",
      name: "John Doe",
     
      location: "UK",
      image: Man,
    },
    {
      quote:
        "BETS has been an amazing partner. Their solutions are top-notch, and their support team is always ready to assist. Highly recommend them!",
      name: "Jane Smith",
  
      location: "Canada",
      image: Man,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="text-white py-16 relative bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f]">
      {/* Background Image */}
      
      {/* Testimonial Section */}
      <div className="">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">
          Client Testimonials
        </h2>

        <div className="md:w-full md:max-w-6xl mx-4 md:m-auto relative">
          <div className="lg:flex justify-between items-center gap-4 sm:gap-8">
            {/* Left Arrow Button */}
            <div className="flex justify-end mb-4 lg:mb-0">
            <div  className="flex gap-3">
              <div>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="bg-[#DBE3EA] h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] flex text-black pt-[5px] sm:pt-[11px] text-sm sm:text-lg justify-center rounded-full shadow-lg hover:bg-blue-800 focus:outline-none"
                >
                  <IoIosArrowBack />
                </button>
              </div>
              <div className=" lg:hidden">
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-[#DBE3EA] h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] flex text-black pt-[5px] sm:pt-[11px] text-sm sm:text-lg justify-center rounded-full shadow-lg hover:bg-blue-800 focus:outline-none"
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            </div>

            {/* Carousel */}
            <Carousel
              selectedItem={currentSlide}
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              autoPlay={false}
              interval={5000}
              stopOnHover={true}
              onChange={(index) => setCurrentSlide(index)}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#B7B8CA24] hover:bg-[#00000000] hover:border border-gray-600 transition duration-100 md:mx-auto h-[300px] sm:h-[350px] md:h-[400px] flex items-center rounded-lg p-4 sm:p-8 shadow-lg"
                  style={{ width: "100%" }}
                >
                  <div>
                  <p className="text-sm sm:text-lg text-justify md:text-[23px] md:pt-16 mb-4 sm:mb-6 md:leading-[60px]">
                      {testimonial.quote}
                    </p>
                    <div className="grid grid-cols-2 items-center ">
                      <div className="flex gap-2 sm:gap-4 mt-4">
                        <div>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-base sm:text-lg">
                            {testimonial.name}
                          </p>
                          <p className="text-xs sm:text-sm">
                            {testimonial.designation}
                          </p>
                          <p className="text-xs sm:text-sm">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <MdFormatQuote className="text-[100px] sm:text-[150px] md:text-[200px] text-[#5E75C7]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>

            {/* Right Arrow Button */}
            <div className="hidden lg:block">
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#DBE3EA] h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] flex text-black pt-[5px] sm:pt-[11px] text-sm sm:text-lg justify-center rounded-full shadow-lg hover:bg-blue-800 focus:outline-none"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
