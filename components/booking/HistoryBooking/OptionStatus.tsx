import { VALUE_DEFAULT } from "@/constants/Values";
import React, { useCallback, useImperativeHandle } from "react";
import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
};

const OptionStatus = React.forwardRef<BottomSheetRefProps>(({}, ref) => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({
    y: 0,
  });
  const active = useSharedValue(false);

  const isActive = useCallback(() => {
    return active.value;
  }, []);
  const scrollTo = useCallback((destination: number) => {
    "worklet";

    active.value = destination !== 0;
    console.log(active.value);
    translateY.value = withSpring(destination, { damping: 50 });

    console.log(translateY.value);
    console.log("alo" + destination);
  }, []);

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
    scrollTo,
    isActive,
  ]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y; //lưu giữ trạng thái khi vuốt
      translateY.value = Math.max(
        translateY.value,
        -VALUE_DEFAULT.HEIGHT_ITEM * 0.6
      );
    })
    .onEnd(() => {
      if (translateY.value > -VALUE_DEFAULT.HEIGHT_ITEM * 0.6) {
        scrollTo(0);
      }
    });

  const BottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, BottomSheetStyle]}>
        <View style={styles.line}></View>
      </Animated.View>
    </GestureDetector>
  );
});
OptionStatus.displayName = "OptionStatus";

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: VALUE_DEFAULT.HEIGHT_ITEM,
    width: "100%",
    backgroundColor: "red",
    position: "absolute",
    top: VALUE_DEFAULT.HEIGHT_ITEM,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: "grey",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 2,
  },
});

export default OptionStatus;
