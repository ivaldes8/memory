import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface alert {
  msg: string,
  type: 'error' | 'success'
}


export interface settingState {
  loading: boolean;
  alert: alert | null;
}


const initialState: settingState = {
  loading: false,
  alert:  null,
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggleLoading: (state) => {
      state.loading = !state.loading
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    toggleAlert: (state, action: PayloadAction<string>) => {
      state.alert = {
        msg: action.payload,
        type: 'error'
      }
    },

    toggleSuccessAlert: (state, action: PayloadAction<string>) => {
      state.alert = {
        msg: action.payload,
        type: 'success'
      }
    },
  },
});

export const { toggleLoading, toggleAlert, toggleSuccessAlert } = settingSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectLoading = (state: RootState) => state.setting.loading;

export const selectAlert = (state: RootState) => state.setting.alert;

export default settingSlice.reducer;
