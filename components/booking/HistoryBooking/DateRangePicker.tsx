import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate, formatDateHideWeekday } from "@/utils/formatDate";
import { VALUE_DEFAULT } from "@/constants/Values";
import { MaterialIcons } from "@expo/vector-icons";

const DateRangeSelector = () => {
  const [startDate, setStartDate] = useState<Date>(new Date(2025, 6, 22)); // 22/07/2025
  const [endDate, setEndDate] = useState<Date>(new Date(2025, 7, 21)); // 21/08/2025
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const handleStartChange = (event: any, selectedDate?: Date) => {
    setShowStartPicker(false);
    if (selectedDate) {
      setStartDate(selectedDate);
      if (selectedDate > endDate) {
        setEndDate(selectedDate);
      }
    }
  };

  const handleEndChange = (event: any, selectedDate?: Date) => {
    setShowEndPicker(false);
    if (selectedDate && selectedDate >= startDate) {
      setEndDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      {/* Hiển thị khoảng ngày */}
      <View style={styles.displayContainer}>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowStartPicker(true)}
        >
          <Text style={styles.dateText}>
            {formatDateHideWeekday(startDate)}
          </Text>
        </TouchableOpacity>

        <Text style={styles.separator}>-</Text>

        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowEndPicker(true)}
        >
          <Text style={styles.dateText}>{formatDateHideWeekday(endDate)}</Text>
        </TouchableOpacity>
        <MaterialIcons
          name="date-range"
          size={VALUE_DEFAULT.SIZE_TITLE_SMALL}
          style={styles.icon}
        />
      </View>

      {/* Date Pickers */}
      {showStartPicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="calendar"
          onChange={handleStartChange}
          minimumDate={new Date(2025, 0, 1)}
          maximumDate={new Date(2025, 11, 31)}
        />
      )}

      {showEndPicker && (
        <DateTimePicker
          value={endDate}
          mode="date"
          display="calendar"
          onChange={handleEndChange}
          minimumDate={startDate}
          maximumDate={new Date(2025, 11, 31)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  displayContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
  dateButton: {
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  dateText: {
    fontSize: VALUE_DEFAULT.FONTSIZE_DEFAULT,
    color: "#333",
  },
  separator: {
    fontSize: 16,
  },
  icon: {
    padding: 3,
  },
});

export default DateRangeSelector;
