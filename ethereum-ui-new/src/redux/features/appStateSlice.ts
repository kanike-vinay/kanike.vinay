import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type appState = {
  appState: string;
  loaderState: boolean;
  accountAddress: string;
  currentProfileNFTData: Object[],
  allNFTData: Object[]
};

const initialState: appState = {
  appState: "",
  loaderState: false,
  accountAddress: "",
  currentProfileNFTData: [],
  allNFTData: []
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload;
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loaderState = action.payload;
    },
    setAccountAddress: (state, action: PayloadAction<string>) => {
      state.accountAddress = action.payload;
    },
    setCurrrentProfileNFTData: (state, action: PayloadAction<Object[]>) => {
      state.currentProfileNFTData = action.payload;
    },
    setAllNFTData: (state, action: PayloadAction<Object[]>) => {
      state.allNFTData = action.payload;
    }
  },
});

export const { setAppState, setLoader, setAccountAddress, setCurrrentProfileNFTData, setAllNFTData } = appStateSlice.actions;

export default appStateSlice.reducer;
