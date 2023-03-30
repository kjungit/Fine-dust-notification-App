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
    baseUrl: "/api/B552584/ArpltnInforInqireSvc",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json, text/plain, */*");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getFineDustData: builder.query({
      query: (sidoName) => ({
        url: "/getCtprvnRltmMesureDnsty",
        params: getParameters(sidoName),
        keepUnusedDataFor: 600,
      }),
    }),
  }),
});

export const { useGetFineDustDataQuery } = fineDustApi;
