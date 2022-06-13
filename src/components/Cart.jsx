import React from 'react'

function Cart({item,handleCart,disabled}) {
  return (
    <div onClick={()=>!disabled && handleCart(item.id)} className={item.visible ? 'card ' : 'card active'}>

        
        <img src={item.image}  alt={item.name} />
    </div>
  )
}

export default Cart