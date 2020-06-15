import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from './state/';
import { logger } from './middlewares/loggers/logger'

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const storeConfiguration = () => {
	let store = configureStore({
		reducer: persistedReducer,
		middleware: [...getDefaultMiddleware(), logger]
	})
	let persistor = persistStore(store)

	return { store, persistor }
}

export { storeConfiguration }
