import { Booking } from "@/app/(protected)/(tabs)/(booking)/historyBooking";
import { VALUE_DEFAULT } from "@/constants/Values";
import { formatDateHideWeekday } from "@/utils/formatDate";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const HistoryBookingItem: React.FC<Booking> = ({
  date,
  id,
  nameRestaurant,
  status,
}) => {
  const router = useRouter();

  // Hàm xử lý khi người dùng nhấn vào mục đặt bàn
  const handleBooking = () => {
    router.push({
      pathname: "./historyBooking/[id]",
      params: { id },
    });
  };
  return (
    <Pressable onPress={handleBooking}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            source={require("../../../assets/images/nhahang/nhahang1.jpg")}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.inforBooking}>ID: {id}</Text>
            <Text
              style={styles.nameRestaurant}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {nameRestaurant}
            </Text>
            <Text style={styles.inforBooking}>
              Thời gian đến: {formatDateHideWeekday(date)}
            </Text>
          </View>
        </View>
        <View style={styles.statusContainer}>
          <Text>{status}</Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Đặt lại</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: VALUE_DEFAULT.SECONDARY_COLOR,
    height: 150,
    paddingHorizontal: VALUE_DEFAULT.PADDING_HORIZONTAL,
    paddingVertical: VALUE_DEFAULT.PADDING_VERTICAL,
    borderRadius: 10,
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingBottom: 10,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    height: 80,
    justifyContent: "space-between",
    padding: 5,
  },
  inforBooking: {
    fontSize: VALUE_DEFAULT.FONTSIZE_DEFAULT,
  },
  nameRestaurant: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_SMALL,
    fontWeight: "400",
  },

  statusContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: VALUE_DEFAULT.PRIMARY_COLOR,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});

export default HistoryBookingItem;
