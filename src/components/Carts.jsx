import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Cart from './Cart';
import {chanceVisible,randomItem} from '../redux/gameSlice'

function Carts() {
    const items = useSelector(state => state.game.items);
    const dispatch = useDispatch();


    const handleCart = (id) => {
      
        dispatch(chanceVisible(id))
    }

    useEffect(()=>{
        dispatch(randomItem())
    },[dispatch])
    
  return (
    <div className='container'>
        {
            items.map((item,index) => (
                <Cart handleCart={handleCart} key={index} item={item} />
            ))
        }
    </div>
  )
}

export default Carts