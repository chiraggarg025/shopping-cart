import React from 'react';
// create a class which extends the reac component
const CartItem = (props)=> {
        // binding
        const {price,title,qty} = props.product;
        const {product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct} =props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt='' src= {product.img} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Butons */}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg"
                         onClick = {()=>{
                             onIncreaseQuantity(product)
                         }}/>
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/659/659892.svg"
                        onClick={()=>{
                            onDecreaseQuantity(product);
                        }} />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg "
                        onClick={()=>{
                            onDeleteProduct(product.id);
                        }} />
                    </div>
                </div>
            </div>
            
        )
    
}
// definig styles
const styles = {
    image:{
        height:110,
        width:110,
        borderRadius: 4,
        background:'#ccc'
    }
}
// exporting the class
export default CartItem;