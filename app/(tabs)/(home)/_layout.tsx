import HomeHeader from "@/components/home/header/Header";
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          contentStyle: { backgroundColor: "transparent" },
          header: (props) => <HomeHeader {...props} />, // Custom header for the home screen
        }}
      />
      <Stack.Screen
        name="notifications"
        options={{
          headerShown: true,
          contentStyle: { backgroundColor: "transparent" },
          presentation: "modal",
          title: "Notifications",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="search"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
          title: "Search",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="restaurants"
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </Stack>
  );
}
