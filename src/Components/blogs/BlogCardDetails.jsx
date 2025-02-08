import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleBlogDetailsQuery } from "../../redux/Api/blogApi";
import { imageUrl } from "../../redux/Api/baseApi";

export const BlogCardDetails = () => {
  const { id } = useParams(); // Get blog ID from the URL params
  const { data: singleClientData, isLoading, isError } = useGetSingleBlogDetailsQuery(
    { id },
    { refetchOnMountOrArgChange: true }
  );

  // Loading and error handling
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !singleClientData) {
    return <div>Error loading blog details.</div>;
  }

  // Destructuring blog data
  const { blog_image, title, content } = singleClientData?.data || {};

  return (
    <div className="bg-gradient-to-b from-[#0D125A] to-[#3453C6] pt-6 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Display the blog image */}
        <img
          className="w-full h-96 object-cover mb-6"
          src={`${imageUrl}/${blog_image}`} // Assuming the image is stored with a relative path
          alt={title}
        />
        <div>
          {/* Display the blog title */}
          <h1 className="text-3xl font-bold py-6">{title}</h1>

          {/* Display the content, assuming you want to show the full content */}
          <p className="pb-36">{content}</p>
        </div>
      </div>
    </div>
  );
};
