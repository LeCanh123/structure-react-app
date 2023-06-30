import React from 'react'
import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const findAllUsers=createAsyncThunk("findAllUser",
async ()=>{ 
    let res= await axios.get(process.env.REACT_APP_HOST+"user")
return res.data
}

)








const counterSlice=createSlice(
    {
        name:"counter",
        initialState:{
            counter:0,
            loading:false,
            user:[]
        },
        reducers:{
            increment:(state,action)=>{return{...state,counter:state.counter+1}},
            decrement:(state,action)=>{return{...state,counter:state.counter-1}},
        },
        extraReducers:(builder)=>{
            builder.addCase(findAllUsers.pending, (state, action) => {
                state.loading = true;
                console.log("ddax vaof pendding");
            });
            builder.addCase(findAllUsers.fulfilled, (state, action) => {
                state.loading = true;
                console.log("da loading xong",action.payload);
            });
            builder.addCase(findAllUsers.rejected, (state, action) => {
                state.loading = true;
                console.log("ddax vaof reject");
            });


        }
    }
)

export const counterAction={...counterSlice.actions,findAllUsers}
export default counterSlice.reducer