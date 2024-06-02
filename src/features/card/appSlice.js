import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    basePricePerMonth: 2,
    pageViews: 10000,
    pricePerMonth: 2,
    billingCycle: 'monthly',
    discount : 0.25
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPageViews(state, action) {
      state.pageViews = action.payload;
    },
    setBillingCycle(state, action) {
      state.billingCycle = action.payload;
    },
    setPricePerMonth(state, action){
      state.pricePerMonth = action.payload;
    }
  }
});

export const {setPageViews, setBillingCycle, setPricePerMonth} = appSlice.actions;

export default appSlice.reducer;
