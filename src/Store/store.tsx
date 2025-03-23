import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {hostApiServices} from '../APIServices/hostApiServices';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import mainSlice from './AppSlices/mainSlice';

const rootReducer = combineReducers({
  [hostApiServices.reducerPath]: hostApiServices.reducer,
  mainStore: mainSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat([hostApiServices.middleware]),
  });
};

export const persiststore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch: () => typeof persiststore.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof persiststore.getState>
> = useSelector;
