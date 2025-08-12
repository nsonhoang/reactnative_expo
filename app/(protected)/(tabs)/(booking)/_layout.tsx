import { Stack, useSegments } from "expo-router";

export default function BookingLayout() {
  const segments = useSegments();
  console.log(segments);
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      />
      <Stack.Screen
        name="historyBooking"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
