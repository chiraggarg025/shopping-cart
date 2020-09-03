import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'
import { render } from '@testing-library/react';
class App extends React.Component {
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
              img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1006&q=80',
              id:1
          },
          {
              price:99,
              title:'Watch',
              qty:4,
              img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
              id:2
          },
          {
              price:9999,
              title:'Laptop',
              qty:10,
              img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
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
    handleDecreaseQuantity = (product)=> {
      console.log('decrease by1',product);
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty===1)return;
      products[index].qty-=1;
      this.setState({
          products:products
      })
    }
    handleDeleteProduct =(id) =>{
      const {products} = this.state;

      const items = products.filter((item) => item.id !==id);
      this.setState({
          products:items
      })
    }
    getCartCount =() =>{
      const {products} =this.state;
      let count=0;


      products.forEach((product)=>{
        count +=product.qty;
      })
      return count;
    }
    getCartTotal = () =>{
      const {products} = this.state;

      let cartTotal=0;
      products.map((product)=>{
        if(product.qty>0){
        cartTotal = cartTotal + product.qty*product.price
        }
        return '';
      });
      return cartTotal;
    }
  render(){
    const {products} =this.state;
    return (

      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{fontSize:20, padding:10}}>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
  
}

export default App;
