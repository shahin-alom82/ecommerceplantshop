import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import  plantReducer  from './plantSlice'

const persistConfig = {
      key: 'root',
      storage,
}

const persistedReducer = persistReducer(persistConfig, plantReducer)

export const store = configureStore({
      reducer: {
            shop: persistedReducer
      },
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                  serializableCheck: false
            }),
})
export const persistor = persistStore(store)

