import { IconSymbol } from "@/components/ui/IconSymbol";
import { VALUE_DEFAULT } from "@/constants/Values";
import { Tabs, useSegments } from "expo-router";

const hiddenRoutes = [
  ["(protected)", "(tabs)", "(home)", "restaurants", "[id]"],
  [
    "(protected)",
    "(tabs)",
    "(home)",
    "restaurants",
    "bookingRestaurant",
    "[id]",
  ],
  ["(protected)", "(tabs)", "(booking)", "historyBooking"],
  ["(protected)", "(tabs)", "(booking)", "historyBooking", "[id]"],
];
export const unstable_settings = {
  tabBarOrder: ["1-home", "2-booking", "3-profile"], // ← Khai báo thứ tự tại đây
};

export default function TabLayout() {
  const segments = useSegments();
  const shouldHideTabBar = hiddenRoutes.some(
    (hiddenRoute) => JSON.stringify(hiddenRoute) === JSON.stringify(segments)
  );
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: VALUE_DEFAULT.PRIMARY_COLOR,
        tabBarInactiveTintColor: VALUE_DEFAULT.SECONDARY_COLOR,
        tabBarStyle: {
          display: shouldHideTabBar ? "none" : "flex",
          marginBottom: 10,
          position: "absolute",
          height: 80,
          borderWidth: 1,
          borderRadius: 999,
          backgroundColor: "#FFF",
          elevation: 4, // Android shadow
          shadowColor: "#000", // iOS shadow
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          paddingTop: 10,
          marginHorizontal: 10,
        },
      }}
      initialRouteName="(home)"
      backBehavior="history"
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="house.fill" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(booking)"
        options={{
          title: "Booking",
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="book.fill" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="person.fill" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
