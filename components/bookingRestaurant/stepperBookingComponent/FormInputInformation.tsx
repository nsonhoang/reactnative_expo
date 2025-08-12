import { BookingAction } from "@/model/typeBooking";
import { colors, commonStyles } from "@/styles/commonStyles";
import React from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface FormInputProps {
  dispatch: React.Dispatch<BookingAction>;
  specialRequest: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
}

const FormInputInformation: React.FC<FormInputProps> = ({
  dispatch,
  customerName,
  customerEmail,
  customerPhone,
  specialRequest,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          commonStyles.card,
          commonStyles.marginBottom,
          styles.contactContainer,
        ]}
      >
        <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>
          Thông tin liên lạc
        </Text>

        {/* Container input full name */}
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{ marginBottom: 16 }}>
            <Text style={[commonStyles.textLight, { marginBottom: 8 }]}>
              Full Name *
            </Text>
            <TextInput
              style={{
                backgroundColor: colors.backgroundAlt,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderWidth: 1,
                borderColor: colors.border,
                color: colors.textLight,
              }}
              placeholder="Enter your full name"
              placeholderTextColor={colors.textLight}
              value={customerName}
              onChangeText={(text) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "customerName",
                  value: text,
                })
              }
            />
          </View>
        </TouchableWithoutFeedback>

        {/* Container input phone */}
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{ marginBottom: 16 }}>
            <Text style={[commonStyles.textLight, { marginBottom: 8 }]}>
              Phone Number *
            </Text>
            <TextInput
              style={{
                backgroundColor: colors.backgroundAlt,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderWidth: 1,
                borderColor: colors.border,
                color: colors.textLight,
              }}
              placeholder="Phone Number"
              placeholderTextColor={colors.textLight}
              keyboardType="phone-pad" // Để hiển thị bàn phím số
              value={customerPhone}
              onChangeText={(phone) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "customerPhone",
                  value: phone,
                })
              }
            />
          </View>
        </TouchableWithoutFeedback>

        {/* Container input Email */}
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{ marginBottom: 16 }}>
            <Text style={[commonStyles.textLight, { marginBottom: 8 }]}>
              Email *
            </Text>
            <TextInput
              style={{
                backgroundColor: colors.backgroundAlt,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderWidth: 1,
                borderColor: colors.border,
                color: colors.textLight,
              }}
              placeholder="Email"
              placeholderTextColor={colors.textLight}
              keyboardType="email-address" // Để hiển thị bàn phím email
              value={customerEmail}
              onChangeText={(email) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "customerEmail",
                  value: email,
                })
              }
            />
          </View>
        </TouchableWithoutFeedback>

        {/* Container input note */}
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <Text style={[commonStyles.textLight, { marginBottom: 8 }]}>
              Additional Notes
            </Text>
            <TextInput
              style={{
                backgroundColor: colors.backgroundAlt,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderWidth: 1,
                borderColor: colors.border,
                minHeight: 80,
                color: colors.text,
              }}
              placeholder="Any additional requests or dietary restrictions..."
              placeholderTextColor={colors.text}
              multiline // Cho phép nhập nhiều dòng
              value={specialRequest}
              onChangeText={(note) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "specialRequest",
                  value: note,
                })
              }
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  contactContainer: {
    flexDirection: "column",
  },
});

export default FormInputInformation;
