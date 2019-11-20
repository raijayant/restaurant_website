import React, { Component } from 'react';
import { menuItems, detailMenu } from '../data.js'

const ProductContext = React.createContext()

class ProductProvider extends Component {
    state = {
        menus: [],
        detailMenu: detailMenu,
        cart: [],
        modalOpen: false,
        modalMenu: detailMenu,
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

    getItem = id => {
    const product = this.state.menus.find(item => item.id === id);
    return product;
  };

    handleDetail = id => {
        const menu = this.getItem(id);
    this.setState(() => {
      return { detailMenu: menu };
    });
    }

    addToCart = id => {
        let tempProducts = [...this.state.menus];
        const index = tempProducts.indexOf(this.getItem(id));
        const menu = tempProducts[index];
        menu.inCart = true;
        menu.count = 1;
        const price = menu.price;
        menu.total = price;

        this.setState(
        () => {
            return {
            menus: tempProducts,
            cart: [...this.state.cart, menu]
            };
        },
        () => {
            // callback function to change the value when added to cart
            this.addTotals()
        }
        );
    }

    openModal = (id) => {
        const menu = this.getItem(id);
        this.setState(() => {
      return { modalMenu: menu, modalOpen: true };
    });
    }

    closeModal = () => {
        this.setState(() => {
      return { modalOpen: false };
    });
    }

    increment = id => {
        let tempCart = [...this.state.cart]
        const selectedMenu = tempCart.find(item=> item.id === id)
        const index = tempCart.indexOf(selectedMenu)

        const menu = tempCart[index]
        menu.count = menu.count + 1 
        menu.total = menu.count * menu.price

        this.setState(()=>{return{cart:[...tempCart]}}, ()=> {
        this.addTotals()
        } )
    }

    decrement = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const menu = tempCart[index];

        menu.count = menu.count - 1
        if (menu.count === 0) {
        this.removeItem(id)
        } else {
        menu.total = menu.count * menu.price
        this.setState(
            () => {
            return { cart: [...tempCart] };
            },
            () => {
            this.addTotals();
            }
        );
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.menus]
        let tempCart = [...this.state.cart]

        tempCart = tempCart.filter(item => item.id !== id)

        const index = tempProducts.indexOf(this.getItem(id))
        let removedMenu = tempProducts[index]

        removedMenu.inCart = false
        removedMenu.count = 0
        removedMenu.total = 0

        this.setState(()=> {
        return {
            cart: [...tempCart],
            menus:[...tempProducts]
        }
        }, ()=> {
        this.addTotals()
        })

    }

    clearCart = () => {
        this.setState(()=> {
      return {cart: []}
    }, ()=> {
      this.setMenuItems()
      this.addTotals()
    })
    }

    addTotals = () => {
        let subTotal = 0
        this.state.cart.map(item => (subTotal += item.total ))
        const tempTax = subTotal * 0.09
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax

        this.setState(()=> {
        return {
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        }
        })
    }

    render() {
        return (
            <ProductContext.Provider
            value={{
                ...this.state,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                clearCart: this.clearCart,
                removeItem: this.removeItem
            }}>
            {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }