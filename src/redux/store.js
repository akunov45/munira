import {configureStore} from "@reduxjs/toolkit";
import {newsApi} from "./api/newsApi.js";
import {reviewsApi} from "./api/reviewsApi.js";
import {pointOfDepartureApi} from "./api/cargoRoutesApi.js";

export const store = configureStore({
	reducer: {
		[newsApi.reducerPath]: newsApi.reducer,
		[reviewsApi.reducerPath]: reviewsApi.reducer,
		[pointOfDepartureApi.reducerPath]: pointOfDepartureApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(
				newsApi.middleware,
				reviewsApi.middleware,
				pointOfDepartureApi.middleware)
})