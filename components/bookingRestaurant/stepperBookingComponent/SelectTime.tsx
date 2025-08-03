import { commonStyles } from "@/styles/commonStyles";
import { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import DatePicker from "./DatePicker";
import TimeSlotPicker from "./TimeSlotPicker";
import { ButtonIconCustom } from "@/components/button/ButtonIconCustom";
import { VALUE_DEFAULT } from "@/constants/Values";

const SelectTime = () => {
  const handleDateChange = (selectedDate: Date) => {
    console.log("Ngày đã chọn:", selectedDate);
  };
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [partySize, setPartySize] = useState(0);

  const handleDecrement = () => {
    if (partySize > 0) {
      setPartySize((partySize) => partySize - 1);
    } else {
      setPartySize(0);
    }
  };
  const handleIncrement = () => {
    setPartySize((partySize) => partySize + 1);
  };
  return (
    <View style={styles.container}>
      <View style={[commonStyles.card, commonStyles.marginBottom]}>
        <Text style={[commonStyles.subtitle, styles.title]}>Chọn Ngày</Text>
        <View>
          <DatePicker
            onDateChange={handleDateChange}
            minDate={new Date()} // Chỉ cho phép chọn ngày từ hôm nay
            maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)} // Tối đa 30 ngày sau
          />
        </View>
      </View>
      <View style={[commonStyles.card, commonStyles.marginBottom]}>
        <Text style={[commonStyles.subtitle, styles.title]}>Thời gian</Text>
        <View style={{ padding: 16 }}>
          <TimeSlotPicker
            selectedTime={selectedTime}
            onTimeSelect={(time) => {
              console.log("Giờ đã chọn:", time);
              setSelectedTime(time);
            }}
            interval={15} // Có thể thay đổi thành 15, 60 phút nếu cần
            timeStart={15} //có thể thay đổi thành giờ bắt đầu khác
            timeClose={19} // có thể thay đổi thành giờ bắt đầu khác
          />
        </View>
      </View>

      <View style={[commonStyles.card, commonStyles.marginBottom]}>
        <Text style={[commonStyles.subtitle, styles.title]}>Số Người</Text>
        <View style={styles.selectPartySize}>
          <ButtonIconCustom
            style={styles.button}
            iconName="arrow-back-ios-new"
            color="#fff"
            onPress={handleDecrement}
          />
          <View>
            <Text style={styles.input}>{partySize}</Text>
          </View>
          <ButtonIconCustom
            style={styles.button}
            iconName="arrow-forward-ios"
            onPress={handleIncrement}
            color="#fff"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    marginBottom: 16,
  },
  dateText: {
    marginTop: 20,
    fontSize: 18,
  },
  selectPartySize: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    borderRadius: 10,
    backgroundColor: VALUE_DEFAULT.PRIMARY_COLOR,
    padding: 10,
  },
  input: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_MEDIUM,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
});

export default SelectTime;
