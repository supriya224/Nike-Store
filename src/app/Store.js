import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
// import rootReducer from './reducers';

const Store = configureStore({
  reducer:{
    cart:CartSlice,
  }
});



export default Store; 