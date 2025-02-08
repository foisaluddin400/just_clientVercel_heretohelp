import React from "react";
import { useGetPrivecyQuery } from "../../redux/Api/manageApi";

export const PrivecyPolicy = () => {
  const { data: privacy, isLoading, isError } = useGetPrivecyQuery();
  
    if (isLoading) {
      return <div className="text-center py-10">Loading terms and conditions...</div>;
    }
  
    if (isError || !privacy?.data) {
      return <div className="text-center py-10">Error loading terms and conditions.</div>;
    }
  return (
    <div>
      <div className="bg-[#DBE3EA] py-4 ">
        <div className="max-w-7xl m-auto text-xl font-bold">Privacy Policy</div>
      </div>

      <div className="max-w-7xl m-auto py-5">
      <div dangerouslySetInnerHTML={{ __html: privacy.data.description }} />
      </div>
    </div>
  );
};
