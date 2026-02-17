import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "./baseQuery.js";

export const newsApi = createApi({
	reducerPath: "newsApi",
	baseQuery,
	endpoints: (build) => ({
		getNews: build.query({
			query: (id) => id ? `/news?id=eq.${id}` : `/news?order=created_at.desc`,
		})
	})
})

export const {useGetNewsQuery} = newsApi

