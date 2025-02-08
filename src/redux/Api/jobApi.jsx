import { baseApi } from "./baseApi";

const blog = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllJob: builder.query({
            query: ({searchTerm,sort}) => {
                return {
                    url: `/job/get-all-job?searchTerm=${searchTerm}&sort=${sort}`,
                    method: 'GET',
                };
            },
            providesTags: ['newHost'],
        }),

        getSingleJobDetails: builder.query({
            query: ({id}) => {
                return {
                    url: `/job/get-single-job?jobId=${id}`,
                    method: 'GET',
                };
            },
            providesTags: ['newHost'],
        }),

       


    }),
});

export const { useGetAllJobQuery, useGetSingleJobDetailsQuery } = blog;
