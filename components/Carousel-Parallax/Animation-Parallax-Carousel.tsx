import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import Animated, { useSharedValue } from "react-native-reanimated";
import React from "react";
import { CarouselItem } from "@/app/(tabs)/(home)";
import ParallaxCarouselCard from "./Animation-Parallax-Card";

interface AnimationParallaxCarouselProps {
  data: CarouselItem[]; // Định nghĩa data là một mảng các CarouselItem
}

const OFFSET = 50; // Khoảng cách offset cho hiệu ứng parallax
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 2; // Chiều rộng của mỗi item trong carousel

const AnimationParallaxCarousel: React.FC<AnimationParallaxCarouselProps> = ({
  data,
}) => {
  const scrollX = useSharedValue(0);

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        decelerationRate={"fast"}
        snapToInterval={ITEM_WIDTH}
        bounces={false}
        disableIntervalMomentum
        scrollEventThrottle={12}
        onScroll={(event) => {
          scrollX.value = event.nativeEvent.contentOffset.x;
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {data.map((item, index) => (
          <ParallaxCarouselCard
            key={index}
            id={index}
            image={item.image}
            scrollX={scrollX}
            total={data.length}
          />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AnimationParallaxCarousel;
