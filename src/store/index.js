import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { createLogger } from "redux-logger";
import { fineDustApi } from "../api/findDustApi";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const logger = createLogger();

const store = configureStore({
  reducer: {
    [fineDustApi.reducerPath]: fineDustApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([fineDustApi.middleware, logger]),
});

setupListeners(store.dispatch);

export default store;
