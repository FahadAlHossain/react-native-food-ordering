import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@/assets/data/products";
import { defaultPizzaImg } from "@/src/components/ProductListItem";
import Colors from "@/src/constants/Colors";
import Button from "@/src/components/Button";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";

const ProductDetails = () => {
  const { id } = useLocalSearchParams();

  const router = useRouter();

  const {addItem} = useCart();

  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () =>{
    if(!product) return;

    addItem(product,selectedSize)
    router.push('/cart')
  }

  const sizes: PizzaSize[] = ["S", "M", "L", "XL"];


  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }}></Stack.Screen>
      <Image
        source={{ uri: product.image || defaultPizzaImg }}
        style={styles.image}
      ></Image>
      <Text style={styles.title}>{product.name}</Text>
      
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "white", padding: 10, flex: 1 },
  image: { width: "100%", aspectRatio: 1 },
  price: { fontSize: 18, fontWeight: "bold"},
  title: { fontSize: 20, fontWeight: "bold"},
});

export default ProductDetails;
