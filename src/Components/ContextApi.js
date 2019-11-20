import React, { Component } from 'react';
import { menuItems } from '../data.js'

const ProductContext = React.createContext()

class ProductProvider extends Component {
    state = {
        menus: [],
        cart: [],
        modalOpen: false,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount() {
        this.setMenuItems()
    }

    setMenuItems = () => {
        let tempMenu = [];
        menuItems.forEach(item => {
            const singleItem = {...item}
            tempMenu = [...tempMenu, singleItem]
        })
     this.setState(()=> {
            return { menus: tempMenu }
    })
    }

    handleDetail = id => {
        console.log("hello from handledetail")
    }

    addToCart = id => {
        console.log(id)
    }

    render() {
        return (
            <ProductContext.Provider
            value={{
                ...this.state,
                addToCart: this.addToCart
            }}>
            {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }