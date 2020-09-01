import React from 'react';
// create a class which extends the reac component
    const Navbar = () => {
    // returning jsx to be rendered
        return(
            <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src = "https://image.flaticon.com/icons/svg/1170/1170678.svg" alt="cart-icon"/>
                <span style={styles.cartCount}>3</span>
            </div>
                
            </div>
            
        )
    
    }
// definig styles
const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
// exporting the class
export default Navbar;