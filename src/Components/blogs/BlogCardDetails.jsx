// import React from "react";
// import { useParams } from "react-router-dom";
// import { useGetSingleBlogDetailsQuery } from "../../redux/Api/blogApi";
// import { imageUrl } from "../../redux/Api/baseApi";

// export const BlogCardDetails = () => {
//   const { id } = useParams(); // Get blog ID from the URL params
//   const { data: singleClientData, isLoading, isError } = useGetSingleBlogDetailsQuery(
//     { id },
//     { refetchOnMountOrArgChange: true }
//   );

//   // Loading and error handling
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError || !singleClientData) {
//     return <div>Error loading blog details.</div>;
//   }

//   // Destructuring blog data
//   const { blog_image, title, content } = singleClientData?.data || {};

//   return (
//     <div className="bg-gradient-to-b from-[#0D125A] to-[#3453C6] pt-6 px-6 text-white">
//       <div className="max-w-6xl mx-auto">
//         {/* Display the blog image */}
//         <img
//           className="w-full h-96 object-cover mb-6"
//           src={`${imageUrl}/${blog_image}`} // Assuming the image is stored with a relative path
//           alt={title}
//         />
//         <div>
//           {/* Display the blog title */}
//           <h1 className="text-3xl font-bold py-6">{title}</h1>

//           {/* Display the content, assuming you want to show the full content */}
//           <p className="pb-36">{content}</p>
//         </div>
//       </div>
//     </div>
//   );
// };



import React from "react";
import img7 from "../../assets/blog/img7.png";
export const BlogCardDetails = () => {
  return (
    <div className="bg-gradient-to-b from-[#0D125A] to-[#3453C6] pt-6 px-6 text-white">
        <div className="max-w-6xl mx-auto ">
      <img className="w-full" src={img7} alt="" />
      <div>
        <h1 className="text-2xl font-bold py-6">How BETS Optimizes Your Infrastructure Through Teamwork</h1>

        <p className="pb-36">
          In today's fast-paced digital landscape, a robust and reliable IT
          infrastructure is no longer a luxury – it's the backbone of your
          business. But building and maintaining such an infrastructure requires
          more than just technical expertise; it demands seamless teamwork and a
          collaborative approach. At BETS, we understand this fundamental
          principle, and we've built our company around a culture of teamwork
          that drives IT excellence for our clients. The Power of a Unified Team <br /><br /><br />
          At BETS, we believe that the best results are achieved when a diverse
          group of experts works together towards a common goal. Our team
          comprises highly skilled professionals with specialized expertise in
          various areas of IT, including network design, cybersecurity, cloud
          computing, server management, and more. But what truly sets us apart
          is our ability to integrate these individual skill sets into a
          unified, collaborative force. We foster a culture of open
          communication, knowledge sharing, and mutual respect, ensuring that
          every team member contributes their unique perspective and expertise
          to each project. Optimizing Your Infrastructure Through Collaborative
          Solutions When you partner with BETS, you're not just hiring a group
          of individuals – you're gaining access to a cohesive team that's
          dedicated to optimizing your IT infrastructure. Our collaborative
          approach manifests in several key ways: <br /><br /><br /> Holistic Assessments: We begin
          by conducting thorough assessments of your existing infrastructure,
          taking the time to understand your specific business needs and
          challenges. This collaborative process involves experts from different
          areas, ensuring a comprehensive understanding of your IT environment.
          Integrated Design: Our team works together to design tailored IT
          solutions that address your unique requirements. By leveraging the
          combined knowledge of our network engineers, security specialists, and
          cloud architects, we create integrated solutions that are both
          powerful and efficient. <br /><br /><br /> Seamless Implementation: Implementing complex
          IT solutions requires meticulous coordination. Our project managers
          work closely with our technical teams to ensure a smooth and seamless
          implementation process, minimizing disruptions to your business <br /><br /><br />
          operations. Proactive Monitoring and Support: Our commitment to
          teamwork extends beyond the initial implementation. Our dedicated
          support teams work collaboratively to proactively monitor your
          infrastructure, identify potential issues, and provide timely
          resolutions, ensuring optimal performance and uptime. The BETS
          Difference: Teamwork You Can Trust At BETS, we're more than just an IT
          solutions provider – we're your trusted partner. We believe that our
          collaborative approach, driven by a shared commitment to excellence,
          is what truly sets us apart. When you choose BETS, you can be
          confident that you're working with a team that's dedicated to your
          success. Ready to experience the power of teamwork for your IT
          infrastructure? Contact BETS today to learn more about our
          collaborative solutions and how we can help you achieve your business
          goals.
        </p>
      </div>
    </div>
    </div>
  );
};
