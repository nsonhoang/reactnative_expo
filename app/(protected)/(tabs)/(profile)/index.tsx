import Button from "@/components/button/Button";
import { VALUE_DEFAULT } from "@/constants/Values";
import { commonStyles } from "@/styles/commonStyles";
import { AuthContext } from "@/utils/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Profile = () => {
  const authContext = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.cardUser}>
          <Image
            source={require("../../../../assets//images/avartar-icon.png")}
            style={styles.imageUser}
          />
          <Text style={styles.useName}>Nguyễn Sơn Hoàng</Text>
        </View>
      </TouchableOpacity>
      <Pressable>
        <View
          style={[
            commonStyles.card,
            commonStyles.marginBottom,
            styles.cardItem,
          ]}
        >
          <MaterialIcons
            size={VALUE_DEFAULT.SIZE_ICON}
            name="settings"
            style={styles.itemIcon}
          />
          <Text style={styles.title}>Cài đặt</Text>
        </View>
      </Pressable>
      <Button
        style={{ marginTop: 10 }}
        text="Logout"
        onPress={authContext.logout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: VALUE_DEFAULT.PADDING_HORIZONTAL,
  },
  cardUser: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: VALUE_DEFAULT.SECONDARY_COLOR,
    padding: 5,
    height: 100,
    borderRadius: 20,
  },
  imageUser: {
    borderWidth: 1,
    borderColor: "#fff",
    height: 50,
    width: 50,
    resizeMode: "contain",
    borderRadius: 999,
    backgroundColor: "#fff",
  },
  useName: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_LARGE,
    fontWeight: "bold",
    marginLeft: 10,
  },
  itemIcon: {},
  cardItem: {
    borderWidth: 1,
    borderColor: VALUE_DEFAULT.SECONDARY_COLOR,
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_MEDIUM,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default Profile;
