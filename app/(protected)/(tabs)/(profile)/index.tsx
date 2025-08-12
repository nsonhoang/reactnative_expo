import Button from "@/components/button/Button";
import { AuthContext } from "@/utils/AuthContext";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

const Profile = () => {
  const authContext = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <Text>Nhà hàng của bạn</Text>
      <Button text="Logout" onPress={authContext.logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Profile;
