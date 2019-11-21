import React, { Component } from 'react'
import CartColumns from './CartColumns'
import Title from '../Title'
import EmptyCart from './EmptyCart'
import { ProductConsumer } from '../ContextApi'
import CartList from './CartList'
import CartTotals from './CartTotals'

class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
            {value => {
                const {cart} = value
                if (cart.length > 0) {
                    return (
                        <React.Fragment>
                            <Title name="Your" title="Cart" />
                            <CartColumns />
                            <CartList value={value}/>
                            <CartTotals value={value}
                            history={this.props.history}/>

                        </React.Fragment>
                    )
                }else {
                    return <EmptyCart />
                }
            }}
        </ProductConsumer>

      </section>
    )
  }
}

export default Cart
