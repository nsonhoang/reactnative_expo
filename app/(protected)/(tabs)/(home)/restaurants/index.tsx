import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const restaurants = [
  { id: "1", name: "Pizza Palace", cuisine: "Italian" },
  { id: "2", name: "Sushi World", cuisine: "Japanese" },
  { id: "3", name: "Burger House", cuisine: "American" },
];

const RestaurantScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurants</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.restaurantItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.cuisine}>{item.cuisine}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  restaurantItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
  },
  cuisine: {
    fontSize: 16,
    color: "#666",
  },
});
