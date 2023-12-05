import React, {useState, createContext, useEffect} from 'react'
//  create context
import PropTypes from 'prop-types' // Import PropTypes
export const CartContext = createContext() 

const CartProvider = ({children}) => {

  const [cart, setCart] = useState(() => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) || []
    return initialCart
  })
   useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
 
  const  [itemAmount , setItemAmount] = useState(0)
  // update mount
  useEffect(() => {
    if(cart) {
      const amount = cart.reduce((acamulator , currenItem) => {
        return acamulator + currenItem.amount
      }, 0)
      setItemAmount(amount)
    }
  },[cart])

  const [popup , setPopup] = useState(false)
  const addToCart = (product, id, quantity) => {
    const newItem  = {...product , amount : quantity}
    const cartItem = cart.find(item => {
      return item._id === id
    })

    if (cartItem) {
      const newCart = [...cart].map(item => {
        if(item._id === id){
          return {...item , amount: cartItem.amount + quantity}
        }
        else {
          return item
        }
      })
      setCart(newCart)
    }else {
      setCart([...cart , newItem])
    }
    setPopup(true)
    setTimeout(() => {
      setPopup(false)
    },1000)
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item._id !== id
    })
    setCart(newCart)
  }

  const plusAmountItems = (id) =>{
    const newCart = cart.map(item => {
      if(item._id === id) {
        return {...item, amount: item.amount + 1}
      }else{
        return item
      }
    })
    setCart(newCart)
  }

  const minusAmountItems = (id) => {
    const cartItem = cart.find(item => {
      return item._id === id
    })
    if(cartItem) {
      const newCart = cart.map(item => {
        if(item._id === id) {
          return {...item, amount: cartItem.amount - 1}
        }else {
          return item
        }
      })
      setCart(newCart)
    }
      if(cartItem.amount < 2){
        removeFromCart(id)
      }
    
  }

  const deleteAllCart = () => {
    setCart([])
  }
  const [total , setTotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((acamulator , currenItem) => {
      return acamulator + currenItem.price * currenItem.amount   
    }, 0)
    setTotal(total)
  },[cart])
  const totalAfterVat = total * (1 + 0.03)
  return <CartContext.Provider value={{cart, addToCart,popup, removeFromCart, deleteAllCart, plusAmountItems, minusAmountItems, itemAmount, setItemAmount, total, totalAfterVat}}>{children}</CartContext.Provider>
}
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
export default CartProvider