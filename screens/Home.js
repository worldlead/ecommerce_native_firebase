import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { getDocs, collection } from 'firebase/firestore';
import app, { db } from '../Firebase';
import { Product } from '../components/Product';

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getDocs(collection(db, 'products'));
      setProducts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchProducts();
  }, []);

  const renderProduct = ({ item }) => {
    return (
      <Product 
        {...item}
        onPress={() => {
          navigation.navigate('ProductDetails', { item })
        }}
      />
    )
  }

  return (
    <View>
      <FlatList 
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
      />
    </View>
  )
  
}

export default Home;
