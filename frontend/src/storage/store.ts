import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import settingReducer from './features/settingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    setting: settingReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
