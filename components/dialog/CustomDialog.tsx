import { VALUE_DEFAULT } from "@/constants/Values";
import { LinearGradientProps } from "expo-linear-gradient";
import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../button/Button";

const CustomDialog = ({
  visible,
  title,
  message,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryPress,
  onSecondaryPress,
  gradientColors = ["#FF6B6B", "#FF8E8E"],
}: {
  visible: boolean;
  title: string;
  message: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryPress: () => void;
  onSecondaryPress: () => void;
  gradientColors?: LinearGradientProps["colors"];
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onSecondaryPress}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView]}>
          {/* Header với Gradient */}

          <View style={styles.dialogHeader}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
          {/* Nội dung */}
          <View style={styles.dialogBody}>
            <Text style={styles.messageText}>{message}</Text>
          </View>

          {/* Footer với nút bấm */}
          <View style={styles.dialogFooter}>
            {secondaryButtonText && (
              <TouchableOpacity
                style={[styles.button, styles.secondaryButton]}
                onPress={onSecondaryPress}
              >
                <Text style={styles.secondaryButtonText}>
                  {secondaryButtonText}
                </Text>
              </TouchableOpacity>
            )}

            <Button
              text={primaryButtonText}
              onPress={onPrimaryPress}
              style={styles.primaryButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 5,
  },
  dialogHeader: {
    backgroundColor: VALUE_DEFAULT.PRIMARY_COLOR,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  dialogBody: {
    padding: 20,
  },
  messageText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    lineHeight: 22,
  },
  dialogFooter: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  button: {
    paddingVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginLeft: 10,
    minWidth: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#FF6B6B",
    padding: 20,
  },
  secondaryButton: {
    backgroundColor: "#f5f5f5",
  },
  gradientButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButtonText: {
    color: "white",
    fontWeight: "600",
  },
  secondaryButtonText: {
    color: "#666",
    fontWeight: "600",
  },
});

export default CustomDialog;
