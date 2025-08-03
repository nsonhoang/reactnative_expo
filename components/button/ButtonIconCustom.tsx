import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, View } from "react-native";

const ButtonIconCustom = (props: {
  iconName: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
  size?: number;
  color?: string;
  style?: object;
  children?: React.ReactNode;
}) => {
  const { iconName, onPress, size = 24, color = "#000" } = props;

  return (
    <View
      style={{
        ...props.style,
      }}
    >
      <Pressable onPress={onPress}>
        <MaterialIcons name={iconName} size={size} color={color} />
        {props.children}
      </Pressable>
    </View>
  );
};

export { ButtonIconCustom };
