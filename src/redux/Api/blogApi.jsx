import { baseApi } from "./baseApi";

const blog = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBlog: builder.query({
            query: () => {
                return {
                    url: '/blog/get-all-blog',
                    method: 'GET',
                };
            },
            providesTags: ['newHost'],
        }),

        getSingleBlogDetails: builder.query({
            query: ({id}) => {
                return {
                    url: `/blog/get-single-blog?blogId=${id}`,
                    method: 'GET',
                };
            },
            providesTags: ['newHost'],
        }),

       


    }),
});

export const { useGetAllBlogQuery, useGetSingleBlogDetailsQuery } = blog;
