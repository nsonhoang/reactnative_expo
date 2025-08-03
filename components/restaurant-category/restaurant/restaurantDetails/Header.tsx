import { ButtonIconCustom } from "@/components/button/ButtonIconCustom";
import { VALUE_DEFAULT } from "@/constants/Values";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";

const HeaderRestaurantDetails = (props: { style: object }) => {
  const router = useRouter();

  const handlerBack = () => {
    router.back();
  };
  const handlerSearch = () => {
    router.push("/(tabs)/(home)/search");
  };
  return (
    <Animated.View style={[styles.headerContainer, props.style]}>
      <ButtonIconCustom
        iconName="arrow-back-ios-new"
        size={VALUE_DEFAULT.SIZE_ICON}
        onPress={handlerBack}
        style={styles.button}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bún Phở Bà Triệu</Text>
      </View>
      <ButtonIconCustom
        iconName="search"
        size={VALUE_DEFAULT.SIZE_ICON}
        onPress={handlerSearch}
        style={styles.button}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: VALUE_DEFAULT.PADDING_HORIZONTAL,
    backgroundColor: "#fff",
  },
  titleContainer: {},
  title: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_MEDIUM,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 50,
    padding: 5,
  },
});

export default HeaderRestaurantDetails;
