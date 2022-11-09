import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
	'X-RapidAPI-Key': 'c30d4cb11cmsh96d85945474621bp16bd92jsn59adb28b9184',
	'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};
const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers, api) => {
			return new Headers(cryptoApiHeaders);
		},
	}),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => `/coins?limit=${count}`,
		}),
		getCryptoDetail: builder.query({
			query: ({ coinId, timePeriod }) =>
				`/coin/${coinId}?timePeriod=${timePeriod}`,
		}),
		getCryptoHistory: builder.query({
			query: ({ coinId, timePeriod }) =>
				`/coin/${coinId}/history?timePeriod=${timePeriod}`,
		}),
	}),
});

export const {
	useGetCryptosQuery,
	useGetCryptoDetailQuery,
	useGetCryptoHistoryQuery,
} = cryptoApi;
