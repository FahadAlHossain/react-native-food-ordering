import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import { defaultPizzaImg } from "@/src/components/ProductListItem";
import Colors from "@/src/constants/Colors";

const ProductDetails = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id.toString() === id);

  const sizes = ['S','M','L','XL']

  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }}></Stack.Screen>
      <Image source={{ uri: product.image || defaultPizzaImg }} style={styles.image}></Image>
      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map(size => <View  key={size} style={styles.size}>
          <Text style={styles.sizeText}>{size}</Text>
        </View>)}
      </View>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "white", padding: 10, flex: 1 },
  image: { width: "100%", aspectRatio: 1 },
  price: { color: Colors.light.tint, fontSize:18, fontWeight: "bold" },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  size:{
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500'
  }
});

export default ProductDetails;
