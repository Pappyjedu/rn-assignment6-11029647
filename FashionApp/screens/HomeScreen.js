import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../screens/Header';

const products = [
  { id: '1', name: 'Office Wear', price: '$120', image: require('../assets/dress1.png') },
  { id: '2', name: 'Black', price: '$120', image: require('../assets/dress2.png')  },
  { id: '3', name: 'Church Wear', price: '$120', image: require('../assets/dress2.png')  },
  { id: '4', name: 'Lamarei', price: '$120', image: require('../assets/dress3.png')  },
  { id: '5', name: '21WN', price: '$120', image: require('../assets/dress4.png')  },
  { id: '6', name: 'Lopo', price: '$120', image: require('../assets/dress5.png') },
  { id: '7', name: '21WN', price: '$120', image: require('../assets/dress6.png')  },
  { id: '8', name: 'Lamarei', price: '$120', image: require('../assets/dress3.png') },
  
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const addToCart = (product) => {
    // Add the product to the cart
    navigation.navigate('Cart');
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image 
        source={item.image} 
        style={styles.productImage} 
        resizeMode='contain'
        onError={(e) => console.log(`Failed to load image: ${item.image}`, e)}
      />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <TouchableOpacity onPress={() => addToCart(item)} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
       <Header />
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}  // Set the number of columns to 2
        columnWrapperStyle={styles.row}  // Styling for each row
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  row: {
    flex: 1,
    justifyContent: "space-around"
  },
  productContainer: {
    flex: 1,
    marginBottom: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default HomeScreen;
