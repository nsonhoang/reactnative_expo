import { VALUE_DEFAULT } from "@/constants/Values";
import { MaterialIcons } from "@expo/vector-icons";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Restaurant } from "./RestaurantListRender";
import { useRouter } from "expo-router";

const RestaurantItem: React.FC<Restaurant> = ({ id, name, image }) => {
  const isTrending = true;
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          router.push({
            pathname: "/restaurants/[id]",
            params: { id: id },
          });
        }}
      >
        <View style={styles.imageContainer}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.waitingTimeContainer}>
              <MaterialIcons
                name="schedule"
                size={VALUE_DEFAULT.FONTSIZE_DEFAULT + 2}
              ></MaterialIcons>
              <Text style={styles.waitingTimeText}>15 Phút Lên Món</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {name}
          </Text>
        </View>
        <View style={styles.locationContainer}>
          <View style={styles.location}>
            <MaterialIcons name="location-pin" />
            <Text style={styles.locationText}>Tp.Hồ Chí Minh</Text>
          </View>
          {isTrending && (
            <View style={styles.openTime}>
              <Text style={{ color: "red" }}>6:00 - 19:00</Text>
            </View>
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: VALUE_DEFAULT.WIDTH_ITEM * 0.47,
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    padding: 5,
    margin: 1,
  },
  imageContainer: {},
  image: {
    borderRadius: 20, // Áp dụng borderRadius
    overflow: "hidden", // Đảm bảo borderRadius hoạt động
    width: "100%",
    height: 150,
    justifyContent: "flex-end",
  },
  waitingTimeContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignSelf: "baseline",
    padding: 7,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  waitingTimeText: {
    fontSize: VALUE_DEFAULT.FONTSIZE_DEFAULT,
    padding: 2,
    marginLeft: 2,
  },

  titleContainer: {},
  title: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_SMALL,
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontWeight: "300",
    fontSize: VALUE_DEFAULT.FONTSIZE_DEFAULT,
  },
  openTime: {
    marginRight: 10,
  },
});

export default RestaurantItem;
