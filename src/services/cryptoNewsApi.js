import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const cryptoNewsApiHeaders = {
	'X-BingApis-SDK': 'true',
	'X-RapidAPI-Key': 'c30d4cb11cmsh96d85945474621bp16bd92jsn59adb28b9184',
	'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
};

export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers, api) => new Headers(cryptoNewsApiHeaders),
	}),

	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, count }) =>
				`/news/search?q=${newsCategory}&freshness=Day&textFormat=Raw&safeSearch=Off&count=${count}`,
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
