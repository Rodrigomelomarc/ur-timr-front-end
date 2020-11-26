import thunk, { ThunkAction } from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { Store, Action } from 'redux';
import createStore from './createStore';
import { rootReducer, RootState } from './modules/rootReducer';
import persistReducers from './persistReducers';

const middlewares = [thunk];

const store = createStore(persistReducers(rootReducer), middlewares) as Store<
  RootState
>;
const persistor = persistStore(store);

export { store, persistor };

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
