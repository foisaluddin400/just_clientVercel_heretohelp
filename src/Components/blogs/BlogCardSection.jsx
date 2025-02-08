import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetAllBlogQuery } from "../../redux/Api/blogApi";
import { imageUrl } from "../../redux/Api/baseApi";
import { Loading } from "../../Pages/Loading";
import { Error } from "../../Pages/Error";
import { Nodata } from "../../Pages/Nodata";

export const BlogCardSection = () => { 
  const { data: blogData, isLoading, isError } = useGetAllBlogQuery();
  console.log(blogData);

  // Function to get the first 20 words of the content
  const getContentPreview = (content) => {
    const words = content.split(" ");
    return words.slice(0, 20).join(" ") + (words.length > 20 ? "..." : "");
  };

  if (isLoading) {
    return <div><Loading /></div>;
  }

  if (isError) {
    return <div><Error /></div>;
  }

  // Check if no data is available
  if (!blogData?.data?.result?.length) {
    return (
      <div className="bg-gradient-to-b from-[#3C2758] to-[#1D1755] py-16 px-6 text-center text-white">
        <p><Nodata></Nodata></p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#3C2758] to-[#1D1755] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogData?.data?.result?.map((blog) => (
          <div
            key={blog._id}
            className="text-white border hover:bg-blue-600 border-gray-700 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={`${imageUrl}/${blog.blog_image}`} // Add a fallback image if no image is available
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{blog.title}</h3>
              <p className="mb-6 text-sm">{getContentPreview(blog.content)}</p>
              <Link to={`/blog/blogDetails/${blog._id}`}>
                <button className="mt-8 px-6 py-2 text-sm md:text-lg font-medium bg-[#DBE3EA] text-blue-900 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex items-center group">
                  Read More...
                  <MdArrowOutward className="text-xl ml-2 transform transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
