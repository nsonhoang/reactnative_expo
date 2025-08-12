import { HistoryBookingProps } from "@/app/(protected)/(tabs)/(booking)/historyBooking";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import HistoryBookingItem from "./HistoryBookingItem";

const HistoryBookingList: React.FC<HistoryBookingProps> = ({ bookings }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={bookings}
        renderItem={({ item }) => (
          <HistoryBookingItem
            date={item.date}
            id={item.id}
            nameRestaurant={item.nameRestaurant}
            status={item.status}
            idRestaurant={item.idRestaurant}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HistoryBookingList;
