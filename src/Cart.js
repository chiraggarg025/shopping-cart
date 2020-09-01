import React from 'react';
import CartItem from './CartItem'
// create a class which extends the react component
const Cart = (props) => {
        const {products} = props;
        return(
            <div className="cart">

                {products.map((product)=>{
                  return (<CartItem 
                  product={product} 
                  key={product.id}
                  onIncreaseQuantity = {props.onIncreaseQuantity}
                  onDecreaseQuantity = {props.onDecreaseQuantity}
                  onDeleteProduct = {props.onDeleteProduct}
                />
                  )
                })}
            </div>
        )
    
}

// exporting the class
export default Cart;