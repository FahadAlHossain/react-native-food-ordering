import { Text, StyleSheet, Image, Pressable } from "react-native";
import Colors from "@/src/constants/Colors";
import { Product } from "../types";
import { Link } from "expo-router";

export const defaultPizzaImg =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link
      href={{ pathname: "/menu/[id]", params: { id: `${product.id}` } }}
      asChild
    >
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultPizzaImg }}
          style={styles.image}
          resizeMode="contain"
        ></Image>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});

export default ProductListItem;
