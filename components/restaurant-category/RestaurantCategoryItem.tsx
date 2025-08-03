import { VALUE_DEFAULT } from "@/constants/Values";

import { useRouter } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export interface ItemCategory {
  image: ImageSourcePropType;
  categoryName: string;
}

const RestaurantCategoryItem = (props: ItemCategory) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: "./search/[id]", //sẽ còn thay đổi khi có thêm Stack SearchResult
            params: { id: props.categoryName },
          });
        }}
      >
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={props.image}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.title}>{props.categoryName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 100,

    borderRadius: 20,
    marginHorizontal: 5,
  },
  itemContainer: {
    flexDirection: "column",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: "#fff",
    borderRadius: 999,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Dành cho Android
    overflow: "hidden",
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: VALUE_DEFAULT.FONTSIZE_DEFAULT,
  },
});

export default RestaurantCategoryItem;
