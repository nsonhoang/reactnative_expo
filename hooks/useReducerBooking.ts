import { BookingAction, BookingState } from "@/model/typeBooking";

export const bookingReducer = (
  state: BookingState,
  action: BookingAction
): BookingState => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "NEXT_STEP":
      return { ...state, currentStep: Math.min(state.currentStep + 1, 3) };
    case "PREV_STEP":
      return { ...state, currentStep: Math.max(state.currentStep - 1, 1) };
    case "INCREASE_SIZE":
      return { ...state, selectedPartySize: state.selectedPartySize + 1 };
    case "DECREASE_SIZE":
      return {
        ...state,
        selectedPartySize: Math.max(state.selectedPartySize - 1, 0),
      };
    default:
      return state;
  }
};
