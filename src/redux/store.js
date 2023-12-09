import { authReducer } from './auth/auth.reduser';
import { contactReducer } from './contacts/contacts.reducer';
import { modalReducer } from './modalContactDetail/modalContactDetail.reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    contactsStore: contactReducer,
    authStore: persistReducer(authConfig, authReducer),
    modalStore: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
