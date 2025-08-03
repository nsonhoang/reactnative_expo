import { FlatList, StyleSheet, View } from "react-native";
import RestaurantCategoryItem, { ItemCategory } from "./RestaurantCategoryItem";

const RestaurantCategoryImages: ItemCategory[] = [
  {
    categoryName: "Lẩu",
    image: require("../../assets/images/logoRestaurantCategory/lau.png"),
  },
  {
    categoryName: "Nướng",
    image: require("../../assets/images/logoRestaurantCategory//nuong.png"),
  },
  {
    categoryName: "Buffet",
    image: require("../../assets/images/logoRestaurantCategory/buffet.png"),
  },
];

const RestaurantCategoryRender = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={RestaurantCategoryImages}
        renderItem={({ item }) => (
          <RestaurantCategoryItem
            categoryName={item.categoryName}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.categoryName}
        horizontal
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default RestaurantCategoryRender;
