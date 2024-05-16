import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase';

const ProductDetails = ({ route, navigation }) => {
  const { item } = route.params;

  const onAddToCart = async () => {
    const newCartRef = doc(collection(db, 'cart'));
    await setDoc(newCartRef, item);
    navigation.navigate('Cart');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={{ uri: `${item.image}`}}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>$ {item.price}</Text>
          <Text style={styles.description}>{item.description}</Text>
            <Button
            onPress={onAddToCart}
            title="Add to cart"
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});
export default ProductDetails;