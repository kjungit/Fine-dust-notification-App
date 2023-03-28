import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const getParameters = (sidoName = "전국") => {
  return {
    serviceKey:
      "ujgF2jP0uCRpTRsHmLf2jYs6pQ3ld554lGxy1sj9j3UYMrxbu31CuLobu9AJzPS/CMkTxDlfrBA0dLy8GoeBlA==",
    returnType: "json",
    numOfRows: "100",
    pageNo: "1",
    sidoName: sidoName,
    ver: "1.0",
  };
};

export const fineDustApi = createApi({
  reducerPath: "findDust",
  tagTypes: ["FindDust"],
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/B552584/ArpltnInforInqireSvc/",
  }),

  endpoints: (builder) => ({
    getFineDustData: builder.query({
      query: (sidoName) => ({
        url: "/getCtprvnRltmMesureDnsty",
        params: getParameters(sidoName),
        keepUnusedDataFor: 600,
        transform: (response) => {
          console.log(response);
          return response;
        },
      }),
      transformResponse: (response) => response.response.body.items,
    }),
  }),
});

export const { useGetFineDustDataQuery } = fineDustApi;
