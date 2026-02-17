
import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "./baseQuery.js";

export const pointOfDepartureApi = createApi({
	reducerPath: "pointOfDepartureApi",
	baseQuery,
	endpoints: (build) => ({
		getPointDestination: build.query({
			query: () => `/point_of_departure`,
		})
	})
})

export const {useGetPointDestinationQuery} = pointOfDepartureApi