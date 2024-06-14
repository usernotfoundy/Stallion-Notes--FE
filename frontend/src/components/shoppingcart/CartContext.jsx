// // CartContext.js
// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addToCart = (item) => {
//         setCart([...cart, item]);
//     };

//     const removeFromCart = (id) => {
//         setCart(cart.filter(item => item.id !== id));
//     };

//     const toggleItemSelection = (id, isSelected) => {
//         setCart(cart.map(item => item.id === id ? { ...item, isSelected } : item));
//     };
//     console.log("Cart and setCart provided", cart, setCart);
//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart, toggleItemSelection }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => useContext(CartContext);
// CartContext.js
// const addToCart = (item) => {
//     setCart([...cart, item]);
// };
// const addToCart = (item) => {
//     setCart([...cart, { ...item, isSelected: false }]);  // Ensure items have an isSelected property when added
// };
// const addToCart = (item) => {
//     const existingItem = cart.find(cartItem => cartItem.id === item.id);
//     if (!existingItem) {
//         setCart([...cart, { ...item, isSelected: false }]); // Only add if not already in the cart
//     }
// };


// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);



//     const removeFromCart = (id) => {
//         setCart(cart.filter(item => item.id !== id));
//     };

//     const addToCart = (item) => {
//         console.log("Adding to cart:", item);
//         const exists = cart.some(cartItem => cartItem.id === item.id);
//         if (!exists) {
//             setCart([...cart, { ...item, isSelected: false }]);
//         }
//         console.log("Cart after update:", cart);
//     };

//     const toggleItemSelection = (id, isSelected) => {
//         console.log("Toggling item selection:", id, isSelected);
//         setCart(prevCart =>
//             prevCart.map(item => item.id === id ? { ...item, isSelected: isSelected } : item)
//         );
//     };

//     return (
//         <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, toggleItemSelection }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => useContext(CartContext);

// import React, { createContext, useState, useContext, useEffect } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState(() => {
//         // Retrieve the cart from localStorage if available
//         const localData = localStorage.getItem('cart');
//         return localData ? JSON.parse(localData) : [];
//     });

//     useEffect(() => {
//         // Persist the cart to localStorage whenever it changes
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }, [cart]);

//     const removeFromCart = (id) => {
//         setCart(cart.filter(item => item.id !== id));
//     };

//     const addToCart = (item) => {
//         const exists = cart.some(cartItem => cartItem.id === item.id);
//         if (!exists) {
//             setCart(prev => [...prev, { ...item, isSelected: false }]);
//         }
//     };

//     const toggleItemSelection = (id, isSelected) => {
//         setCart(prevCart =>
//             prevCart.map(item => item.id === id ? { ...item, isSelected: isSelected } : item)
//         );
//     };

//     return (
//         <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, toggleItemSelection }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => useContext(CartContext);




import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Initialize cart from localStorage
        const localData = localStorage.getItem('cart');
        return localData ? JSON.parse(localData) : [];
    });

    const [selectedItems, setSelectedItems] = useState(() => {
        // Initialize selected items from localStorage if available
        const localSelectedData = localStorage.getItem('selectedItems');
        return localSelectedData ? JSON.parse(localSelectedData) : [];
    });

    useEffect(() => {
        // Update localStorage whenever the cart changes
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // const removeFromCart = (id) => {
    //     const updatedCart = cart.filter(item => item.id !== id);
    //     setCart(updatedCart);
    // };

    // const removeFromCart = async (id) => {
    //     try {
    //         const token = localStorage.getItem('authToken');
    //         await axios.delete(`http://127.0.0.1:8000/delete-cart/${id}`, {
    //             headers: { 'Authorization': `Bearer ${token}` }
    //         });
    //         const updatedCart = cart.filter(item => item.id !== id);
    //         setCart(updatedCart);
    //     } catch (err) {
    //         console.error('Failed to delete item from cart', err);
    //     }
    // };
    const removeFromCart = async (id) => {
        try {
            const token = localStorage.getItem('authToken');
            await axios.delete(`http://127.0.0.1:8000/delete-cart/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const updatedCart = cart.filter(item => item.id !== id);
            setCart(updatedCart);
            // If selections are stored separately, update them here:
            const updatedSelectedItems = selectedItems.filter(item => item.id !== id);
            setSelectedItems(updatedSelectedItems);  // Assuming you have a state or context method to manage this
            localStorage.setItem('selectedItems', JSON.stringify(updatedSelectedItems));  // Update localStorage if used
        } catch (err) {
            console.error('Failed to delete item from cart', err);
        }
    };


    const addToCart = (item) => {
        const exists = cart.some(cartItem => cartItem.id === item.id);
        if (!exists) {
            setCart(prev => [...prev, { ...item, isSelected: false }]);
        }
    };

    // const toggleItemSelection = (id, isSelected) => {
    //     setCart(prevCart =>
    //         prevCart.map(item => item.id === id ? { ...item, isSelected: isSelected } : item)
    //     );
    // };
    const toggleItemSelection = (id, isSelected) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item =>
                item.id === id ? { ...item, isSelected: isSelected } : item
            );
            // Update localStorage immediately with the new cart state
            localStorage.setItem('cart', JSON.stringify(updatedCart));

            // Additionally, update the selected items in localStorage
            const selectedItems = updatedCart.filter(item => item.isSelected);
            localStorage.setItem('selectedItems', JSON.stringify(selectedItems));

            return updatedCart;
        });
    };

    // const toggleItemSelection = (id, isSelected) => {
    //         setCart(prevCart => {
    //             const updatedCart = prevCart.map(item =>
    //                 item.id === id ? { ...item, isSelected: isSelected } : item
    //             );
    //             // Update localStorage immediately with the new cart state
    //             localStorage.setItem('cart', JSON.stringify(updatedCart));
    //             return updatedCart;
    //         });
    //     };
    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, toggleItemSelection }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);


// import React, { createContext, useState, useContext, useEffect } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState(() => {
//         const localData = localStorage.getItem('cart');
//         return localData ? JSON.parse(localData) : [];
//     });

//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }, [cart]);

//     const removeFromCart = (id) => {
//         setCart(prevCart => prevCart.filter(item => item.id !== id));
//     };

//     const addToCart = (item) => {
//         setCart(prev => {
//             const exists = prev.some(cartItem => cartItem.id === item.id);
//             if (!exists) {
//                 return [...prev, { ...item, isSelected: false }];
//             }
//             return prev;
//         });
//     };

//     const toggleItemSelection = (id, isSelected) => {
//         setCart(prevCart =>
//             prevCart.map(item => item.id === id ? { ...item, isSelected: isSelected } : item)
//         );
//     };

//     return (
//         <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, toggleItemSelection }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => useContext(CartContext);

