import React from 'react';
import { useGetTermsQuery } from '../../redux/Api/manageApi';

export const TermsCondition = () => {
  const { data: terms, isLoading, isError } = useGetTermsQuery();

  if (isLoading) {
    return <div className="text-center py-10">Loading terms and conditions...</div>;
  }

  if (isError || !terms?.data) {
    return <div className="text-center py-10">Error loading terms and conditions.</div>;
  }

  return (
    <div>
      <div className="bg-[#DBE3EA] py-4">
        <div className="max-w-7xl m-auto text-xl font-bold">Terms And Conditions</div>
      </div>

      <div className="max-w-7xl m-auto py-5">
        <div dangerouslySetInnerHTML={{ __html: terms.data.description }} />
      </div>
    </div>
  );
};
