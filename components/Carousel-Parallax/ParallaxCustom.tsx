import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-reanimated-carousel";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { VALUE_DEFAULT } from "@/constants/Values";

const data = [
  { id: "1", title: "Slide 1", color: "#FF7675" },
  { id: "2", title: "Slide 2", color: "#74B9FF" },
  { id: "3", title: "Slide 3", color: "#55EFC4" },
];

const CarouselDemo = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const RenderItem = ({ item, index, animationValue }: any) => {
    const animatedStyle = useAnimatedStyle(() => {
      const scale = interpolate(
        animationValue.value,
        [-1, 0, 1],
        [0.8, 1, 0.8]
      );
      return {
        transform: [{ scale }],
      };
    });

    return (
      <Animated.View
        style={[styles.item, { backgroundColor: item.color }, animatedStyle]}
      >
        <Text style={styles.title}>{item.title}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        mode="parallax"
        loop
        height={50}
        width={VALUE_DEFAULT.WIDTH_ITEM}
        data={data}
        autoPlay={true}
        autoPlayInterval={3500}
        scrollAnimationDuration={1000}
        onSnapToItem={setActiveIndex}
        renderItem={RenderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginHorizontal: -VALUE_DEFAULT.PADDING_HORIZONTAL,
  },
  item: {
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default CarouselDemo;
