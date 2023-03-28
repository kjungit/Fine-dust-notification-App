import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { createLogger } from "redux-logger";
import { fineDustApi } from "../api/findDustApi";

const logger = createLogger();

// const rootReducer = combineReducers({
//   fineDustInfo: fineDustReducer,
// });

const store = configureStore({
  reducer: {
    [fineDustApi.reducerPath]: fineDustApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([fineDustApi.middleware, logger]),
});

setupListeners(store.dispatch);

export default store;
