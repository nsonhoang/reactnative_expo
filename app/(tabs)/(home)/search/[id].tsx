import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import RestaurantItem from "@/components/restaurant-category/restaurant/RestaurantItem";

type Restaurant = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

const SearchResultScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<Restaurant[]>([]);

  useEffect(() => {
    setTimeout(() => {
      // Simulate fetching a list of restaurants
      setResult([
        {
          id: "1",
          name: "Pizza Palace",
          image: require("../../../../assets/images/nhahang/nhahang1.jpg"),
        },
        {
          id: "2",
          name: "Sushi Central",
          image: require("../../../../assets/images/nhahang/nhahang2.jpeg"),
        },
        {
          id: "3",
          name: "Burger House",
          image: require("../../../../assets/images/nhahang/nhahang3.jpg"),
        },
        {
          id: "4",
          name: "Nhà hàng chăn nuôi thủy hải sản",
          image: require("../../../../assets/images/nhahang/nhahang4.jpg"),
        },
      ]);
      setLoading(false);
      navigation.setOptions({ title: id });
    }, 1000);
  }, [id, navigation]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!result.length) {
    return (
      <View style={styles.center}>
        <Text>No restaurants found for {id}.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={result}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RestaurantItem id={item.id} name={item.name} image={item.image} />
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  restaurantItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    color: "#444",
  },
});

export default SearchResultScreen;
