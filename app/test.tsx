import {
  getAuth,
  signInWithPhoneNumber,
  signOut,
} from "@react-native-firebase/auth";
import { useState } from "react";
import { Button, TextInput } from "react-native";

function TestComponent() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState("");

  // Handle login
  function handleAuthStateChanged(user) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
      console.log("User is signed in", user);
    }
  }

  // Handle the button press
  async function handleSignInWithPhoneNumber(phoneNumber) {
    try {
      const confirmation = await signInWithPhoneNumber(getAuth(), phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.log("Phone auth error:", error.code, error.message);

      switch (error.code) {
        case "auth/invalid-phone-number":
          alert("Số điện thoại không hợp lệ.");
          break;
        case "auth/quota-exceeded":
          alert("Đã vượt quá hạn mức gửi OTP. Vui lòng thử lại sau.");
          break;
        case "auth/too-many-requests":
          alert("Bạn đã gửi quá nhiều yêu cầu. Hãy chờ ít phút rồi thử lại.");
          break;
        case "auth/app-not-authorized":
          alert(
            "Ứng dụng chưa được cấu hình đúng trong Firebase Console (SHA1 hoặc Bundle ID)."
          );
          break;
        default:
          alert("Có lỗi xảy ra: " + error.message);
      }
    }
  }
  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log("Invalid code.");
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => {
          console.log("Button Pressed");
          handleSignInWithPhoneNumber("+84336066709");
        }}
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={(text) => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
      <Button
        title="Logout"
        onPress={() => {
          console.log("Logout Pressed");
          signOut(getAuth());
        }}
      ></Button>
      <Button
        title="Check user"
        onPress={() => {
          const user = getAuth().currentUser;
          console.log("Current user:", user);
        }}
      />
    </>
  );
}

export default TestComponent;
