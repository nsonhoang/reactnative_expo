import Button from "@/components/button/Button";
import { ButtonIconCustom } from "@/components/button/ButtonIconCustom";
import InputOtp from "@/components/login/inputOtp";
import { VALUE_DEFAULT } from "@/constants/Values";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { AuthContext } from "@/utils/AuthContext";
import formatPhoneNumber from "@/utils/FormatPhoneNumber";
import { getAuth, signInWithPhoneNumber } from "@react-native-firebase/auth"; //authentication

function AuthLogin() {
  const { phoneNumber } = useLocalSearchParams();

  const [code, setCode] = useState(""); //mã OTP
  const [confirm, setConfirm] = useState(null); // If null, no SMS has been sent
  const [isReady, setIsReady] = useState(false); // trạng thái sẵn sàng
  // verification code (OTP - One-Time-Passcode)
  const router = useRouter();
  const translateX = useSharedValue(-VALUE_DEFAULT.WIDTH_ITEM);

  const authContext = useContext(AuthContext); // Lấy context auth

  //animation
  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  //lấy otp đăng nhập

  // chay hàm
  useEffect(() => {
    translateX.value = withTiming(0, {
      duration: 400,
      easing: Easing.out(Easing.cubic),
    });
    handleSignInWithPhoneNumber(phoneNumber);
  }, []);

  //nhập số
  const handleInput = (text: string) => {
    setCode(text);
    console.log("Code entered:", text);
  };
  const handleBack = () => {
    router.back();
  };

  // Handle login
  function handleAuthStateChanged(user: any) {
    if (user) {
      console.log("User is signed in", user);
    }
  }

  async function handleSignInWithPhoneNumber(phoneNumber: any) {
    try {
      const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
      console.log("sdt" + formattedPhoneNumber);
      const confirmation = await signInWithPhoneNumber(
        getAuth(),
        formattedPhoneNumber
      );
      console.log("Confirmation sent to:", formattedPhoneNumber);
      setConfirm(confirmation);
      setIsReady(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function confirmCode() {
    if (!confirm) {
      console.log("Chưa có confirmation");
      return;
    }
    try {
      await confirm.confirm(code);
      authContext.login(); // Gọi hàm login từ AuthContext
      console.log("Code confirmed successfully");
    } catch (error) {
      console.log("Invalid code.", error);
    }
  }

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={VALUE_DEFAULT.PRIMARY_COLOR} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Animated.View style={[styles.container, animationStyle]}>
        <View>
          <ButtonIconCustom
            iconName="arrow-back-ios"
            onPress={handleBack}
            style={styles.btnBack}
          />
        </View>
        <Text style={styles.headerTitle}>Xác nhận</Text>
        <InputOtp cellCount={6} onCodeFilled={handleInput} />
        <Button
          text="Xác nhận"
          onPress={confirmCode}
          style={styles.btnConfirm}
        />
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: VALUE_DEFAULT.PADDING_HORIZONTAL,
    backgroundColor: "white",
    flex: 1,
  },
  btnBack: {
    padding: 5,
  },
  headerTitle: {
    fontSize: VALUE_DEFAULT.SIZE_ICON_LARGE,
    padding: 10,
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  codeFiledRoot: {
    width: "70%",
  },
  cell: {
    borderRadius: 10,
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: VALUE_DEFAULT.SIZE_TITLE_MEDIUM,
    borderWidth: 2,
    borderColor: "grey",
    textAlign: "center",
  },
  focusCell: {
    borderColor: VALUE_DEFAULT.PRIMARY_COLOR,
  },
  btnConfirm: {
    marginBottom: 20,
  },
});

export default AuthLogin;
