import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class StripeCheckout extends Component {
  render() {
    return (
      <div>
        <Link to="/checkout">
            <button className="btn btn-outline-primary text-uppercase mb-3 px-5">
                Pay Now
            </button>
        </Link>
      </div>
    )
  }
}

export default StripeCheckout
