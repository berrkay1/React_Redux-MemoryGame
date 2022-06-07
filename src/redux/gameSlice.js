import { createSlice } from "@reduxjs/toolkit";
import { cartData } from "../data";

const gameSlice = createSlice({
    name:'game',
    initialState:{
        items:cartData,
        randomItem:[]
    },

    reducers:{
        chanceVisible : (state,action) => {
            const id = action.payload
            const index =state.items.findIndex(item => item.id ===id)
            state.items[index].visible=false

            
        },
        randomItem: (state)=>{
            state.items.sort(()=> Math.random()-0.5)
        },
        cartMatch: (state,action)=>{
            let cart1 = action.payload;
           const newCart =  state.items.map(cart2 => {
                if(cart1 === cart2.name){
                    return {...cart2,matched:true}
                }else{
                    return cart2
                }
            })

            state.items = newCart
            
        }
    }
})


export default gameSlice.reducer;
export const {chanceVisible,randomItem,cartMatch} = gameSlice.actions