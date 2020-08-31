import React from 'react';
import CartItem from './CartItem'
// create a class which extends the react component
class Cart extends React.Component {
    constructor (){
        // calling parent constructor
        super();
        // defining state
        this.state={
            products:[
            {
                price:999,
                title:'Mobile Phone',
                qty:1,
                img: '',
                id:1
            },
            {
                price:99,
                title:'Watch',
                qty:4,
                img: '',
                id:2
            },
            {
                price:9999,
                title:'Laptop',
                qty:10,
                img: '',
                id:3
            }
                
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing();
    }
    handleIncreaseQuantity = (product)=> {
        console.log('increase by1',product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products:products
        })
    }
    render(){
        const {products} = this.state;
        return(
            <div className="cart">

                {products.map((product)=>{
                  return <CartItem 
                  product={product} 
                  key={product.id}
                  onIncreaseQuantity = {this.handleIncreaseQuantity}
                  />
                })}
            </div>
        )
    }
}

// exporting the class
export default Cart;