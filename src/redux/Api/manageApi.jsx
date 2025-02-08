import { baseApi } from "./baseApi";

const setting = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTerms: builder.query({
            query: () => {
                return {
                    url:'/manage/get-terms-conditions',
                    method: 'GET',
                };
            },
            providesTags: ['newHost'],
        }),

        getPrivecy: builder.query({
            query: () => {
                return {
                    url:'/manage/get-privacy-policy',
                    method: 'GET',
                };
            },
            providesTags: ['newHost'],
        }),

        getReview: builder.query({
            query: () => {
                return {
                    url:'/review/get-all-review',
                    method: 'GET',
                };
            },
            providesTags: ['newHost'],
        }),

        getContact: builder.query({
            query: () => {
                return {
                    url:'/manage/get-contact-us',
                    method: 'GET',
                };
            },
            providesTags: ['newHost'],
        }),

        getFaq: builder.query({
            query: () => {
                return {
                    url:'/manage/get-faq',
                    method: 'GET',
                };
            },
            providesTags: ['newHost'],
        }),



       

       


    }),
});

export const { useGetTermsQuery,useGetPrivecyQuery, useGetReviewQuery , useGetFaqQuery, useGetContactQuery} = setting;
