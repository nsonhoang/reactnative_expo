import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const notifications = [
  { id: "1", title: "Welcome!", message: "Thanks for joining our app." },
  {
    id: "2",
    title: "Update",
    message: "Your profile was updated successfully.",
  },
  {
    id: "3",
    title: "Reminder",
    message: "Don't forget to check today's deals!",
  },
];

const NotificationItem = ({
  title,
  message,
}: {
  title: string;
  message: string;
}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.message}>{message}</Text>
  </View>
);

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem title={item.title} message={item.message} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No notifications</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 16,
  },
  item: {
    backgroundColor: "#f1f1f1",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: "#555",
  },
  empty: {
    textAlign: "center",
    marginTop: 32,
    color: "#888",
    fontSize: 16,
  },
});
