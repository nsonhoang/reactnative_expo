import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

interface TimeSlotPickerProps {
  selectedTime?: string;
  onTimeSelect: (time: string) => void;
  interval?: number; // phút (mặc định 30)
  timeStart: number;
  timeClose: number;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  selectedTime,
  onTimeSelect,
  interval = 30,
  timeStart,
  timeClose,
}) => {
  // Tạo danh sách giờ từ 6:00 đến 19:00 với khoảng cách 30 phút
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = timeStart;
    const endHour = timeClose;
    const totalMinutes = (endHour - startHour) * 60;

    for (let minutes = 0; minutes <= totalMinutes; minutes += interval) {
      const hour = Math.floor(minutes / 60) + startHour;
      const minute = minutes % 60;
      const timeString = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      const displayTime = `${hour}:${minute.toString().padStart(2, "0")}`;

      slots.push({
        value: timeString,
        display: displayTime,
      });
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <View style={styles.container}>
      <FlatList
        data={timeSlots}
        keyExtractor={(item) => item.value}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.timeButton,
              selectedTime === item.value && styles.selectedTimeButton,
            ]}
            onPress={() => onTimeSelect(item.value)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === item.value && styles.selectedTimeText,
              ]}
            >
              {item.display}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },
  listContainer: {
    paddingHorizontal: 8,
  },
  timeButton: {
    flex: 1,
    margin: 4,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "30%",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  selectedTimeButton: {
    backgroundColor: "#FF6B6B",
    borderColor: "#FF6B6B",
  },
  timeText: {
    fontSize: 14,
    color: "#555",
  },
  selectedTimeText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default TimeSlotPicker;
