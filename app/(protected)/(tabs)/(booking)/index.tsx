import BookingItem from "@/components/booking/BookingItem";
import { VALUE_DEFAULT } from "@/constants/Values";
import { useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";

const Booking = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <BookingItem
        icon="article"
        title="Lịch sử đặt đơn "
        onPress={() => {
          router.push("../historyBooking");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: VALUE_DEFAULT.PADDING_HORIZONTAL,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Booking;
