import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from './state/';

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const storeConfiguration = () => {
	let store = configureStore({reducer: persistedReducer})
	let persistor = persistStore(store)

	return { store, persistor }
}

export { storeConfiguration }