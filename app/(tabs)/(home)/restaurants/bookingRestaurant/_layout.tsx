import { Stack } from "expo-router";

const LayoutBookingRestaurant = () => {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default LayoutBookingRestaurant;
