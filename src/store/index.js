import { configureStore } from "@reduxjs/toolkit";

import { wordsApi } from "./words/api";

import wordsReducer from "./words/words.slice";

export const store = configureStore({
    reducer: {
        [ wordsApi.reducerPath ]: wordsApi.reducer,
        words: wordsReducer,
    },
    middleware: (getDefaultMiddlewared) => getDefaultMiddlewared().concat(wordsApi.middleware)
})