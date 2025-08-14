import Button from "@/components/button/Button";
import { ButtonIconCustom } from "@/components/button/ButtonIconCustom";
import InputOtp from "@/components/login/inputOtp";
import { VALUE_DEFAULT } from "@/constants/Values";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

function AuthLogin() {
  const [otpValue, setOtpValue] = useState("");

  const handleVerify = () => {
    console.log("OTP Value: ");
  };
  console.log("AuthLogin rendered");

  const handleInput = (text: string) => {
    console.log("Input OTP: ", text);
  };

  return (
    <View style={styles.container}>
      <View>
        <ButtonIconCustom
          iconName="arrow-back-ios"
          onPress={() => {}}
          style={styles.btnBack}
        />
      </View>
      <Text style={styles.headerTitle}>Xác nhận</Text>
      <InputOtp cellCount={6} onCodeFilled={handleInput} />
      <Button text="Xác nhận" onPress={() => {}} />
    </View>
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
});

export default AuthLogin;
