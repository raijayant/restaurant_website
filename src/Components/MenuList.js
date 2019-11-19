import React, { Component } from 'react';
import Menu from './Menu'
import { ProductConsumer } from './ContextApi'

class MenuList extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                    <ProductConsumer>
                        {value => {
                            return value.menus.map(menu => {
                                return <Menu key={menu.id} menu={menu} />
                            })
                        }}
                    </ProductConsumer>
                </div>
            </React.Fragment>
         );
    }
}
 
export default MenuList;