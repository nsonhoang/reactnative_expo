import { Image, StyleSheet, Text, View } from "react-native";

import { VALUE_DEFAULT } from "@/constants/Values";
import { Link, useRouter } from "expo-router";

import { ButtonIconCustom } from "@/components/button/ButtonIconCustom";

interface HomeHeaderProps {}

const HomeHeader: React.FC<HomeHeaderProps> = (props) => {
  const router = useRouter();

  const hasNotifications = true; // This should be replaced with actual logic to check for notifications
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/avartar-icon.png")}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Xin chào!</Text>
        <Link href="/(tabs)/(profile)" asChild>
          <Text style={styles.detail}>Nguyễn Sơn Hoàng</Text>
        </Link>
      </View>

      <ButtonIconCustom
        iconName="search"
        onPress={() => {
          router.navigate("/search");
        }}
        size={VALUE_DEFAULT.SIZE_ICON}
        style={styles.iconContainer}
      />
      <ButtonIconCustom
        iconName="notifications-none"
        color={VALUE_DEFAULT.COLOR_ICON}
        onPress={() => {
          router.navigate("/notifications");
        }}
        size={VALUE_DEFAULT.SIZE_ICON}
        style={styles.iconContainer}
      >
        {hasNotifications && (
          <View
            style={{
              position: "absolute",
              right: 3,
              top: -3,
              backgroundColor: "red",
              borderRadius: 999,
              width: 10,
              height: 10,
            }}
          />
        )}
      </ButtonIconCustom>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  gradientContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    borderWidth: 1,
    borderColor: "#fff",
    height: 50,
    width: 50,
    resizeMode: "contain",
    borderRadius: 999,
    backgroundColor: "#fff",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  title: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_SMALL,
    fontWeight: "ultralight",
    color: VALUE_DEFAULT.COLOR_TEXT,
  },
  detail: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_MEDIUM,
    fontWeight: "500",
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 999,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});

export default HomeHeader;
