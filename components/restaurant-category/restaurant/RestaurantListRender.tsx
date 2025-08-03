import React, { useState } from "react";
import { FlatList, View, StyleSheet, ImageSourcePropType } from "react-native";
import RestaurantItem from "./RestaurantItem";

export interface Restaurant {
  id: string;
  name: string;
  image: ImageSourcePropType;
}

const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Pizza Palace",
    image: require("../../../assets/images/nhahang/nhahang1.jpg"),
  },
  {
    id: "2",
    name: "Sushi Central",
    image: require("../../../assets/images/nhahang/nhahang2.jpeg"),
  },
  {
    id: "3",
    name: "Burger House",
    image: require("../../../assets/images/nhahang/nhahang3.jpg"),
  },
  {
    id: "4",
    name: "Nhà hàng chăn nuôi thủy hải sản",
    image: require("../../../assets/images/nhahang/nhahang4.jpg"),
  },
];
const RestaurantListRender = () => {
  const [numColumns, setNumColumns] = useState(2);
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RestaurantItem id={item.id} name={item.name} image={item.image} />
        )}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        key={numColumns} // Thay đổi key prop
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  flatListContainer: {},
});

export default RestaurantListRender;
