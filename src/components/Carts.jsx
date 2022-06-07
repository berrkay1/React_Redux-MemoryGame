import React from 'react'
import {useSelector} from 'react-redux'
import Cart from './Cart';

function Carts() {
    const items = useSelector(state => state.game.items);

    const handleCart = (id) => {
        
       const item = items.filter(itm =>itm.id ===id)
        
       
       
        
    }
    
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