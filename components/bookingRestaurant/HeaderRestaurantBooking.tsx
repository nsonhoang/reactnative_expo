import { Alert, StyleSheet, Text, View } from "react-native";
import { ButtonIconCustom } from "../button/ButtonIconCustom";
import { VALUE_DEFAULT } from "@/constants/Values";
import { useRouter } from "expo-router";

const HeaderRestaurantBooking = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ButtonIconCustom
        iconName="arrow-back"
        onPress={() => router.back()}
        color="#d3a476"
        style={styles.iconBack}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Đặt Bàn Ngay</Text>
      </View>
      <ButtonIconCustom
        iconName="info"
        onPress={() => Alert.alert("alo")}
        color="#fff"
        style={styles.iconHelp}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#d3a476",
    height: 70,
    alignItems: "center",
    justifyContent: "space-between",
    padding: VALUE_DEFAULT.PADDING_HORIZONTAL,
  },
  iconBack: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 3,
  },
  iconHelp: {
    backgroundColor: "#8d4514",
    borderRadius: 50,
    padding: 3,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_MEDIUM,
    color: "white",
    fontWeight: "bold",
  },
  titleAction: {
    color: "white",
    fontSize: VALUE_DEFAULT.FONTSIZE_DEFAULT,
  },
});
export default HeaderRestaurantBooking;
