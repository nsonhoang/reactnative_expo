import { IconSymbol } from "@/components/ui/IconSymbol";
import { VALUE_DEFAULT } from "@/constants/Values";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: VALUE_DEFAULT.PRIMARY_COLOR,
        tabBarInactiveTintColor: VALUE_DEFAULT.SECONDARY_COLOR,
        tabBarStyle: {
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
      <Tabs.Screen
        name="(setting)"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="gear.circle.fill" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
