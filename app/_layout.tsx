import { AuthProvider } from "@/utils/AuthContext";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Main Stack for the app */}

      <AuthProvider>
        <Stack>
          <Stack.Screen
            name="(protected)"
            options={{
              headerShown: false,
              contentStyle: { backgroundColor: "transparent" },
            }}
          />
          <Stack.Screen
            name="login"
            options={{
              animation: "none",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="authLogin"
            options={{
              animation: "none",
              headerShown: false,
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </AuthProvider>
    </SafeAreaView>
  );
}
