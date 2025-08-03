import { CarouselItem } from "@/app/(tabs)/(home)";
import { VALUE_DEFAULT } from "@/constants/Values";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

import { ButtonIconCustom } from "@/components/button/ButtonIconCustom";
import { useRouter } from "expo-router";

const data: CarouselItem[] = [
  { id: 1, image: require("../../../../assets/images/nhahang/nhahang1.jpg") },
  { id: 2, image: require("../../../../assets/images/nhahang/nhahang2.jpeg") },
  { id: 3, image: require("../../../../assets/images/nhahang/nhahang3.jpg") },
  { id: 4, image: require("../../../../assets/images/nhahang/nhahang4.jpg") },
];

interface CarouselItemList {
  list: CarouselItem[];
}

const LeftAlignCarousel: React.FC<CarouselItemList> = ({ list }) => {
  const route = useRouter();
  const progress = useSharedValue<number>(0);
  const RenderItem = ({
    item,
    index,
  }: {
    item: CarouselItem;
    index: number;
  }) => {
    return (
      <ImageBackground source={item.image} style={styles.imageBackground}>
        <View style={styles.selectImage}>
          <Text>
            {index}/{list.length}
          </Text>
        </View>
      </ImageBackground>
    );
  };

  const handlerBack = () => {
    route.back();
  };

  const handlerSearch = () => {
    route.push("/(tabs)/(home)/search");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <ButtonIconCustom
          iconName="arrow-back-ios-new"
          size={VALUE_DEFAULT.SIZE_ICON}
          onPress={handlerBack}
          style={styles.button}
          color="#fff"
        />
        <ButtonIconCustom
          iconName="search"
          size={VALUE_DEFAULT.SIZE_ICON}
          onPress={handlerSearch}
          style={styles.button}
          color="#fff"
        />
      </View>
      <Carousel
        width={VALUE_DEFAULT.WIDTH_ITEM} // Đảm bảo rằng WIDTH_ITEM là một giá trị hợp lệ
        height={200} // Thêm chiều cao cho carousel
        loop={true}
        snapEnabled={true}
        pagingEnabled={true}
        data={data}
        onProgressChange={progress}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={RenderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  containerHeader: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: VALUE_DEFAULT.PADDING_HORIZONTAL,
  },
  imageBackground: {
    flex: 1, // Để hình nền chiếm toàn bộ không gian
    flexDirection: "row",
  },
  selectImage: {
    backgroundColor: "#FFF",
    padding: 2,
    borderRadius: 5,
    alignSelf: "flex-end",
    margin: VALUE_DEFAULT.PADDING_HORIZONTAL,
  },
  button: {
    borderRadius: 50,
    padding: VALUE_DEFAULT.PADDING_HORIZONTAL,
  },
});

export default LeftAlignCarousel;
