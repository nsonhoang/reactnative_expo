import { ButtonIconCustom } from "@/components/button/ButtonIconCustom";
import { VALUE_DEFAULT } from "@/constants/Values";
import { useRouter } from "expo-router";

import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={[styles.containerBtnBack, styles.commonWidth]}>
        <ButtonIconCustom
          iconName="arrow-back-ios"
          onPress={() => {
            router.back();
          }}
        />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Lịch sử đặt đơn</Text>
      </View>
      <View style={styles.commonWidth}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBtnBack: {
    padding: 5,
  },
  containerTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_MEDIUM,
    fontWeight: "bold",
  },
  commonWidth: {
    width: 40,
  },
});

export default Header;
