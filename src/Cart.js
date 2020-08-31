import React from 'react';
import CartItem from './CartItem'
// create a class which extends the react component
class Cart extends React.Component {
    render(){
        return(
            <div className="cart">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        )
    }
}

// exporting the class
export default Cart;