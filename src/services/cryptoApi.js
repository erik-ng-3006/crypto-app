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
			query: (count = 10) => `/coins?limit=${count}`,
		}),
	}),
});

export const { useGetCryptosQuery } = cryptoApi;

/* const options = {
	method: 'GET',
	url: 'https://coinranking1.p.rapidapi.com/coins',
	params: {
		referenceCurrencyUuid: 'yhjMzLPhuIDl',
		timePeriod: '24h',
		'tiers[0]': '1',
		orderBy: 'marketCap',
		orderDirection: 'desc',
		limit: '50',
		offset: '0',
	},
	headers: {
		'X-RapidAPI-Key': 'c30d4cb11cmsh96d85945474621bp16bd92jsn59adb28b9184',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
	},
}; */
