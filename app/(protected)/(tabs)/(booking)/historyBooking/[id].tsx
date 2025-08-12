import ConfirmBooking, {
  ConfirmBookingProps,
} from "@/components/bookingRestaurant/stepperBookingComponent/ConfirmBooking";
import { VALUE_DEFAULT } from "@/constants/Values";
import { commonStyles } from "@/styles/commonStyles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const historyBookingDetail: ConfirmBookingProps = {
  selectedDate: new Date(),
  selectedTime: "19:00",
  selectedPartySize: 4,
  specialRequest: "No spicy food",
  customerName: "John Doe",
  customerPhone: "123456789",
  customerEmail: "johndoe@example.com",
  nameRestaurant: "The Great Restaurant",
  idRestaurant: "123456",
};

const HistoryBookingDetail = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Hoặc nếu muốn quay lại sau khi đặt bàn xong:
  // router.push({
  //   pathname: "/(tabs)/(home)/restaurants/[id]",
  //   params: {
  //     id: idRestaurant,
  //     onSuccessBack: "true"
  //   },
  // });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ConfirmBooking {...historyBookingDetail} />

        {/* Trạng thái đặt chỗ */}
        <View style={[commonStyles.card, commonStyles.marginBottom]}>
          <Text style={[commonStyles.subtitle, { marginBottom: 8 }]}>
            Trạng thái
          </Text>
          <Text style={[commonStyles.textLight, styles.statusText]}>
            Đã hủy
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  rebookButton: {
    marginTop: 20,
    backgroundColor: VALUE_DEFAULT.PRIMARY_COLOR, // Sử dụng màu từ constants
  },
  statusText: {
    color: "red", // Màu cho trạng thái "Đã hủy"
    fontWeight: "500",
  },
});

export default HistoryBookingDetail;
