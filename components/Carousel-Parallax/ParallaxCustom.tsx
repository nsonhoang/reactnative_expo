import { VALUE_DEFAULT } from "@/constants/Values";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

const data = [
  {
    id: "1",
    title: "Nhà hàng 1",
    description:
      "Nhà hàng sang trọng với thực đơn đa dạng và không gian ấm cúng.",
  },
  {
    id: "2",
    title: "Nhà hàng 2",
    description:
      "Thưởng thức ẩm thực độc đáo với phong cách phục vụ chuyên nghiệp.",
  },
  {
    id: "3",
    title: "Nhà hàng 3",
    description: "Không gian lý tưởng cho các buổi họp mặt và bữa ăn gia đình.",
  },
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
      <Animated.View style={[styles.card, animatedStyle]}>
        <ImageBackground
          source={require("../../assets/images/nhahang/nhahang1.jpg")}
          style={styles.imageBackground}
        >
          {/* Gradient phủ dưới ảnh để chữ nổi bật */}
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.6)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={StyleSheet.absoluteFill}
          />

          {/* Nội dung */}
          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.description}</Text>
          </View>
        </ImageBackground>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        mode="parallax"
        loop
        height={200}
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
  card: {
    borderRadius: 16,
    overflow: "hidden",
  },

  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  item: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    overflow: "hidden",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 14,
    color: "#f0f0f0",
  },
});

export default CarouselDemo;
