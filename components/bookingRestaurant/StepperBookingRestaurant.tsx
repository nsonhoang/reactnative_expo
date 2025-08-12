import { VALUE_DEFAULT } from "@/constants/Values";
import { StyleSheet, Text, View } from "react-native";

interface StepperRestaurantBookingProps {
  CurrentStep: number; // Định nghĩa kiểu cho prop step
}

const StepperRestaurantBooking: React.FC<StepperRestaurantBookingProps> = ({
  CurrentStep,
}) => {
  return (
    <View style={styles.container}>
      {[1, 2, 3].map((step) => (
        <View key={step} style={styles.stepContainer}>
          <View
            style={{
              ...styles.stepCircle,
              backgroundColor:
                step <= CurrentStep ? VALUE_DEFAULT.PRIMARY_COLOR : "#d3d3d3", // Màu sắc dựa trên bước hiện tại
            }}
          >
            <Text style={styles.stepText}>{step}</Text>
          </View>
          {step < 3 && (
            <View
              style={{
                ...styles.stepLine,
                backgroundColor:
                  step < CurrentStep ? VALUE_DEFAULT.PRIMARY_COLOR : "#d3d3d3",
              }}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  stepText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  stepLine: {
    width: VALUE_DEFAULT.WIDTH_ITEM * 0.3,
    height: 2,
    marginHorizontal: 8,
  },
});

export default StepperRestaurantBooking;
