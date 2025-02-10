// import React from "react";
// import { MdArrowOutward } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { useGetAllBlogQuery } from "../../redux/Api/blogApi";
// import { imageUrl } from "../../redux/Api/baseApi";
// import { Loading } from "../../Pages/Loading";
// import { Error } from "../../Pages/Error";
// import { Nodata } from "../../Pages/Nodata";

// export const BlogCardSection = () => { 
//   const { data: blogData, isLoading, isError } = useGetAllBlogQuery();
//   console.log(blogData);

//   // Function to get the first 20 words of the content
//   const getContentPreview = (content) => {
//     const words = content.split(" ");
//     return words.slice(0, 20).join(" ") + (words.length > 20 ? "..." : "");
//   };

//   if (isLoading) {
//     return <div><Loading /></div>;
//   }

//   if (isError) {
//     return <div><Error /></div>;
//   }

//   // Check if no data is available
//   if (!blogData?.data?.result?.length) {
//     return (
//       <div className="bg-gradient-to-b from-[#3C2758] to-[#1D1755] py-16 px-6 text-center text-white">
//         <p><Nodata></Nodata></p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-b from-[#3C2758] to-[#1D1755] py-16 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {blogData?.data?.result?.map((blog) => (
//           <div
//             key={blog._id}
//             className="text-white border hover:bg-blue-600 border-gray-700 rounded-lg shadow-lg overflow-hidden"
//           >
//             <img
//               src={`${imageUrl}/${blog.blog_image}`} // Add a fallback image if no image is available
//               alt={blog.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-4">{blog.title}</h3>
//               <p className="mb-6 text-sm">{getContentPreview(blog.content)}</p>
//               <Link to={`/blog/blogDetails/${blog._id}`}>
//                 <button className="mt-8 px-6 py-2 text-sm md:text-lg font-medium bg-[#DBE3EA] text-blue-900 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex items-center group">
//                   Read More...
//                   <MdArrowOutward className="text-xl ml-2 transform transition-transform duration-300 group-hover:rotate-90" />
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };




import React from "react";
import img1 from "../../assets/blog/img1.png";
import img2 from "../../assets/blog/img2.png";
import img3 from "../../assets/blog/img3.png";
import img4 from "../../assets/blog/img4.png";
import img5 from "../../assets/blog/img5.png";
import img6 from "../../assets/blog/img6.png";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    image: img1,
    title: "BETS: Teamwork Driving IT Excellence.",
    description:
      "Discover How BETS Leverages The Combined Expertise Of Our Team To Design, Implement, And Manage Robust And Efficient Network Infrastructures That Drive Your Business Forward.",
  },
  {
    id: 2,
    image: img2,
    title: "Cloud Migration Strategies: Is Your Business Ready For The Leap?",
    description:
      "Migrating To The Cloud Offers Numerous Benefits, But Careful Planning Is Essential. Explore Key Considerations And Best Practices For A Successful Cloud Migration Journey With BETS.",
  },
  {
    id: 3,
    image: img3,
    title: "From Chaos To Control: BETS’ Approach To IT Project Management",
    description:
      "IT Projects Can Be Complex. Explore BETS’ Proven Project Management Methodologies That Ensure On-Time, On-Budget, And Successful Implementations, Transforming Chaos Into Seamless Results.",
  },
  {
    id: 4,
    image: img4,
    title:
      "The BETS Difference: A Deep Dive Into Our Server Management Solutions",
    description:
      "Your Servers Are The Heart Of Your IT Operations. Uncover The BETS Approach To Server Management, Encompassing Proactive Maintenance, Optimization, And 24/7 Support To Ensure Peak Performance.",
  },
  {
    id: 5,
    image: img5,
    title: "Quality First: How BETS Ensures Reliable IT Solutions",
    description:
      "At BETS, Quality Is Paramount. This Post Explores Our Rigorous Testing, Meticulous Planning, And Commitment To Industry Best Practices That Deliver Reliable And Long-Lasting IT Solutions.",
  },
  {
    id: 6,
    image: img6,
    title: "Wired For Success: Mastering Network Infrastructure With BETS",
    description:
      "A Robust Network Infrastructure Is The Foundation Of Your Digital Success. Learn How BETS Designs, Implements, And Maintains High-Performance Networks Tailored To Your Specific Business Needs.",
  },
];

export const BlogCardSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#3C2758] to-[#1D1755] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className=" text-white border border-gray-700 rounded-lg shadow-lg overflow-hidden "
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold  mb-4">{blog.title}</h3>
              <p className=" mb-6 text-sm">{blog.description}</p>
              <Link to={'/blog/blogDetails'}><button className="mt-8 px-6 py-2 text-sm md:text-lg font-medium bg-[#DBE3EA] text-blue-900 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex items-center group">
                Read More...
                <MdArrowOutward className="text-xl ml-2 transform transition-transform duration-300 group-hover:rotate-90" />
              </button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
