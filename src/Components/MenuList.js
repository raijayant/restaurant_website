import React, { Component } from 'react';
import Menu from './Menu.js'
import { ProductConsumer } from '../Components/ContextApi.js'

class MenuList extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
            <div className="py-5">
                <div className="row">
                    <ProductConsumer>
                    {(value) => {
                            return value.menus.map((menu) => <Menu key={menu.id} menu={menu}/>
                              
                            )}
                             
                        }
                        
                    </ProductConsumer>
                    
                </div>
            </div>
            </React.Fragment>
        )
    };
}


 
export default MenuList;