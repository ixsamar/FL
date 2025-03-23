import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type isDarkModeType = 'dark' | 'light';

type initialStateType = {
  isDarkMode: isDarkModeType;
  userToken: string;
};

const initialState: initialStateType = {
  isDarkMode: 'light',
  userToken: '',
};

//State slice
export const mainSlice = createSlice({
  name: 'mainStore',
  initialState,
  reducers: {
    setIsDarkMode: (state, action: PayloadAction<isDarkModeType>) => {
      state.isDarkMode = action.payload;
    },
    setUserToken: (state, action: PayloadAction<string>) => {
      state.userToken = action.payload;
    },
  },
});

// Action creators are automatically generated for each case reducer function
export const {setIsDarkMode, setUserToken} = mainSlice.actions;

export default mainSlice.reducer;
