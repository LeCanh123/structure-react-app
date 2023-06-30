import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/Count-slice"




const store=configureStore({
    reducer:{counterReducer}
})

export default store