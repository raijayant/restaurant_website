import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from './ContextApi.js'



class Menu extends Component {

  render() {
    const { id, title, price, img, description, inCart } = this.props.menu
    return (
      <ProductWrapper className="col-6 col-md-3 col-lg-3">
      <div className="card mb-2">
        <ProductConsumer>
          {(value) => (
            <div>
              <div className="col-container">
                    <img src={img} alt="pic" className="card-img-top"/>
                 
            </div>
            <button
                  className="cart-btn mb-3"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id)
                    value.openModal(id)
                  }}
                >

                  {inCart ? (
                    <p disabled>
                  {" "} 
                  in cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                  </button>
            
          </div>


          )}
          
  
        </ProductConsumer>
         <div className="card-footer">
                <p className="text-left mb-0">
                  {title}
                </p>
                <h5 className="text-blue mb-0 text-left">
                  <span className="mr-1">$</span>
                  {price}
                </h5>
                
            </div>
            <div>
          
            </div>
       
      </div>

      </ProductWrapper>
    )
  }
}


const ProductWrapper = styled.div`
  .card {
    
    transition: all 1s linear;
    font-size: 1.3rem;

  }
  .cart-btn {
    background: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    position: absolute;
    bottom: 0;
    right: 0;
    transition: all 1s linear;

  }
  .cart-btn:hover {
    cursor: pointer;
    background: var(--mainRed)
  }
`;

export default Menu
