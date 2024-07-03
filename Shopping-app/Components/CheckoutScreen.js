import React from 'react';
import { View, Text } from 'react-native';

const CheckoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>
      <Text style={styles.total}>EST. TOTAL: $240</Text>
      <Text style={styles.checkoutButton}>CHECKOUT</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  total: {
    fontSize: 18,
    marginBottom: 20,
  },
  checkoutButton: {
    fontSize: 18,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    color: '#ffffff',
  },
};

export default CheckoutScreen;