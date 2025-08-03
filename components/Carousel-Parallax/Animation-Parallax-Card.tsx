import {
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

const OFFSET = 45; // Khoảng cách offset cho hiệu ứng parallax
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 2; // Chiều rộng của mỗi item trong carousel
const ITEM_HEIGHT = 300; // Chiều cao của mỗi item trong carousel

const ParallaxCarouselCard = (props: {
  image: ImageSourcePropType;
  id: number;
  scrollX: SharedValue<number>;
  total: number;
}) => {
  const inputRange = [
    (props.id - 1) * ITEM_WIDTH,
    props.id * ITEM_WIDTH,
    (props.id + 1) * ITEM_WIDTH,
  ];
  const translateStyle = useAnimatedStyle(() => {
    const translate = interpolate(
      props.scrollX.value,
      inputRange,
      [0.97, 0.97, 0.97],
      Extrapolation.CLAMP
    );
    const opacity = interpolate(
      props.scrollX.value,
      inputRange,
      [0.4, 1, 0.4],
      Extrapolation.CLAMP
    );
    return {
      transform: [
        {
          scale: translate,
        },
      ],
      opacity,
    };
  });
  const translateImageStyle = useAnimatedStyle(() => {
    const translate = interpolate(props.scrollX.value, inputRange, [
      -ITEM_WIDTH * 0.2,
      0,
      ITEM_WIDTH * 0.4,
    ]);

    return {
      transform: [
        {
          translateX: translate,
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        {
          width: ITEM_WIDTH,
          height: ITEM_HEIGHT,
          marginLeft: props.id === 0 ? OFFSET : undefined,
          marginRight: props.id === props.total ? OFFSET : undefined,
        },
        translateStyle,
      ]}
    >
      <Animated.View style={[translateImageStyle]}>
        <ImageBackground source={props.image} style={styles.image}>
          <Text>{props.id}</Text>
        </ImageBackground>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    borderRadius: 14,
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
});
export default ParallaxCarouselCard;
