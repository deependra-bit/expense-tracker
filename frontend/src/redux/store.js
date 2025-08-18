import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSice from "./Slices/authSlice.js";
import expenseSlice from "./Slices/expenseSlice.js";
import {
//   persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
  const rootReducer= combineReducers({
     auth:authSice,
        expense:expenseSlice
  }) 
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    // reducer:{
    //     auth:authSice,
    //     expense:expenseSlice
    // }
     reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store;
