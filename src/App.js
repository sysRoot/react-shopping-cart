import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import { CartContext, ProductContext } from './contexts';

function App() {
    const [products] = useState(data);
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        // add the given item to the cart
        setCart((state) => {
            return [...state, item];
        });
    };
    const remItem = (id) => {
        // add the given item to the cart
        setCart((state) => {
            return [...state.filter((item) => item.id !== id)];
        });
    };

    return (
        <div className='App'>
            <CartContext.Provider value={{ cart, remItem }}>
                <Navigation />

                {/* Routes */}
                <ProductContext.Provider value={{ products, addItem }}>
                    <Route exact path='/'>
                        <Products />
                    </Route>
                </ProductContext.Provider>

                <Route path='/cart'>
                    <ShoppingCart />
                </Route>
            </CartContext.Provider>
        </div>
    );
}

export default App;
