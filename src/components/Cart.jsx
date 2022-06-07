import React from 'react'

function Cart({item,handleCart}) {

    

  return (
    <div onClick={()=>handleCart(item.id)} className={ item.visible ? 'card ' : 'card active' }>
        
        <img src={item.image}  alt="" />
    </div>
  )
}

export default Cart