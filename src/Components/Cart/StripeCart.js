import React from 'react';
import { ProductConsumer } from '../ContextApi'
import StripeColumn from './StripeColumn'

export default function StripeCart({value}){

return ( 
        <div className="container">  
            <React.Fragment>
            
            <ProductConsumer>
                {value => {
                    const {cartSubTotal, cartTax, cartTotal, cart} = value
                    
                    return (
                        // to display selected items in checkout without any functionality
                    <div>
                        <div>
                    <StripeColumn/>
                        </div>
                        {cart.map(items => (
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                            <img
                                            src={items.img}
                                            style={{ width: "5rem", height: "5rem" }}
                                            className="img-fluid"
                                            alt="product"/>
                                            </th>
                                            <th>{items.title}</th>
                                            <th>{items.price}</th>
                                            <th>{items.count}</th>
                                            <th>{items.total}</th>

                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        ))}
                                                    
                       {/* div for total */}
                    <div>
                       <div>
                            <h5>
                                <span className="text-title">subtotal :</span>
                                <strong>$ {cartSubTotal}</strong>
                            </h5>

                            <h5>
                                <span className="text-title">tax :</span>
                                <strong>${cartTax}</strong>
                            </h5>

                            <h5>
                                <span className="text-title">total :</span>
                                <strong>$ {cartTotal}</strong>
                            </h5>
                        
                        </div>
                            
                    </div>                
                </div>
        )}}
            </ProductConsumer>
            </React.Fragment>
        </div>
            )
}

 
