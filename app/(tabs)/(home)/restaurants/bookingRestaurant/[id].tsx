import HeaderRestaurantBooking from "@/components/bookingRestaurant/HeaderRestaurantBooking";
import FormInputInformation from "@/components/bookingRestaurant/stepperBookingComponent/FormInputInformation";
import SelectTime from "@/components/bookingRestaurant/stepperBookingComponent/SelectTime";
import StepperRestaurantBooking from "@/components/bookingRestaurant/StepperBookingRestaurant";
import Button from "@/components/button/Button";
import { VALUE_DEFAULT } from "@/constants/Values";
import { buttonStyles, colors, commonStyles } from "@/styles/commonStyles";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";

const RestaurantBooking = () => {
  const { id, nameRestaurant } = useLocalSearchParams();
  const [currentStep, setCurrentStep] = useState(1);

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      console.log("Back button pressed");
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleConfirmBooking = () => {
    Alert.alert(
      "Booking Confirmed! 🎉",
      `Your table for  athas been booked for} at .\n\nA confirmation will be sent to your phone.`
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <SelectTime />;
      case 2:
        return <FormInputInformation />;
    }
  };

  return (
    <View style={styles.container}>
      <HeaderRestaurantBooking />
      <StepperRestaurantBooking CurrentStep={currentStep} />

      <ScrollView style={styles.scrollView}>
        {/* step 1 chọn thời gian */}
        <View style={[commonStyles.card, commonStyles.marginBottom]}>
          <Text style={[commonStyles.subtitle, { marginBottom: 8 }]}>
            {id}
            {nameRestaurant}
          </Text>
          <Text style={commonStyles.textLight}>
            Booking a table for your dining experience
          </Text>
        </View>
        {renderStepContent()}
        {/* Action Buttons */}
        <View style={styles.btnContainer}>
          {currentStep > 1 && (
            <Button
              text="Previous"
              onPress={handleBack}
              style={[
                buttonStyles.secondary,
                {
                  backgroundColor: "#fff",
                  flex: 1,
                },
              ]}
              textStyle={{
                color: colors.text,
                fontWeight: "600",
              }}
            />
          )}

          <Button
            text={currentStep === 3 ? "Confirm Booking" : "Next"}
            onPress={currentStep === 3 ? handleConfirmBooking : handleNext}
            style={[
              buttonStyles.primary,
              {
                backgroundColor: VALUE_DEFAULT.PRIMARY_COLOR,
                flex: currentStep === 1 ? 1 : 2,
              },
            ]}
            textStyle={{
              color: colors.white,
              fontWeight: "600",
              fontSize: 16,
              position: "absolute",
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf4e4",
  },
  choseTimeContainer: {},
  scrollView: {
    paddingHorizontal: VALUE_DEFAULT.PADDING_HORIZONTAL,
  },
  card: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    width: "100%",
    boxShadow: `0px 2px 8px ${colors.shadow}`,
    elevation: 3,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
    paddingBottom: VALUE_DEFAULT.PADDING_BOTTOM,
  },
});

export default RestaurantBooking;
