import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const cartItems = [
  { id: '1', name: 'Office Wear', price: '$120' },
  { id: '2', name: 'Lamerei', price: '$120' },
  { id: '3', name: 'Church Wear', price: '$120' },
  
];

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <View style={styles.totalContainer}>
        <Text>EST. TOTAL</Text>
        <Text>$240</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.text}>CHECKOUT</Text>
        <Image source={require('../assets/shoppingBag.png')} style={styles.shoppingbag}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  checkoutButton: {
    height: 60,
    backgroundColor: 'black',
    marginBottom: 9,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 45,
  },
  shoppingbag: {
    width: 20,
    height: 20,
    tintColor: 'white',
    marginRight: 95,
    marginBottom: 10,

  }
});

export default CartScreen;
