import React from 'react';
// create a class which extends the reac component
class CartItem extends React.Component {
    
    // testing(){
    //     const promise = new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);
    //     })
    //     promise.then(()=>{
    //         // setState acts like syncronous call
    //         this.setState({qty:100});
    //         console.log('state',this.state);
    //     })
    // }
    // function to increase quantity
    increaseQuantity = () =>{
        // this.state.qty+=1;
    // setState form 1
        // this.setState({
        //     qty:this.state.qty + 1
        // });
    // set state form 2 -if prevState required use this
    this.setState((prevState) => {
        return {
            qty:prevState.qty + 1
        }
    },()=>{
        console.log('this.state',this.state);
    })

    }
    decreaseQuantity = () =>{
     const {qty} = this.state;
     if(qty===1){
         return;
     }
    this.setState((prevState) => {
        return {
            qty:prevState.qty - 1 
        }
    })

    }
    // returning jsx to be rendered
    render () {
        // binding
        const {price,title,qty} = this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt='' />
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
                             this.props.onIncreaseQuantity(this.props.product)
                         }}/>
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/659/659892.svg"
                        onClick={this.decreaseQuantity} />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg "
                        />
                    </div>
                </div>
            </div>
            
        )
    }
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