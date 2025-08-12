import React from "react";
import { Stack } from "expo-router";

const SearchLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          animation: "slide_from_left",
          title: "Search",
        }}
      />
    </Stack>
  );
};

export default SearchLayout;
