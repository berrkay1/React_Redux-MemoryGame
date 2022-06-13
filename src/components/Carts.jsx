import React, { useEffect,useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Cart from './Cart';
import {chanceVisible,randomItem,cartMatch} from '../redux/gameSlice'

function Carts() {
    const items = useSelector(state => state.game.items);
    const dispatch = useDispatch();
    const [oneChoise,setOneChoise] = useState(null);
    const [twoChoise,setTwoChoise] = useState(null);
    const [disabled,setDisabled] = useState(false);

    const handleCart = (id) => {
      
        dispatch(chanceVisible(id));
        if(oneChoise && twoChoise){
            setDisabled(true)
            if(oneChoise.name === twoChoise.name){
                dispatch(cartMatch(oneChoise))
                reset();
                
            }
            else{
                setTimeout(()=>reset(),1000)
            }
        }
        
    }

    console.log(items);

    useEffect(()=>{
        dispatch(randomItem())
        
       
    },[dispatch])

    const reset = () => {
        setOneChoise(null);
        setTwoChoise(null);
        setDisabled(false);
    }
    
  return (
    <div className='container'>
        {
            items.map((item,index) => (
                <Cart handleCart={handleCart} key={index} item={item}
                disabled={disabled}

                />
            ))
        }
    </div>
  )
}

export default Carts