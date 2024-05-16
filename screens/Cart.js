import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { db } from "../Firebase";
import { getDocs, collection } from 'firebase/firestore';
const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const data = await getDocs(collection(db, 'cart'));
      setCart(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchCart();
  }, []);

  return (
    <View>
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartLine}>
            <Text style={styles.lineLeft}>{item.name}</Text>
            <Text style={styles.lineRight}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
  
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

export default Cart;
