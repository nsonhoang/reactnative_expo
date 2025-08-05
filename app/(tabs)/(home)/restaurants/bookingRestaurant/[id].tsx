import HeaderRestaurantBooking from "@/components/bookingRestaurant/HeaderRestaurantBooking";
import ConfirmBooking from "@/components/bookingRestaurant/stepperBookingComponent/ConfirmBooking";
import FormInputInformation from "@/components/bookingRestaurant/stepperBookingComponent/FormInputInformation";
import SelectTime from "@/components/bookingRestaurant/stepperBookingComponent/SelectTime";
import StepperRestaurantBooking from "@/components/bookingRestaurant/StepperBookingRestaurant";
import Button from "@/components/button/Button";
import { VALUE_DEFAULT } from "@/constants/Values";
import { bookingReducer } from "@/hooks/useReducerBooking";
import { BookingState } from "@/model/typeBooking";
import { buttonStyles, colors, commonStyles } from "@/styles/commonStyles";
import { useLocalSearchParams, useSegments } from "expo-router";
import { useReducer } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";

const initialState: BookingState = {
  currentStep: 1,
  selectedDate: new Date(),
  selectedTime: "",
  selectedPartySize: 2,
  specialRequest: "",
  customerName: "",
  customerPhone: "",
  customerEmail: "",
};

const RestaurantBooking = () => {
  const { id, nameRestaurant } = useLocalSearchParams();
  const [state, dispatch] = useReducer(bookingReducer, initialState);
  const segments = useSegments();
  console.log("Tên màn hình:", segments);

  const handleBack = () => {
    if (state.currentStep > 1) {
      dispatch({ type: "PREV_STEP" });
    } else {
      console.log("Back button pressed");
    }
  };

  const handleNext = () => {
    if (state.currentStep === 1 && !state.selectedTime) {
      Alert.alert("Error", "Please select a time slot");
      return;
    }
    if (state.currentStep < 3) {
      dispatch({ type: "NEXT_STEP" });
      {
        console.log(state.selectedDate);
      }
    }
  };

  const handleConfirmBooking = () => {
    Alert.alert(
      "Booking Confirmed! 🎉",
      `Your table for  athas been booked for} at .\n\nA confirmation will be sent to your phone.`
    );
  };

  const renderStepContent = () => {
    switch (state.currentStep) {
      case 1:
        return (
          <SelectTime
            dispatch={dispatch}
            selectedDate={state.selectedDate}
            selectedTime={state.selectedTime}
            selectedPartySize={state.selectedPartySize}
          />
        );
      case 2:
        return (
          <FormInputInformation
            dispatch={dispatch}
            customerEmail={state.customerEmail}
            customerName={state.customerName}
            customerPhone={state.customerPhone}
            specialRequest={state.specialRequest}
          />
        );

      case 3:
        return (
          <ConfirmBooking
            customerEmail={state.customerEmail}
            customerName={state.customerName}
            customerPhone={state.customerPhone}
            specialRequest={state.specialRequest}
            selectedDate={state.selectedDate}
            selectedTime={state.selectedTime}
            selectedPartySize={state.selectedPartySize}
            nameRestaurant={nameRestaurant}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <HeaderRestaurantBooking />
      <StepperRestaurantBooking CurrentStep={state.currentStep} />

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
          {state.currentStep > 1 && (
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
            text={state.currentStep === 3 ? "Confirm Booking" : "Next"}
            onPress={
              state.currentStep === 3 ? handleConfirmBooking : handleNext
            }
            style={[
              buttonStyles.primary,
              {
                backgroundColor: VALUE_DEFAULT.PRIMARY_COLOR,
                flex: state.currentStep === 1 ? 1 : 2,
              },
            ]}
            textStyle={{
              color: colors.white,
              fontWeight: "600",
              fontSize: 16,
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
