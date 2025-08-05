import { BookingAction } from "@/model/typeBooking";
import { commonStyles } from "@/styles/commonStyles";
import { formatDate } from "@/utils/formatDate";

import { StyleSheet, Text, View } from "react-native";

interface ConfirmBookingProps {
  selectedDate: Date;
  selectedTime: string;
  selectedPartySize: number;
  specialRequest: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  nameRestaurant: string | string[];
}

const ConfirmBooking: React.FC<ConfirmBookingProps> = ({
  selectedDate,
  selectedTime,
  selectedPartySize,
  specialRequest,
  customerName,
  customerPhone,
  customerEmail,
  nameRestaurant,
}) => {
  return (
    <View style={styles.container}>
      {/* Tóm Tắt Đặt Chỗ */}
      <View style={[commonStyles.card, commonStyles.marginBottom]}>
        <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>
          Tóm Tắt Đặt Chỗ
        </Text>

        <View style={[commonStyles.row, { marginBottom: 12 }]}>
          <Text style={commonStyles.text}>Nhà Hàng:</Text>
          <Text style={[commonStyles.text, { fontWeight: "600" }]}>
            {nameRestaurant}
          </Text>
        </View>

        <View style={[commonStyles.row, { marginBottom: 12 }]}>
          <Text style={commonStyles.text}>Ngày:</Text>
          <Text style={[commonStyles.text, { fontWeight: "600" }]}>
            {formatDate(selectedDate)}
          </Text>
        </View>

        <View style={[commonStyles.row, { marginBottom: 12 }]}>
          <Text style={commonStyles.text}>Giờ:</Text>
          <Text style={[commonStyles.text, { fontWeight: "600" }]}>
            {selectedTime}
          </Text>
        </View>

        <View style={[commonStyles.row, { marginBottom: 12 }]}>
          <Text style={commonStyles.text}>Số Lượng Khách:</Text>
          <Text style={[commonStyles.text, { fontWeight: "600" }]}>
            {selectedPartySize}
          </Text>
        </View>

        <View style={[commonStyles.row, { marginBottom: 12 }]}>
          <Text style={commonStyles.text}>Tên:</Text>
          <Text style={[commonStyles.text, { fontWeight: "600" }]}>
            {customerName}
          </Text>
        </View>

        <View style={[commonStyles.row, { marginBottom: 12 }]}>
          <Text style={commonStyles.text}>Điện Thoại:</Text>
          <Text style={[commonStyles.text, { fontWeight: "600" }]}>
            {customerPhone}
          </Text>
        </View>

        <View style={{ marginTop: 16 }}>
          <Text
            style={[commonStyles.text, { fontWeight: "600", marginBottom: 8 }]}
          >
            Yêu Cầu Đặc Biệt:
          </Text>

          <Text style={[commonStyles.textLight, { marginBottom: 4 }]}>
            {specialRequest}
          </Text>
        </View>
      </View>

      {/* Điều Khoản và Điều Kiện */}
      <View style={[commonStyles.card, commonStyles.marginBottom]}>
        <Text style={[commonStyles.subtitle, { marginBottom: 12 }]}>
          Thông Tin Quan Trọng
        </Text>
        <Text style={[commonStyles.textLight, { marginBottom: 8 }]}>
          • Vui lòng đến đúng giờ. Bàn sẽ được giữ trong 15 phút sau giờ đặt.
        </Text>
        <Text style={[commonStyles.textLight, { marginBottom: 8 }]}>
          • Việc hủy đặt chỗ phải được thực hiện ít nhất 2 giờ trước.
        </Text>
        <Text style={[commonStyles.textLight, { marginBottom: 8 }]}>
          • Nhóm đông có thể phải chịu phí tip tự động.
        </Text>
        <Text style={[commonStyles.textLight]}>
          • Vui lòng gọi trực tiếp đến nhà hàng để thay đổi đặt chỗ của bạn.
        </Text>
      </View>
    </View>
  );
};

export default ConfirmBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
