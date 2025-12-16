import Button from "@/components/button/Button";
import ItemOption from "@/components/profile/ItemOption";
import { VALUE_DEFAULT } from "@/constants/Values";
import { AuthContext } from "@/utils/AuthContext";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
      {/* cac item */}
      <ItemOption
        nameIcon="settings"
        size={VALUE_DEFAULT.SIZE_ICON}
        title="Cài Đặt"
        onPress={() => console.log("alo")}
      />
      <ItemOption
        nameIcon="feedback"
        size={VALUE_DEFAULT.SIZE_ICON}
        title="Đánh giá ứng dụng"
        onPress={() => console.log("alo")}
      />
      <ItemOption
        nameIcon="info"
        size={VALUE_DEFAULT.SIZE_ICON}
        title="Thông tin về chúng tôi"
        onPress={() => console.log("alo")}
      />
      <Button
        style={{ marginTop: 10 }}
        text="Logout"
        onPress={authContext.logout}
      />
    </View>
  );
  //   return (
  //     <ParallaxScrollView
  //       headerImage={
  //         <Image
  //           source={{ uri: "https://picsum.photos/600/300" }}
  //           style={{ width: "100%", height: "100%", resizeMode: "cover" }}
  //         />
  //       }
  //       headerBackgroundColor={{ light: "#fff", dark: "#fff" }}
  //     >
  //       <Text style={{ backgroundColor: "#fff", fontSize: 20, height: 1000 }}>
  //         Nội dung bên dưới header
  //       </Text>
  //       <Text style={{ fontSize: 20 }}>Kéo xuống để thấy hiệu ứng</Text>
  //       <Text style={{ fontSize: 20 }}>React Native Parallax</Text>
  //     </ParallaxScrollView>
  //   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: VALUE_DEFAULT.PADDING_HORIZONTAL,
    paddingVertical: VALUE_DEFAULT.PADDING_VERTICAL,
  },
  cardUser: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: VALUE_DEFAULT.SECONDARY_COLOR,
    padding: 5,
    height: 70,
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
