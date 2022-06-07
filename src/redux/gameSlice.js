import { createSlice } from "@reduxjs/toolkit";
import { cartData } from "../data";

const gameSlice = createSlice({
    name:'game',
    initialState:{
        items:cartData
    },
    reducers:{
        chanceVisible : (state,action) => {
            const id = action.payload
          const filter =   state.items.filter(item => item.id ===id)
        
        }
    }
})


export default gameSlice.reducer;