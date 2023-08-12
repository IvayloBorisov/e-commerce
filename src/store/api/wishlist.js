import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { normalizeWishlistData } from '../../utils/wishlistHelpers';


const wishlistApi = createApi({
    reducerPath: 'wishlist',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    tagTypes: ['Wishlist'],
    endpoints: (builder) => ({
        addProductToWishlist: builder.mutation({
            query: ({ email, productImage }) => ({
                url: '/wishlists',
                method: 'POST',
                body: {
                    userEmail: email,
                    productImage
                }
            }),
            invalidatesTags: ['Wishlist'],
        }),
        fetchWishListProducts: builder.query({
            query: () => ({
                url: '/wishlists',
                method: 'GET',
            }),
            providesTags: ['Wishlist'],
            transformResponse: (response) => {
                const normalizedData = normalizeWishlistData(response);
                return normalizedData;
            }

        }),
        removeProductFromWishlist: builder.mutation({
            query: (imageUrl) => ({
                url: `/wishlists/${imageUrl}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Wishlist']
        })
    })

});

export { wishlistApi };
export const { useAddProductToWishlistMutation, useFetchWishListProductsQuery, useRemoveProductFromWishlistMutation } = wishlistApi;
