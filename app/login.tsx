import Button from "@/components/button/Button";
import CustomDialog from "@/components/dialog/CustomDialog";
import { VALUE_DEFAULT } from "@/constants/Values";
import { colors } from "@/styles/commonStyles";
import { AuthContext } from "@/utils/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function Login() {
  const authContext = useContext(AuthContext);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();
  // Load custom fonts

  const translateY = useSharedValue(-VALUE_DEFAULT.HEIGHT_ITEM);

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    translateY.value = withTiming(0, {
      duration: 800,
      easing: Easing.out(Easing.cubic),
    });
  }, [translateY]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Animated.View style={[styles.container, animationStyle]}>
          {/* Header with Gradient Background */}
          <LinearGradient
            colors={["#FF6B6B", "#FF8E8E"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.headerContainer}
          >
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>Eat now</Text>
              <Text style={styles.subtitle}>Đặt chỗ & Ăn ngay</Text>
            </View>

            <Image
              source={require("@/assets/images/masterCheft.png")}
              style={styles.image}
            />
          </LinearGradient>

          {/* Main Content */}
          <View style={styles.contentContainer}>
            <View style={styles.contentTextContainer}>
              <Text style={styles.promptTitle}>Nhập sô điện thoại</Text>
              <Text style={styles.promptDescription}>
                Chúng tôi sẽ sử dụng thông tin này để giúp bạn đăng nhập và sử
                dụng ứng dụng
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Số Điện Thoại"
                placeholderTextColor={colors.textLight}
                keyboardType="phone-pad" // Để hiển thị bàn phím số điện thoại
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
              <Button
                style={styles.button}
                text="Tiếp tục"
                onPress={() => setShowDialog(true)}
              />
            </View>
            <CustomDialog
              visible={showDialog}
              title="Xác nhận số điện thoại"
              message={`Mã OTP sẽ được gửi về số điện thoại ${phoneNumber} `}
              primaryButtonText="Tiếp tục"
              secondaryButtonText="Hủy"
              onPrimaryPress={() => {
                router.push("./authLogin");

                setShowDialog(false);
              }}
              onSecondaryPress={() => setShowDialog(false)}
            />
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    height: 220,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Roboto-Bold",
    fontStyle: "italic",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    fontFamily: "Roboto-Medium",
    fontStyle: "italic",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  image: {
    height: 160,
    width: 160,
    borderRadius: 12,
    resizeMode: "contain",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  contentTextContainer: {
    width: "70%",
  },
  promptTitle: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_LARGE,
    fontWeight: "400",
  },
  promptDescription: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_SMALL,
    color: VALUE_DEFAULT.PRIMARY_COLOR,
    marginTop: 8,
  },
  inputContainer: {
    marginTop: 16,
    justifyContent: "space-between",
    flex: 1,
  },
  input: {
    fontSize: VALUE_DEFAULT.SIZE_TITLE_SMALL,
    fontWeight: "500",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "grey",
    color: colors.textLight,
  },
  button: {
    marginBottom: 16,
  },
});
