import React, { Component } from 'react';

class CartColumns extends Component {
    render() { 
        return ( 
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Order</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>

                    </tr>
                </thead>
            </table>
            </div>
         );
    }
}
 
export default CartColumns;