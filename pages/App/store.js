import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { apiCall } from '../Features/apiCall';

const store = configureStore({
    reducer: {
        [apiCall.reducerPath]: apiCall.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiCall.middleware),

})
setupListeners(store.dispatch)
export default store;
