import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "./baseQuery.js";

export const reviewsApi = createApi({
	reducerPath: "reviewsApi",
	baseQuery,
	endpoints: (build) => ({
		getReviews: build.query({
			query: () => `/customer_reviews`,
		})
	})
})

export const {useGetReviewsQuery} = reviewsApi

