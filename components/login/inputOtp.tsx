import { VALUE_DEFAULT } from "@/constants/Values";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

function InputOtp({
  cellCount = 6,
  onCodeFilled,
}: {
  cellCount?: number;
  onCodeFilled: (code: string) => void;
}) {
  const [otpValue, setOtpValue] = useState("");
  const ref = useBlurOnFulfill({ value: otpValue, cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otpValue,
    setValue: setOtpValue,
  });

  const handleOnChange = (text: string) => {
    setOtpValue(text);
    if (text.length === cellCount) {
      onCodeFilled(text);
    }
  };

  console.log("re-render");
  return (
    <View style={styles.container}>
      <CodeField
        ref={ref}
        {...props}
        value={otpValue}
        onChangeText={handleOnChange}
        cellCount={cellCount}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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

export default InputOtp;
