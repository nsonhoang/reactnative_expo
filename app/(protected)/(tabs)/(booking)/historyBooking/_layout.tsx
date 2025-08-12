import { Stack } from "expo-router";

export default function HistoryBookingLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          contentStyle: { backgroundColor: "transparent" },
          title: "Lịch sử đặt bàn",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          contentStyle: { backgroundColor: "transparent" },
          title: "Lịch sử đặt bàn",
        }}
      />
    </Stack>
  );
}
