import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from AsyncStorage
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    try {
      const storedCart = await AsyncStorage.getItem('cart');
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    saveCartItems();
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    saveCartItems();
  };

  const saveCartItems = async () => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
      />
      <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
      <Button title="Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productName: {
    fontSize: 18,
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default CartScreen;