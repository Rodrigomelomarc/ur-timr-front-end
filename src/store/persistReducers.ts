import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers: any): any => {
  const persistedReducers = persistReducer(
    {
      key: 'urtimr',
      storage,
      whitelist: ['auth', 'profile'],
    },
    reducers,
  );

  return persistedReducers;
};
