import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { MaterialIcons } from "@expo/vector-icons";
import { VALUE_DEFAULT } from "@/constants/Values";
import { formatDate } from "@/utils/formatDate";

interface DatePickerProps {
  initialDate?: Date;
  onDateChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({
  initialDate = new Date(),
  onDateChange,
  minDate,
  maxDate,
}) => {
  const [date, setDate] = useState<Date>(initialDate);
  const [showPicker, setShowPicker] = useState<boolean>(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
      onDateChange(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dateContainer}
        onPress={() => setShowPicker(true)}
      >
        <MaterialIcons name="calendar-today" size={20} color="#555" />
        <Text style={styles.dateText}>{formatDate(date)}</Text>
        <MaterialIcons name="keyboard-arrow-down" size={20} color="#555" />
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChange}
          minimumDate={minDate}
          maximumDate={maxDate}
          locale="vi-VN"
          positiveButton={{
            label: "Chọn",
            textColor: VALUE_DEFAULT.PRIMARY_COLOR,
          }}
          negativeButton={{ label: "Hủy", textColor: "#999" }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#DDD",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dateText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default DatePicker;
