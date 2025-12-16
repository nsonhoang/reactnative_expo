export interface BookingState {
  selectedDate: Date;
  selectedTime: string;
  selectedPartySize: number;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  specialRequest: string;
  currentStep: number;
}

export type BookingAction =
  | {
      type: "UPDATE_FIELD";
      field: keyof BookingState;
      value: BookingState[keyof BookingState];
    }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "INCREASE_SIZE" }
  | { type: "DECREASE_SIZE" };
