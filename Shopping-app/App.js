import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen';
import CartScreen from './Components/CartScreen';
import CheckoutScreen from './Components/CheckoutScreen';

// Sample Product Data
const products = [
  { id: '1', name: 'Office Wear', price: 120, image: require('./assets/dress1.png') },
  { id: '2', name: 'Black', price: 120, image: require('./assets/dress2.png') },
  { id: '3', name: 'Church Wear', price: 120, image: require('./assets/dress3.png') },
  { id: '4', name: 'Lamarei', price: 120, image: require('./assets/dress4.png') },
  { id: '5', name: '21WN', price: 120, image: require('./assets/dress5.png') },
  { id: '6', name: 'Lopo', price: 120, image: require('./assets/dress6.png') },
  { id: '7', name: '21WN', price: 120, image: require('./assets/dress7.png') },
  { id: '8', name: 'Lame', price: 120, image: require('./assets/dress3.png') }
];

const Stack = createStackNavigator();

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} products={products} addToCart={addToCart} />}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {(props) => <CartScreen {...props} cartItems={cartItems} />}
        </Stack.Screen>
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;