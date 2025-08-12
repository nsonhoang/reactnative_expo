import Button from "@/components/button/Button";
import { AuthContext } from "@/utils/AuthContext";
import React, { useContext } from "react";
import { Text, View } from "react-native";

export default function Login() {
  const authContext = useContext(AuthContext);
  return (
    <View>
      <Text>login</Text>
      <Button onPress={authContext.login} text="Login"></Button>
    </View>
  );
}
