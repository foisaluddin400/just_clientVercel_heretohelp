import { baseApi } from "./baseApi";

const news = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllNews: builder.query({
            query: () => {
                return {
                    url:'/news/get-all-news',
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

export const { useGetAllNewsQuery, useGetSingleJobDetailsQuery } = news;
