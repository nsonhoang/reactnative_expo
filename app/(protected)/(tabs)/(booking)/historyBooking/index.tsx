import BottomSheetStatus from "@/components/booking/HistoryBooking/BottomSheetStatus";
import DateRangeSelector from "@/components/booking/HistoryBooking/DateRangePicker";
import Header from "@/components/booking/HistoryBooking/Header";
import HistoryBookingList from "@/components/booking/HistoryBooking/HistoryBookingList";
import { VALUE_DEFAULT } from "@/constants/Values";
import { MaterialIcons } from "@expo/vector-icons";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

import { useCallback, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export interface Booking {
  id: string;
  nameRestaurant: string;
  date: Date;
  status: string;
  idRestaurant: string;
}
export interface HistoryBookingProps {
  bookings: Booking[];
}
const Booking = [
  {
    id: "189767687",
    nameRestaurant: "Nhà hàng ABC",
    date: new Date(),
    status: "Đã xác nhận",
    idRestaurant: "123",
  },
  {
    id: "189767688",
    nameRestaurant: "Nhà hàng XYZ",
    date: new Date(),
    status: "Đã hủy",
    idRestaurant: "456",
  },
  {
    id: "3",
    nameRestaurant: "Nhà hàng DEF",
    date: new Date(),
    status: "Đang chờ",
    idRestaurant: "789",
  },
  {
    id: "4",
    nameRestaurant: "Nhà hàng Restaurant",
    date: new Date(),
    status: "Đã đặt",
    idRestaurant: "101",
  },
];

const HistoryBooking = () => {
  const ref = useRef<BottomSheetMethods>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>("Tất cả");

  const handleDateRangeSelected = (startDate: Date, endDate: Date) => {
    console.log("Ngày bắt đầu:", startDate);
    console.log("Ngày kết thúc:", endDate);
    // Xử lý dữ liệu ngày ở đây
  };
  // Hàm này sẽ được truyền xuống component con
  const handleStatusSelected = useCallback(
    (statusId: string | null) => {
      setSelectedStatus(statusId);
      console.log("Trạng thái được chọn:", statusId);
    },
    [selectedStatus]
  );

  const onPress = useCallback(() => {
    ref.current?.snapToIndex(0);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.containerClassify}>
          {/* nút hiện bottom sheet */}
          <TouchableOpacity onPress={onPress}>
            <View style={styles.status}>
              <Text style={styles.titleStatus}>{selectedStatus}</Text>
              <MaterialIcons
                style={styles.icon}
                size={VALUE_DEFAULT.FONTSIZE_DEFAULT}
                name="keyboard-arrow-down"
              />
            </View>
          </TouchableOpacity>
          {/* chọn thời gian */}
          <DateRangeSelector />
        </View>
        {/* Bottom sheet cho phép chọn trạng thái */}
        <BottomSheetStatus ref={ref} onConfirm={handleStatusSelected} />
        {/* phần nội dung list lịch sử đặt đơn */}
        <HistoryBookingList bookings={Booking} />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  backgroundColor: {},
  container: {
    flex: 1,
    paddingHorizontal: VALUE_DEFAULT.PADDING_HORIZONTAL,
    backgroundColor: "#ffff",
  },
  containerClassify: {
    flexDirection: "row",
    paddingVertical: VALUE_DEFAULT.PADDING_VERTICAL,
  },
  status: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
    marginRight: 10,
  },
  titleStatus: {
    fontSize: VALUE_DEFAULT.FONTSIZE_DEFAULT,
  },
  icon: {},
});

export default HistoryBooking;
