import { AuthContext } from "@/utils/AuthContext";
import { Redirect, Stack } from "expo-router";
import { useContext } from "react";

export default function ProtectedLayout() {
  const authContext = useContext(AuthContext);
  // Replace with your authentication logic
  if (!authContext.isReady) {
    return null; // or a loading spinner
  }
  if (!authContext.isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      />
    </Stack>
  );
}
